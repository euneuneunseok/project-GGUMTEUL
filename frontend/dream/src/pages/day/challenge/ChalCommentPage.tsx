
// <ChalComment></ChalComment>

// 리액트
import React from "react";

// 컴포넌트
import ChalCommentList from "components/day/challenge/ChalCommentList";
import Container from "style/Container";
import NavCommentBar from "components/common/NavCommentBar";
import FooterCommentBar from "components/common/FooterCommentBar";
import { useParams } from "react-router";

// 스타일

const ChalCommentPage = () => {

  const params = useParams()
  const currentDetailId = params.detailId

  return (
    <Container $commentContainer>
      <NavCommentBar>댓글</NavCommentBar>
      <ChalCommentList />
      <FooterCommentBar ></FooterCommentBar>
    </Container>
  )
}

export default ChalCommentPage