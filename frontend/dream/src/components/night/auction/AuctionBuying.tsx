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
import { Box } from "style/Box";
import Container from "style/Container";
import Text from "style/Text";

// 스타일

const AuctionBuying = () => {

  return (
    <>
    <Container $baseContainer>
      <Image $mainImage $nightImageBorder>
        <img src={`${process.env.PUBLIC_URL}/image/samsung.png`}
        />
      </Image>
    </Container>
    <Container $baseContainer>
      <Container $nightKeyword>
        <Box $keywordBoxNight> <Text $nightKeword $nightWhite>안녕</Text> </Box>
        <Box $keywordBoxNight> <Text $nightKeword $nightWhite>삼전</Text> </Box>
        <Box $keywordBoxNight> <Text $nightKeword $nightWhite>가즈아</Text> </Box>
        <Box $keywordBoxNight> <Text $nightKeword $nightWhite>우리</Text> </Box>
        <Box $keywordBoxNight> <Text $nightKeword $nightWhite>모두</Text> </Box>
        <Box $keywordBoxNight> <Text $nightKeword $nightWhite>까즈아</Text> </Box>
        <Box $keywordBoxNight> <Text $nightKeword $nightWhite>제발</Text> </Box>
        <Box $keywordBoxNight> <Text $nightKeword $nightWhite>가는거야</Text> </Box>
        <Box $keywordBoxNight> <Text $nightKeword $nightWhite>구뤠!!</Text> </Box>
      </Container>
    </Container>
    </>
  )
}

export default AuctionBuying