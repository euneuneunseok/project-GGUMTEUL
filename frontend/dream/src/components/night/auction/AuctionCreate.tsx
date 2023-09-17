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
import Container from "style/Container";
import Image from "style/Image";

const AuctionCreate = () => {

  return (
    <>
    <Container $baseContainer>
    {/* 이미지 */}
    <Image $mainImage><img src={`${process.env.PUBLIC_URL}/image/iu.png`}/></Image>
    <DreamKeywordRegion keywords={["2", "33"]}/>
    <DreamCardGrade   
    positiveGrade="S"  
    rareGrade="A"
    />
    </Container>
      <DreamRecordContentsTab />
    </>
  )
}

export default AuctionCreate;
