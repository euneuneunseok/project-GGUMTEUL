package dream.auction.controller;

import dream.auction.dto.request.RequestBidding;
import dream.auction.service.AuctionService;
import dream.common.domain.ResultTemplate;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auction")
@RequiredArgsConstructor
public class AuctionController {

    private final AuctionService auctionService;

    @PostMapping(value = "/{dreamCardId}")
    public ResultTemplate postAuction(@PathVariable("dreamCardId") long dreamCardId){

        return auctionService.postAuction(dreamCardId);
    }

    @GetMapping(value = "/list")
    public ResultTemplate getAllAuctionList(){

        return auctionService.getAllAuctionList();
    }

    @GetMapping(value = "/list/{searchKeyword}")
    public ResultTemplate getAuctionListByKeyword(@PathVariable("searchKeyword") String keyword){

        return auctionService.getAuctionListByKeyword(keyword);
    }

    @GetMapping(value = "/detail/{dreamCardId}")
    public ResultTemplate getAuctionDetail(@PathVariable("dreamCardId") long dreamCardId){

        return auctionService.getAuctionDetail(dreamCardId);
    }

    @PostMapping(value = "/bid")
    public ResultTemplate postBidding(@RequestBody RequestBidding request){

        // 유저 받아와서 같이 넘겨주세요
        return auctionService.postBidding(request);
    }
}
