// 리액트
import React, {useEffect, useState} from "react";

// 외부 라이브러리 파일
import axios from "axios";
import basicHttp from "api/basicHttp";

// 컴포넌트
import NightHomeItem from "./NightHomeItem";
import InfiniteScroll from "components/common/InfiniteScroll";
import tokenHttp from "api/tokenHttp";


// 타입
export interface NightHomeItemType {
  dreamCardId: number;
  dreamCardOwner: number;
  ownerNickname: string;
  ownerProfileUrl: string;
  dreamCardImageUrl: string;
  dreamCardAuthor: number; // 꿈 카드 작성자
  createAt: string;
  likedNumber: number,
  like: boolean;
}

export interface NightHomeListType extends Array<NightHomeItemType>{}

const NightHomeList = () => {

  const [nightHomeDataSet, setNightHomeDataSet] = useState<NightHomeListType>([])
  const [lastItemId, setLastItemId] = useState<number>(0);
  let size = 6;

  // api 요청하는 함수
  const getAxios = () => {
    let apiAddress :string = "";

    // 처음 요청 받을 때 : lastItemId 없음
    if (lastItemId === 0) {apiAddress = `/night/?size=${size}`}
    // 두번째부터 요청 할 때
    else {apiAddress = `/night/?lastItemId=${lastItemId}&size=${size}`}
    
    tokenHttp.get(apiAddress)
    .then((res)=> {
      console.log("MAIN : ", res)
      setNightHomeDataSet([...nightHomeDataSet, ...res.data.data.list]);
      nightHomeDataSet[nightHomeDataSet.length - 1] && setLastItemId(nightHomeDataSet[nightHomeDataSet.length - 1].dreamCardId)
      console.log("lastItemId : ", lastItemId);
      // getLastIndex(res)
      // console.log(res.data.data.list[].dreamCardId)
      // setLastItemId(res.data.data.list[]["dreamCardId"])
      
      // setNightHomeDataSet((prev:any) => {
        //   [...prev, ...res.data.list]
        // })
        // console.log(res.data.data.list)
      })
    .catch(err=>console.log("===", err))
  };

  useEffect(() => {
    getAxios();
  }, []);

  // nightHomeDataSet에 axios로 데이터가 들어온 뒤 마지막 인덱스 저장
  const getLastIndex = async (res :any) :Promise<void> => {
    // setNightHomeDataSet([...nightHomeDataSet, res.data.data.list])
    console.log("************", [...nightHomeDataSet, ...res.data.data.list])
    setNightHomeDataSet([...nightHomeDataSet, ...res.data.data.list])
    // console.log("nightHomeDataSet : ", nightHomeDataSet)
    await nightHomeDataSet[nightHomeDataSet.length - 1] && setLastItemId(nightHomeDataSet[nightHomeDataSet.length - 1].dreamCardId)
    console.log("lastItemId : ", lastItemId)
  }


  // infinite scroll
  const [arriveEnd, setArriveEnd] = useState<boolean>(false); // 바닥에 다다름을 알려주는 변수

  // 바닥에 다다랐으면 axios 요청
  useEffect(() => {
    if (arriveEnd) {
      // axios 요청
      getAxios();
      setArriveEnd(false);
    }
  }, [arriveEnd])


  return (
    <>
    {
      nightHomeDataSet &&
      <InfiniteScroll
      setArriveEnd={setArriveEnd} 
      // lastItemId={lastItemId}
      component={
        nightHomeDataSet?.map((item: NightHomeItemType, idx:number) => (
          <NightHomeItem cardData={item} key={idx}/>
        ))}
      />
    }
    </>
  )
}

export default NightHomeList