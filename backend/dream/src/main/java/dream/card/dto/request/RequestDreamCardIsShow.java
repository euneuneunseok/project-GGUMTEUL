package dream.card.dto.request;

import dream.common.domain.BaseCheckType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestDreamCardIsShow {
    private long dreamCardId;
    private BaseCheckType isShow;
}
