{/* <ChalDetailInfo></ChalDetailInfo> */}


// 참여하기 -> ChalCapsuleCreatePage, 관리하기 버튼
// LongButton

// 인스타 피드같은 게시물
// map
// <ChalCertArticle></ChalCertArticle>

// 리액트
import React, {useEffect, useState}from "react";
import basicHttp from "api/basicHttp";

// 컴포넌트
import ChalDetailInfo from "./ChalDetailInfo";
import Button from "components/common/Button";
import ChalCertArticle from "./ChalCertArticle";

// 스타일

export interface ChalDetailInfoProps {
  chalDetailData: ChalDetailDataType
}

export interface ChalDetailDataType {
  challengeContent :string,
  challengeId :number,
  challengeTitle :string,
  keyword :string,
  participationCount :number,
  // badgeUrl :string,
  period :string,
  ranking: [
    {
      ranking :number,
      nickName :string,
    }
  ];
}

// 챌린지 디테일 초기값
const initialChalDetail:ChalDetailInfoProps = {
  chalDetailData:{
    challengeContent :'',
    challengeId :-1,
    challengeTitle :'',
    keyword :'',
    participationCount :-1,
    // badgeUrl :'',
    period :'',
    ranking: [
      {
        ranking :-1,
        nickName :'',
      },
    ]
  },
} 

const ChalDetail = () => {

  const [chalDetailData,setChalDetailData] = useState<ChalDetailDataType>(initialChalDetail.chalDetailData)
  const [chalParticipate, setChalParticipate] = useState<boolean>(true)
  const [chalParticipateDay,setChalParticipateDay] = useState<number>(0)

  useEffect(()=>{
    basicHttp.get('/day/challenge/item/2')
      .then((response)=>{
        const res = response.data.data
        setChalParticipate(res.participate)
        setChalDetailData(res.detail)
        setChalParticipateDay(res.participateDay)
        // console.log(res)
      })
      .catch((e)=>{console.log(e)})
  },[])

  return (
    <>
    {/* 공부흔적 남기기 */}
    <ChalDetailInfo chalDetailData={chalDetailData} />

    {/* 참여하기 버튼 */}
    
    {/* 인증글 목록 */}
    <ChalCertArticle />
    </>
  )
}
export default ChalDetail