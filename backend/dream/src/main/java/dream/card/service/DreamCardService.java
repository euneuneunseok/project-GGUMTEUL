package dream.card.service;

import dream.card.domain.DreamCard;
import dream.card.domain.DreamCardRepository;
import dream.card.dto.request.RequestDreamCardDetail;
import dream.card.dto.response.*;
import dream.common.domain.ResultTemplate;
import dream.common.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class DreamCardService {

    private final DreamCardRepository dreamCardRepository;

    public ResultTemplate getNightMain(){

        List<DreamCard> findCards = dreamCardRepository.findFetchTestByAll()
                .orElseThrow(() -> new NotFoundException(NotFoundException.USER_NOT_FOUND));

        List<ResponseDreamCard> list = new ArrayList<>();
        for (DreamCard findCard : findCards) {
            list.add(ResponseDreamCard.from(findCard));

            log.info("{}",findCard.getDreamCardLike().size());
        }

        return ResultTemplate.builder().status(HttpStatus.OK.value()).data(list).build();
    }

    // 카드 상세 정보 가져오는 함수
    public ResultTemplate getFlipDreamCardDetail(long id) {

        ResponseFlipDreamCardDetail response = new ResponseFlipDreamCardDetail();
        
        return ResultTemplate.builder().status(HttpStatus.OK.value()).data(response).build();
    }

    // 카드 조회수 업데이트하는 함수
    public ResultTemplate updateDreamCard(long dreamCardId) {

        return ResultTemplate.builder().status(HttpStatus.OK.value()).data("SUCCESS").build();
    }

    // 카드 좋아요 홤수
    public ResultTemplate updateCardLike(long dreamCardId){
        // 매개변수에 userId 추가
        return ResultTemplate.builder().status(HttpStatus.OK.value()).data("SUCCESS").build();
    }

    // 카드 좋아요 취소 함수
    public ResultTemplate updateCardUnlike(long dreamCardId){
        // 매개변수에 userId 추가
        return ResultTemplate.builder().status(HttpStatus.OK.value()).data("SUCCESS").build();
    }

    // 카드 전처리 후 결과 반환
    public ResultTemplate getPreProcessingForDreamCard(String dreamCardContent) {

        ResponseDreamCardPreprocessing response = new ResponseDreamCardPreprocessing();
        // 아마 이건 하둡이랑 연관된 함수
        
        return ResultTemplate.builder().status(HttpStatus.OK.value()).data(response).build();
    }

    // 실제 꿈카드 생성 함수
    public ResultTemplate postDreamCard(RequestDreamCardDetail request) {

        ResponseDreamCardId response = new ResponseDreamCardId();
        
        // 꿈 카드 삽입하고 PK 반환받기
        
        return ResultTemplate.builder().status(HttpStatus.OK.value()).data(response).build();
    }

    // 
    public ResultTemplate getDreamCardDetailByUser(long dreamCardId) {

        ResponseDreamCardDetailByUser response = new ResponseDreamCardDetailByUser();

        return ResultTemplate.builder().status(HttpStatus.OK.value()).data(response).build();
    }
}
