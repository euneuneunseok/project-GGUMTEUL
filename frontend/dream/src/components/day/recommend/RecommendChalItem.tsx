// 리액트
import React from "react";
import { RecommendObjType } from "./RecommendChalMain";
import { Box } from "style/Box";
import Container from "style/Container";

interface RecommendChalItemProps {
  chal : RecommendObjType
}

const RecommendChalItem = ({chal}: RecommendChalItemProps) => {
  return (
    <Box $recommendChalBox>
      <img src={chal.badgeUrl} alt="뱃지" />
      <p>{chal.title}</p>
      <p>efwwfwefwefwefwefwefwefwef</p>
      <p>{chal.period}</p>
      <p>{chal.challengeKeywordId}</p>
    </Box>
  )
}

export default RecommendChalItem