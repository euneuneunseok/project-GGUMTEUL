package dream.card.dto.response;

import dream.card.domain.DreamCard;
import dream.card.domain.Keyword;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseKeyword {

    private String keyword;

    public static ResponseKeyword from(Keyword keyword){

        ResponseKeyword response = new ResponseKeyword();
        response.keyword = keyword.getKeyword();

        return response;
    }
}
