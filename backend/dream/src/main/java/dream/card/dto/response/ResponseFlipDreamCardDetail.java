package dream.card.dto.response;

import dream.card.domain.DreamCard;
import dream.card.domain.Grade;
import dream.common.domain.BaseCheckType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseFlipDreamCardDetail {
    private long dreamCardId;
    private long dreamCardOwner;
    private String ownerNickname;
    private long dreamCardAuthor;
    private Grade grade;
    private LocalDateTime createdAt;
    private String dreamTelling;
    private Enum<Grade> positivePoint;
    private Enum<Grade> rarePoint;
    private BaseCheckType auctionStatus;
    private BaseCheckType isShow;
    private List<ResponseKeyword> keywords;

    public static ResponseFlipDreamCardDetail from(DreamCard dreamCard){
        ResponseFlipDreamCardDetail response = new ResponseFlipDreamCardDetail();

        response.dreamCardId = dreamCard.getDreamCardId();
        response.dreamCardOwner = dreamCard.getDreamCardOwner().getUserId();
        response.ownerNickname = dreamCard.getDreamCardOwner().getNickname();
        response.dreamCardAuthor = dreamCard.getDreamCardAuthor().getUserId();
        response.grade = dreamCard.getGrade();
        response.createdAt = dreamCard.getCreatedAt();
        response.dreamTelling = dreamCard.getDreamTelling();
        // 이거는 DB 수정하고 다시 GRADE 먹이는 방법 대화하고 코드 수정 필요
//        response.positivePoint = globalService.cardRE(dreamCard.getPositivePoint());
//        response.rarePoint = dreamCard.getRarePoint();
        response.auctionStatus = dreamCard.getAuctionStatus();
        response.isShow = dreamCard.getIsShow();

//        for(Keyword key: dreamCard.get)

        return null;
    }
}
