{/* FlipCard 크기에 맞는 일반 이미지 쓰세요. (Flip 하지 마세요.) */} 

// 키워드들
// 등급 어쩌구
// 3개의 Input

{/* <DreamRecordContentsTab></DreamRecordContentsTab> */}

// 2개의 버튼

// 리액트
import React from "react";

// 컴포넌트
import DreamRecordContentsTab from "../dream/DreamRecordContentsTab";
import DreamKeywordRegion from "../nightcommon/DreamKeywordRegion";
import DreamCardGrade from "../nightcommon/DreamCardGrade";
import Button from "components/common/Button";

// 스타일
import styled, {css} from "styled-components";
import Container from "style/Container";
import Input, {InputProps} from "style/Input";
import Image from "style/Image";
import Text from "style/Text";

const AuctionInputWrap = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  ;
`

const CustomText = styled(Text)`
  padding-left: 1rem;
  line-height: 2rem;
`
const WarnText = styled(Text)`
  padding-left: 1rem;
  font-size: 0.75rem;
  color: #423535;
`

const MarginBot = styled.div`
  margin-bottom: 0.75rem;
`

const AuctionCreate = () => {

  return (
    <>
    <Container $baseContainer>
    {/* 이미지 */}
    <Image $mainImage $nightImageBorder><img src={`${process.env.PUBLIC_URL}/image/iu.png`}/></Image>
    <DreamKeywordRegion keywords={["2", "33"]}/>
    <DreamCardGrade   
    positiveGrade="S"  
    rareGrade="A"
    />

  {/* 옥션 전용 Input */}
    <AuctionInputWrap>
      <CustomText $isBold $black>마감시간</CustomText>
      <Input $auctionInput $nightColor/>
      </AuctionInputWrap>
    <MarginBot/>
    <AuctionInputWrap>
    <CustomText $isBold $black>최소가</CustomText>
    <Input $auctionInput $nightColor/>
    </AuctionInputWrap>
    <AuctionInputWrap>
      <CustomText />
      <WarnText>1000단위 금액을 입력해주세요.</WarnText>
    </AuctionInputWrap>
    <AuctionInputWrap>
    <CustomText $isBold $black>즉시 판매</CustomText>
    <Input $auctionInput $nightColor/>
    </AuctionInputWrap>
    <AuctionInputWrap>
      <CustomText />
      <WarnText>1000단위 금액을 입력해주세요.</WarnText>
    </AuctionInputWrap>


    <DreamRecordContentsTab />
    </Container>
    </>
  )
}

export default AuctionCreate;
