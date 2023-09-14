// 작은 이미지
// 호가 버튼
// 보유 꿈머니
// input - 참여버튼
// 경고문구

// 2개 텍스트 박스(AuctionDetail 복붙)
// 리액트
import React from "react";

// 컴포넌트
import Button from "components/common/Button";

// 스타일
import styled, {css} from "styled-components";
import Image from "style/Image";
import Container from "style/Container";
import Text from "style/Text";
import Input from "style/Input";

const AuctionBidContainer = styled.div`
  margin: 30rem 3rem;
`

const BiddingWrap = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  grid-gap: 1vw;
  margin-top: 1vw;
`

// 타입
interface AuctionBuyingAxiosType {

}

const AuctionBuying = () => {

  return (
    <>
      {/* <Image $mainImage $nightImageBorder>
        <img src={`${process.env.PUBLIC_URL}/image/samsung.png`}
        />
      </Image> */}

      {/* 호가 */}
      <Container $centerContainer>
        <Button>+1000</Button>
      </Container>

      <AuctionBidContainer>
        <Text $nightKeword $nightWhite>나의 꿈머니: ${8000}</Text>
        <BiddingWrap>
          <Input $nightColor/>
          <Button $nightMiddlePurple>참여</Button>
        </BiddingWrap>
      </AuctionBidContainer>
    </>
  )
}

export default AuctionBuying