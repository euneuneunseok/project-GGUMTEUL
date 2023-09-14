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
import Wrap from "style/Wrap";

// 스타일

const AuctionBuying = () => {

  return (
    <>
    <Wrap $baseWrap>
      <Image $mainImage $nightImageBorder>
        <img src={`${process.env.PUBLIC_URL}/image/iu.png`}/>
      </Image>
    </Wrap>
    </>
  )
}

export default AuctionBuying