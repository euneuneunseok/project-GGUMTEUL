package dream.auction.dto.response;

import dream.card.domain.Grade;
import dream.card.dto.response.ResponseKeyword;
import dream.common.domain.BaseCheckType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseAuction {
    private long auctionId;
    private long dreamCardId;
    private long dreamCardOwner;
    private String ownerNickname;
    private long dreamCardAuthor;
    private Grade positivePoint;
    private Grade rarePoint;
    private List<ResponseKeyword> keywords;
    private LocalDateTime createdAt;
    private LocalTime endedAt;

    private BaseCheckType auctonStatus;
}
