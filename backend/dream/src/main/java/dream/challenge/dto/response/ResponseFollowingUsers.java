package dream.challenge.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseFollowingUsers {
    private boolean hasUserWithStory;
    private List<ResponseUserNickAndId> resultList;
    private boolean hasNext;

    public static ResponseFollowingUsers from(boolean hasUserWithStory, List<ResponseUserNickAndId> userList, boolean hasNext){

        ResponseFollowingUsers response = new ResponseFollowingUsers();
        response.hasUserWithStory = hasUserWithStory;
        response.resultList = userList;
        response.hasNext = hasNext;

        return response;
    }
}
