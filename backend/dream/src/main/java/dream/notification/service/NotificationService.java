package dream.notification.service;

import dream.common.domain.ResultTemplate;
import dream.notification.domain.Notification;
import dream.notification.domain.NotificationQueryRepository;
import dream.notification.domain.NotificationRepository;
import dream.notification.dto.ResponseNotification;
import dream.notification.dto.ResponseNotificationListByAgoDays;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import dream.user.domain.*;
import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationRepository notificationRepository;

    private final NotificationQueryRepository notificationQueryRepository;

    public ResultTemplate getNotificationList(User user, Long lastItemId, int size){

        List<Notification> list = notificationQueryRepository.getNotificationListByUserId(user.getUserId(),lastItemId, size);

        List<ResponseNotification> insertList = list.stream().map(notification -> {
            return ResponseNotification.from(notification);
        }).limit(size).collect(Collectors.toList());

        boolean hasNext = list.size() > size;

        ResponseNotificationListByAgoDays response = ResponseNotificationListByAgoDays.from(insertList, hasNext);

        return ResultTemplate.builder().status(HttpStatus.OK.value()).data(response).build();


    }



}
