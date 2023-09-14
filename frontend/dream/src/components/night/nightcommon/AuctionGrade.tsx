// 리액트
import React from "react";

// 컴포넌트

// 스타일
import {GradeWrappingBox } from "style/Box";

interface AuctionGradeProps {

}

const AuctionGrade = (props:AuctionGradeProps) => {

  return (
    <>
    <GradeWrappingBox>
      <div>
        <p>S</p>
        <p>길몽지수</p>
      </div>
      <div>
        <p>SS</p>
        <p>희귀성</p>
      </div>

    </GradeWrappingBox>
    </>
  )
}

export default AuctionGrade