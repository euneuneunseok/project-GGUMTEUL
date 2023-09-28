// 리액트
import React from "react";

// 컴포넌트
import ChalCommentList from "components/day/challenge/ChalCommentList";
import Container from "style/Container";

// 스타일

const ChalCommentModal = () => {

  return (
    <Container $commentContainer>
      <p>댓글창</p>
      <ChalCommentList />
    </Container>
  )
}

export default ChalCommentModal