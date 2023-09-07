package dream.card.dto.response;


import dream.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseUser {

    private Long userId;
    private String nickname;


    public static ResponseUser from(User user){
        ResponseUser response = new ResponseUser();
        response.userId = user.getUserId();
        response.nickname = user.getNickname();
        return response;
    }
}
