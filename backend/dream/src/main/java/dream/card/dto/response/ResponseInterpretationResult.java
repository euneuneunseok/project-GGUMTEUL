package dream.card.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseInterpretationResult {
    private long dreamTellingId;
    private String dreamTellingTitle;
    private String dreamTelling;
}
