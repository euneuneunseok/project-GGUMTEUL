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
import Image from "style/Image";
import { Box, GradeWrappingBox } from "style/Box";
import Container from "style/Container";
import Text from "style/Text";

// 스타일

const AuctionDetail = () => {

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

export default AuctionDetail