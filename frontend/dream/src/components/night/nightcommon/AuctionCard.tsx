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
    <AuctionCardFrame>
    </AuctionCardFrame>
    <div className="wrapper">
    <div className="clash-card barbarian">
      <div className="clash-card__image clash-card__image--barbarian">
        {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png" alt="barbarian" /> */}
      </div>
      <div className="clash-card__level clash-card__level--barbarian">Level 4</div>
      <div className="clash-card__unit-name">ㅋ</div>
      <div className="clash-card__unit-description">
      내용
      </div>

      <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
        <div className="one-second">
          {/* 추후 자동화 */}
          <div className="stat">SS</div>
          <div className="stat-value">길몽</div>
        </div>

        <div className="one-second">
          {/* 추후 자동화 */}
          <div className="stat">S</div>
          <div className="stat-value">희귀도</div>
        </div>

      </div>

    </div> 
  </div> 

    </>
  )
}

export default AuctionCard