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
import Image from "style/Image";
import { Box, GradeWrappingBox } from "style/Box";
import Container from "style/Container";
import Text from "style/Text";

// 스타일

// 타입
interface AuctionBuyingAxiosType {

}

const AuctionBuying = () => {

  return (
    <>
    <Container $baseContainer>
      <Image $mainImage $nightImageBorder>
        <img src={`${process.env.PUBLIC_URL}/image/samsung.png`}
        />
      </Image>
    </Container>
    </>
  )
}

export default AuctionBuying