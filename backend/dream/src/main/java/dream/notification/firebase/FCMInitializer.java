package dream.notification.firebase;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.ByteArrayInputStream;
import java.io.IOException;

@Service
@Slf4j
public class FCMInitializer {

    @Value("${firebase.type}")
    private String type;

    @Value("${firebase.project_id}")
    private String projectId;

    @Value("${firebase.private_key_id}")
    private String privateKeyId;

    @Value("${firebase.private_key}")
    private String privateKey;

    @Value("${firebase.client_email}")
    private String clientEmail;

    @Value("${firebase.client_id}")
    private String clientId;

    @Value("${firebase.auth_uri}")
    private String authUri;

    @Value("${firebase.token_uri}")
    private String tokenUri;

    @Value("${firebase.auth_provider_x509_cert_url}")
    private String authProviderCertUrl;

    @Value("${firebase.client_x509_cert_url}")
    private String clientCertUrl;
    @PostConstruct
    public void initialize() {
        try {

            String credentials = String.format(
                    "{\n" +
                            "  \"type\": \"%s\",\n" +
                            "  \"project_id\": \"%s\",\n" +
                            "  \"private_key_id\": \"%s\",\n" +
                            "  \"private_key\": \"%s\",\n" +
                            "  \"client_email\": \"%s\",\n" +
                            "  \"client_id\": \"%s\",\n" +
                            "  \"auth_uri\": \"%s\",\n" +
                            "  \"token_uri\": \"%s\",\n" +
                            "  \"auth_provider_x509_cert_url\": \"%s\",\n" +
                            "  \"client_x509_cert_url\": \"%s\"\n" +
                            "}",
                    type, projectId, privateKeyId, privateKey, clientEmail, clientId,
                    authUri, tokenUri, authProviderCertUrl, clientCertUrl
            );

            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(new ByteArrayInputStream(credentials.getBytes())))
                    .build();
            if (FirebaseApp.getApps().isEmpty()) {
                FirebaseApp.initializeApp(options);

            }
        } catch (IOException e) {
            log.error(e.getMessage());
        }
    }


}
