package dream.card.dto.response;

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
public class ResponseDreamCardDetailByUser {
    private long dreamCardid;
    private long dreamCardAuthor;
    private long dreamOwner;
    private String dreamCardContent;
    private String dreamTelling;
    private String dreamCardImageUrl;
    private Grade grade;
    private Grade positivePoint;
    private Grade rarePoint;
    private LocalDateTime createdAt;
    private BaseCheckType actionStatus;
    private BaseCheckType isShow;
    private List<ResponseKeyword> keywords;
    private int likeCount;
    private BaseCheckType reviewStatus;
}
