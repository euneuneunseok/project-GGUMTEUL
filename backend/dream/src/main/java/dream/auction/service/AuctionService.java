package dream.auction.service;

import dream.auction.domain.AuctionRepository;
import dream.auction.dto.request.RequestBidding;
import dream.auction.dto.response.ResponseAuction;
import dream.auction.dto.response.ResponseAuctionDetail;
import dream.common.domain.ResultTemplate;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuctionService {

    private final AuctionRepository auctionRepository;

    // 경매 등록하는 함수
    public ResultTemplate postAuction(long dreamCardId) {
        
        return ResultTemplate.builder().status(HttpStatus.OK.value()).data("success").build();
    }

    // 전체 경매등록 카드들 조회 함수
    public ResultTemplate getAllAuctionList() {
        List<ResponseAuction> response = new ArrayList<>();

        return ResultTemplate.builder().status(HttpStatus.OK.value()).data(response).build();
    }

    // 키워드를 통해 경매 등록 카드들 조회
    public ResultTemplate getAuctionListByKeyword(String keyword) {
        // 명세에 response 데이터가 없어서 DTO 아직 못 만들었어요
        // 벌써 여기를 개발중이시라면 당신은 속도가 어마어마하시네요
        // 분명 성공할거에요 좋은 곳 취업해서 우리를 잊지말아요 - 0908 21:46 선진올림
//        return ResultTemplate.builder().status(HttpStatus.OK.value()).data(response).build();
        return null;
    }

    // 경매 상세 조회 함수 - 난이도 매우 어려워보임
    public ResultTemplate getAuctionDetail(long dreamCardId) {

        ResponseAuctionDetail response = new ResponseAuctionDetail();

        return ResultTemplate.builder().status(HttpStatus.OK.value()).data(response).build();
    }

    // 입찰 등록 함수 - 유저 같이 매개변수로 받아와서 처리부탁드립니다.
    public ResultTemplate postBidding(RequestBidding request) {

        return ResultTemplate.builder().status(HttpStatus.OK.value()).data("success").build();
    }
}
