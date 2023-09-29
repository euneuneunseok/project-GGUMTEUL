// 완료 챌린지리스트.map
// ChalContentListItem

// 리액트
import React, { useEffect, useState } from "react";

// 컴포넌트
import ChalContentListItem from "../daycommon/ChalContentListItem";
import { DayChallengeListType, DayChallengeObjType } from "./DayProfileOngoingTab";
import tokenHttp from "api/tokenHttp";
import InfiniteScroll from "components/common/InfiniteScroll";
import { useParams } from "react-router-dom";

// 스타일

const DayProfileCompleteTab = () => {
  const [allChalList, setAllChalList] = useState<DayChallengeListType>([]);
  const [lastItemId, setLastItemId] = useState<number>(0); // 마지막 아이템 번호
  const [hasNext, setHasNext] = useState<boolean>(true); 
  // const profileUserId = useParams();
  const profileUserId :number = 20;
  let size :number = 6;
  
  // infinite scroll
  const [arriveEnd, setArriveEnd] = useState<boolean>(true); // 바닥에 다다름을 알려주는 변수
  
  // api 요청
  const getAxios = () => {
    let apiAddress :string = "";

    // 처음 요청 받을 때 : lastItemId 없음
    if (lastItemId === 0) {apiAddress = `/profile/day/mychallenge/end/list/${profileUserId}?size=${size}`}
    // 두번째부터 요청 할 때
    else if (lastItemId > -1) {apiAddress = `/profile/day/mychallenge/end/list/${profileUserId}?lastItemId=${lastItemId}&size=${size}`}
    
    if (arriveEnd && hasNext) {
      tokenHttp.get(apiAddress)
      .then((res)=> {
        console.log("프로필 완료 탭 : ", res)
        const response = res.data.data
        const challengeList = response.challengeList
        setAllChalList([...allChalList, ...challengeList]);
        setLastItemId(challengeList[challengeList.length - 1].challengeId);
        setHasNext(response.hasNext);
      })
      .catch(err=>console.log("프로필 완료 탭 : ", err))
    }
  };

  useEffect(() => {
    getAxios();
  }, [])

  useEffect(() => {
    // 바닥에 다다랐으면 axios 요청
    if (arriveEnd) {
      getAxios();
      setArriveEnd(false);
    }
  }, [arriveEnd])


  return (
    <>
    {
      allChalList &&
      <InfiniteScroll
      setArriveEnd={setArriveEnd} 
      // lastItemId={lastItemId}
      component={
        allChalList?.map((chal :DayChallengeObjType) => (
          <ChalContentListItem key={chal.challengeId} chal={chal} />))
        }
        >
      </InfiniteScroll>
    }
    </>
  )
  }

export default DayProfileCompleteTab