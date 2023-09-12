package dream.challenge.dto.response;

import dream.card.domain.DreamKeyword;
import dream.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseUserNickAndId {
    private long userId;
    private String nickname;

    public static ResponseUserNickAndId from(User user){

        ResponseUserNickAndId response = new ResponseUserNickAndId();

        response.userId = user.getUserId();
        response.nickname = user.getNickname();

        return response;
    }
}
