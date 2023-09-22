package dream.profile.controller;

import dream.common.domain.ResultTemplate;
import dream.profile.service.DayProfileService;
import dream.user.domain.User;
import dream.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/profile/day")
public class DayProfileController {


    private final UserService userService;
    private final DayProfileService dayProfileService;


    @GetMapping("/header/{profileUserId}")
    public ResultTemplate getNightHeader(@PathVariable Long profileUserId){
        User user = userService.getUserForDev(20L);

        return dayProfileService.getDayHeader(user, profileUserId);
    }

    @GetMapping("/badge/list/{profileUserId}")
    public ResultTemplate getBadgeList(@PathVariable Long profileUserId,
                                       @RequestParam(value = "lastItemId", required = false)
                                           Long lastItemId, @RequestParam("size") int size){

        return dayProfileService.getProfileBadgeList(profileUserId, lastItemId, size);
    }
}
