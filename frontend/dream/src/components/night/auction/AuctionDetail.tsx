// 그냥 이미지 (플립 없음)
// 키워드들 - <KeywordRegion></KeywordRegion>
// 등급 - <GradeRegion></GradeRegion>

// 2개의 TextBox -> 내부에서 만듦
// 2개의 MiddleButton ~ WrappingDouple
// 로그인 유저 보유 꿈머니

// 리액트
import React from "react";

// 컴포넌트
import Button from "components/common/Button";
import DreamCardGrade from "../nightcommon/DreamCardGrade";
import DreamKeywordRegion from "../nightcommon/DreamKeywordRegion";

// 스타일
import Image from "style/Image";
import { Box, GradeWrappingBox } from "style/Box";
import Container from "style/Container";
import Text from "style/Text";

interface AuctionDetailAxiosType {
  biddingId : number;
  userId : number;
  biddingMoney : number;
  biddingAt : string;
  nickname : string;
  startAuctionMoney : number;
  immediatelyBuyMoney : number;
  endedAt : "2023-09-09T00:00";
  askingMoney : number;
  biddingCount : number;
  dreamCardId: number;
  dreamCardImageUrl : string[];
  keywords : string[];
  positiveGrade : string;
  rareGrade : string;
  auctionStatus : string;
}

const AuctionDetail = () => {

  return (
    <>
    <Container $baseContainer>
      <Image $mainImage $nightImageBorder>
        <img src={`${process.env.PUBLIC_URL}/image/samsung.png`}
        />
      </Image>
    </Container>
    
    {/* 키워드 영역 */}
    <DreamKeywordRegion keywords={["Dd", "DD"]}/>

    {/* 길몽도, 희귀도 상속 필요 */}
    <DreamCardGrade positiveGrade="S" rareGrade="SS"/>

    </>
  )
}

export default AuctionDetail