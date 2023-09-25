// 리액트
import React, { useEffect, useState } from "react";

// 컴포넌트
import AuctionCard from "../nightcommon/AuctionCard";
import basicHttp from "api/basicHttp";
import InfiniteScroll from "components/common/InfiniteScroll";
import { AuctionCardType } from "../auction/AuctionMainList";

// 스타일

const NightProfileSellingTab = () => {

  // axios로 데이터 받기
  // const [auctionSellingDataList, setAuctionSellingDataList] = useState<AuctionSellingAxiosType[]>();
  const [auctionSellingDataList, setAuctionSellingDataList] = useState<AuctionCardType[]>();
  const [lastItemId, setLastItemId] = useState<number>(0);
  let size = 12;
  
  const getAxios = () => {
    basicHttp.get(`/profile/night/auction/list?lastItemId=${lastItemId}&size=${size}`)
    .then((res) => {
      console.log("== 꿈 팔기 탭 ==", res); 
      setAuctionSellingDataList(res.data.data.auctionList);
    })
    .catch((err) => console.log("== 꿈 팔기 탭 ==", err))
  }

  useEffect(() => {
    getAxios();
  }, []);

  // infinite scroll
  const [arriveEnd, setArriveEnd] = useState<boolean>(false); // 바닥에 다다름을 알려주는 변수

  useEffect(() => {
    // 바닥에 다다랐으면 axios 요청
    if (arriveEnd) {
      // axios 요청
      getAxios();
      // setArriveEnd(false);
      // setLastItemId(auctionSellingDataList[-1]["challengeId"]); // 마지막 item id 변경
    }
  }, [arriveEnd])

  return (
    <>
    {
      auctionSellingDataList &&
      <InfiniteScroll 
      setArriveEnd={setArriveEnd} 
      // lastItemId={lastItemId}
      component={
        auctionSellingDataList?.map((data, i) => (
          <AuctionCard auctionCard={data} key={i}/>
          ))
        }
      />
    }
    </>
  )
}

export default NightProfileSellingTab