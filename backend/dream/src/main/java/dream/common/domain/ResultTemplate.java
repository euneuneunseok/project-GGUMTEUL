package dream.common.domain;

import lombok.*;
import org.springframework.http.HttpStatus;

@Data
@Builder
@AllArgsConstructor
public class ResultTemplate<T> {
    private int status;
    private T data;
}
