package dream.challenge.dto.response;

import dream.challenge.domain.ChallengeDetail;
import dream.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseChallengeDetail {
    private Long userId;
    private String nickname;
    private String challengeDetailContent;
    private int likeCount;
    private String photoUrl;
    private boolean isLike;
    private int commentCount;
    private int challengeDetailCount;

    public static ResponseChallengeDetail from(ChallengeDetail challengeDetail, boolean isLike) {

        ResponseChallengeDetail response = new ResponseChallengeDetail();

        response.userId = challengeDetail.getUser().getUserId();
        response.nickname = challengeDetail.getUser().getNickname();
        response.challengeDetailContent = challengeDetail.getChallengeDetailContent();
        response.likeCount = challengeDetail.getChallengeDetailLikes().size();
        response.photoUrl = challengeDetail.getPhotoUrl();
        response.commentCount = challengeDetail.getComments().size();
        response.isLike = isLike;
        // isLike 처리
        // challengeDetailCount 처리

        return response;
    }
}