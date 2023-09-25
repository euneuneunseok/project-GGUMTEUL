package dream.notification.firebase;

import com.google.firebase.messaging.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
@Slf4j
public class FCMService {


    public void sendChellengeNotification(final RequestNotification requestNotification) throws InterruptedException, ExecutionException {
        log.info("send Notification");
        Message message = Message.builder()
                .putData("type", "challengeNotification")
                .putData("id", String.valueOf(requestNotification.getChallenge().getChallengeId()))
                .setWebpushConfig(WebpushConfig.builder().putHeader("ttl", "300")
                        .setNotification(
                                new WebpushNotification(requestNotification.getTitle(), requestNotification.getMessage()))
                        .build()
                )
                .build();

        String response = FirebaseMessaging.getInstance().sendAsync(message).get();
        log.info("Sent message: " + response);

    }

    public void sendAuctionNotification(final RequestNotification requestNotification) throws InterruptedException, ExecutionException {
        log.info("send Notification");
        Message message = Message.builder()
                .putData("type", "auctionNotification")
                .putData("id", String.valueOf(requestNotification.getAuction().getAuctionId()))
                .setWebpushConfig(WebpushConfig.builder().putHeader("ttl", "300")
                        .setNotification(
                                new WebpushNotification(requestNotification.getTitle(), requestNotification.getMessage()))
                        .build()
                )
                .build();

        String response = FirebaseMessaging.getInstance().sendAsync(message).get();
        log.info("Sent message: " + response);

    }



}
