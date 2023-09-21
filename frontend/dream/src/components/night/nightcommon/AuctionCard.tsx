// 마감시간 : 3시간 전만 보이기. 
// 1시간 전 색깔 변경은 보고 생각하기.

{/* <SmallNightImage></SmallNightImage> */}
// 키워드들 - <KeywordRegion></KeywordRegion>
// 등급 - <GradeRegion></GradeRegion> 

// 리액트
import React from "react";

// 컴포넌트

// 타입 & 외부
import { AuctionItemType } from "../auction/AuctionMainList";

// 스타일
import { Box } from "style/Box";
import styled, {css} from "styled-components";
import Image from "style/Image";
import "./AuctionCard.css"

const AuctionCardFrame = styled.div`
  background: rgba(190, 169, 215, 0.5);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 40vw;
  height: 75vw;
`

export interface AuctionCardProps {
  auctionCard ?: AuctionItemType | null
}

const AuctionCard = ({auctionCard} : AuctionCardProps) => {
  
  // 시간 계산
  const diffHour = () :number => {
    const today = new Date()
    const todayHour = today.getHours()
    const endedTime = new Date(auctionCard?.endedAt ? auctionCard?.endedAt : "")
    const endedHour = endedTime.getHours()
    if (endedHour === 0) {
      if (todayHour === 22) return 2
      else if (todayHour === 23) return 1
      else if (todayHour === 0) return 0
      return 3
    } else if (endedHour === 1) {
      if (todayHour === 23) return 2
      else if (todayHour === 0) return 1
      else if (todayHour === 1) return 0
      return 3
    } else return endedHour - todayHour
  }
  
  console.log(auctionCard?.keywords, "키워드들")
  console.log(auctionCard?.keywords.keys, "키워드들1")

  return (
    <>
    {/* <AuctionCardFrame>
    </AuctionCardFrame> */}
    <div className="auction-card">
      <div className="auction-end-time"> 
      {diffHour() < 3 ? ( diffHour() > 0 ? `마감 ${diffHour()}시간 전` : "종료 임박") : "경매장 입장"}
      </div>
      <div className="auction-card-image">
        <Image $nightImageBorder $auctionCard><img src={auctionCard?.dreamCardImageUrl}/></Image>
      </div>
      <div className="keyword-region">
        {/* keywords가 객체인 문제임 */}
        {/* {auctionCard?.keywords.map((word, idx) => (
          (idx > 0 && 
            <Box $keywordBoxNight key={idx}>{JSON.stringify(word)}</Box>
            )
        ))} */}
      {/* 키워드 영역 */}
      </div>

      <div className="grade-region clearfix">
        <div className="one-second">
          {/* 추후 자동화 */}
          <div className="grade">{auctionCard?.positiveGrade}</div>
          <div className="grade-value">길몽</div>
        </div>

        <div className="one-second">
          {/* 추후 자동화 */}
          <div className="grade">{auctionCard?.rareGrade}</div>
          <div className="grade-value">희귀</div>
        </div>

      </div>
    </div> 

    </>
  )
}

export default AuctionCard