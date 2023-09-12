package dream.user.service;

import dream.common.domain.ResultTemplate;
import dream.common.exception.NotFoundException;
import dream.user.domain.User;
import dream.user.domain.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    // 예시 - 지워질 코드
    public ResultTemplate getUser(long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(NotFoundException.USER_NOT_FOUND));

        return ResultTemplate.builder().status(HttpStatus.OK.value()).data(user).build();
    }

    // 로그아웃 ( 토큰 삭제 로직이 아마 들어가면 되겠지 )
    // 하지말라니까 User는 아예 안 해놓을게
    public ResultTemplate logout(User user){

        return ResultTemplate.builder().status(HttpStatus.OK.value()).data("SUCCESS").build();
    }
}
