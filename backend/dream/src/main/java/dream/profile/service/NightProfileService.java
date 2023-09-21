package dream.profile.service;

import dream.card.domain.DreamCardRepository;
import dream.common.domain.ResultTemplate;
import dream.common.exception.BadRequestException;
import dream.common.exception.NoSuchElementException;
import dream.common.exception.NotFoundException;
import dream.profile.dto.response.*;
import dream.user.domain.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class NightProfileService {


    private  final FollowRepository followRepository;
    private final DreamCardRepository dreamCardRepository;
    private final UserRepository userRepository;

    public ResultTemplate getNightHeader(User user, Long profileUserId){

        if(userRepository.findByUserId(profileUserId).isEmpty()) throw new BadRequestException(BadRequestException.NOT_EXIST_USER_PROFILE);

        int followingCount = followRepository.findByFromId(user.getUserId()).size();
        int  followerCount = followRepository.findByToId(user.getUserId()).size();

        //내 프로필 헤더 조회
        if(user.getUserId()==profileUserId){

            ResponseProfileHeaderBySelf response = ResponseProfileHeaderBySelf.from(user, followerCount, followingCount);

            return ResultTemplate.builder().status(HttpStatus.OK.value()).data(response).build();

        }else{
            int dreamCardCount = dreamCardRepository.findByDreamCardOwnerId(profileUserId).size();
            ResponseNightProfileHeaderByOther response = ResponseNightProfileHeaderByOther.from(user, dreamCardCount, followerCount, followingCount);
            return ResultTemplate.builder().status(HttpStatus.OK.value()).data(response).build();
        }
    }



//    List<DreamCard> findCards = dreamCardQueryRepository.findDreamCardPaging(lastItemId, size);
//        if (findCards.isEmpty()) throw new NotFoundException(NotFoundException.CARD_LIST_NOT_FOUND);
//
//    List<ResponseDreamCard> dreamCards = findCards.stream()
//            .limit(size)
//            .map(findCard -> {
//                boolean isLike = findCard.getDreamCardLikes().stream()
//                        .anyMatch(dreamCardLike ->
//                                dreamCardLike.getDreamCard().getDreamCardId().equals(findCard.getDreamCardId()) &&
//                                        dreamCardLike.getUser().getUserId().equals(1L));
//                return ResponseDreamCard.from(findCard, isLike);
//            })
//            .collect(Collectors.toList());
//
//    boolean hasNext = findCards.size() > size;
//    ResponseDreamCardList list = ResponseDreamCardList.from(dreamCards, hasNext);
//
//        return ResultTemplate.builder().status(HttpStatus.OK.value()).data(list).build();
//}
}
