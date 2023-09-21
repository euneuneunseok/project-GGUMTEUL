package dream.profile.controller;

import dream.common.domain.ResultTemplate;
import dream.profile.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/profile/common")
public class ProfileController {

    private final ProfileService profileService;
    @GetMapping("/following/list/{profileUserId}")
    public ResultTemplate getFollowingList(@PathVariable Long profileUserId, @RequestParam(value = "lastItemId", required = false) Long lastItemId, @RequestParam int size){

        return profileService.getFollowingList(profileUserId, lastItemId, size);
    }

    @GetMapping("/follower/list/{profileUserId}")
    public ResultTemplate getFollowerList(@PathVariable Long profileUserId, @RequestParam(value = "lastItemId", required = false) Long lastItemId, @RequestParam int size){

        return profileService.getFollowerList(profileUserId, lastItemId, size);
    }
}
