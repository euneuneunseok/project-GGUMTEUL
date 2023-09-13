// 마감시간 : 3시간 전만 보이기. 
// 1시간 전 색깔 변경은 보고 생각하기.

{/* <SmallNightImage></SmallNightImage> */}
// 키워드들 - <KeywordRegion></KeywordRegion>
// 등급 - <GradeRegion></GradeRegion> 

// 리액트
import React from "react";

// 컴포넌트

// 스타일
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



const AuctionCard = () => {

  return (
    <>
    {/* <AuctionCardFrame>
    </AuctionCardFrame> */}
    <div className="wrapper">
    <div className="clash-card barbarian">
      <div className="clash-card__level clash-card__level--barbarian">마감 2시간 전</div>
      <div className="clash-card__image clash-card__image--barbarian">
        {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png" alt="barbarian" /> */}
      </div>
      <div className="keyword-region">
      키워드 영역
      </div>

      <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
        <div className="one-second">
          {/* 추후 자동화 */}
          <div className="grade">SS</div>
          <div className="grade-value">길몽</div>
        </div>

        <div className="one-second">
          {/* 추후 자동화 */}
          <div className="grade">S</div>
          <div className="grade-value">희귀</div>
        </div>

      </div>

    </div> 
  </div> 

    </>
  )
}

export default AuctionCard