package dream.notification.firebase;

import dream.auction.domain.Auction;
import dream.challenge.domain.Challenge;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestNotification {

    private String title;
    private String Message;

    private String token;

    private Challenge challenge;

    private Auction auction;




}
