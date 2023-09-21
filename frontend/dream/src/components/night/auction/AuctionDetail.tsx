// 리액트
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

// 외부 
import basicHttp from "api/basicHttp";

// 컴포넌트
import Button from "components/common/Button";
import DreamCardGrade from "../nightcommon/DreamCardGrade";
import DreamKeywordRegion from "../nightcommon/DreamKeywordRegion";

// 스타일
import styled, {css} from "styled-components";
import Image from "style/Image";
import { Box, GradeWrappingBox } from "style/Box";
import Container from "style/Container";
import Text from "style/Text";
import Wrap from "style/Wrap";
const AuctionBox = styled(Box)`
  border-radius: 1rem;
  background-color: rgba(190, 169, 215, 0.5);
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  /* color: white; */
`

const SmallText = styled(Text)`
  font-size: 0.5rem;
  margin-top: 0.25rem;
`

interface AuctionDetailType {
  biddingId : number;
  userId : number;
  biddingMoney : number;
  biddingAt : string;
  nickname : string;
  startAuctionMoney : number;
  immediatelyBuyMoney : number;
  endedAt : "2023-09-09T00:00";
  askingMoney : number; // 호가
  biddingCount : number;
  dreamCardId: number;
  dreamCardImageUrl : string;
  keywords : string[];
  positiveGrade : string;
  rareGrade : string;
  auctionStatus : string;
}

// 고민사항: 
// AuctionDetail과 Buying은 결국 가운데 바꿔끼기밖에 없음 (신규 렌더링은 낭비 같음)
// 경로는 다르게해도, useEffect -> location path 이걸로 보이는걸 다르게하면 어떨까.
const AuctionDetail = () => {
  const {dreamCardId} = useParams()
  const [auctionItem, setAuctionItem] = useState<AuctionDetailType>()

  useEffect(()=> {
    basicHttp.get(`/auction/detail/${dreamCardId}`)
    .then(res => {
      setAuctionItem(res.data.data)
      console.log(res.data.data, "경매장 입장")
    })
  }, [])

  const diffHour = () :number => {
    const today = new Date()
    const todayHour = today.getHours()
    const endedTime = new Date(auctionItem?.endedAt ? auctionItem?.endedAt : "")
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

  return (
    <>
    <Container $baseContainer>
      <Image $mainImage $nightImageBorder>
        <img src={auctionItem?.dreamCardImageUrl}
        />
      </Image>
    </Container>
    
    {/* 키워드 영역 */}
    <DreamKeywordRegion keywords={auctionItem?.keywords}/>

    {/* 길몽도, 희귀도 상속 필요 */}
    <DreamCardGrade 
    positiveGrade={auctionItem?.positiveGrade} 
    rareGrade={auctionItem?.rareGrade}/>

    {/* 입찰마감 & 현재최고가 */}
    <Container $baseContainer>
      <AuctionBox $fullWidth > 
      <Wrap $spaceBetweenWrap>
        <Text $nightBlue $isBold>입찰 마감 2시간 전</Text> 
        <Text $nightBlue>입찰 수: 00명</Text> 
      </Wrap>      
      </AuctionBox>
      <AuctionBox $fullWidth>
        <Text $isBold $MBHalf>현재 최고가</Text>
      <Wrap $spaceBetweenWrap>
        <Text $isBold>$ 5000</Text> 
        <Text>2023.06.04 12:22</Text> 
      </Wrap>
      </AuctionBox>
    </Container>

    {/* 버튼 2개 */}
    <Container $baseContainer>
    <Wrap $spaceBetweenWrap>
      <Button $halfWidthImeBuy>
        <Text $isBold>즉시 구매</Text>
        <SmallText>5000 꿈포인트</SmallText>
      </Button>
      <Button $halfWidth $nightPurple>참여하기</Button>
    </Wrap>
    <Text $nightKeword>나의 꿈머니: {10000}</Text>
    </Container>


    </>
  )
}

export default AuctionDetail