
// map
// <ChallengeContentListItem></ChallengeContentListItem> ./daycommon 

// 리액트
import React, { useEffect, useState } from "react";

// 컴포넌트
import ChalContentListItem from "../daycommon/ChalContentListItem";

// 스타일
export interface DayChallengeObj {
  title :string,
  period :string,
  challengeId :number
}

export interface DayChallengeList extends Array<DayChallengeObj> {}


const DayChallengeList = () => {
    const [allChalList, setAllChalList] = useState<null | DayChallengeList>([]);
  
    // .axios 연결 전 임의의 값을 allChalList에 넣어두기
    let newObj :DayChallengeObj = {
      title : "111",
      period : "1일",
      challengeId : 111,
    }
    let newObj2 :DayChallengeObj = {
      title : "222",
      period : "2일",
      challengeId : 222,
    }
  
  
    // 처음 렌더링 시 Challenge List axios 요청
    useEffect(() => {
      setAllChalList([newObj, newObj2, newObj2, newObj2, newObj2, newObj2])
    }, [])

  return (
    <>
    {
      allChalList?.map((chal :DayChallengeObj) => (
      <ChalContentListItem key={chal.challengeId} chal={chal} />))
    }
    </>
  )
}

export default DayChallengeList