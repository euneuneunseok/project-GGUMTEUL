package dream.notification.domain;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.UUID;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Repository
@RequiredArgsConstructor
public class FcmTokenRepository {

    private final RedisTemplate redisTemplate;

    // TTL을 매개변수로 받아서 토큰 저장
    public void saveToken(String userId, String token, long ttlInSeconds) {
        String tokenKey = "token:" + UUID.randomUUID().toString();

        redisTemplate.opsForValue()
                .set(tokenKey, token, ttlInSeconds, TimeUnit.SECONDS);

        redisTemplate.opsForSet().add(userId, tokenKey);
    }

    public Set<Object> getTokens(String userId) {
        Set<String> tokenKeys = redisTemplate.opsForSet().members(userId);

        // 만료된 토큰 제거
        tokenKeys.removeIf(tokenKey -> !redisTemplate.hasKey(tokenKey));

        return tokenKeys.stream()
                .map(tokenKey -> redisTemplate.opsForValue().get(tokenKey))
                .collect(Collectors.toSet());
    }

    // 토큰 제거
    public void deleteToken(String userId, String token) {
        String tokenKey = getTokenKeyByValue(token);

        if (tokenKey != null) {
            redisTemplate.delete(tokenKey);
            redisTemplate.opsForSet().remove(userId, tokenKey);
        }
    }

    // 토큰 값으로 토큰 key 찾기 (옵션)
    private String getTokenKeyByValue(String token) {
        Set<String> keys = redisTemplate.keys("token:*");
        for (String key : keys) {
            if (token.equals(redisTemplate.opsForValue().get(key))) {
                return key;
            }
        }
        return null;
    }

//    // 정기적으로 실행해야 할 청소 작업
//    public void cleanExpiredTokens() {
//        Set<String> userIds = redisTemplate.keys("*"); // 모든 사용자 ID 가져오기
//
//        for (String userId : userIds) {
//            Set<String> tokenKeys = redisTemplate.opsForSet().members(userId);
//            tokenKeys.removeIf(tokenKey -> !redisTemplate.hasKey(tokenKey));
//
//            for (String expiredKey : tokenKeys) {
//                redisTemplate.opsForSet().remove(userId, expiredKey);
//            }
//        }
//    }


}
