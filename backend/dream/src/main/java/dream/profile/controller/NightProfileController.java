package dream.profile.controller;

import dream.common.domain.ResultTemplate;
import dream.profile.service.NightProfileService;
import dream.security.jwt.domain.UserInfo;
import dream.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/profile/night")
public class NightProfileController {

    private final NightProfileService nightProfileService;

    @GetMapping("/header/{profileUserId}")
    public ResultTemplate getNightHeader(@UserInfo User user, @PathVariable Long profileUserId){
        return nightProfileService.getNightHeader(user, profileUserId);
    }


}


