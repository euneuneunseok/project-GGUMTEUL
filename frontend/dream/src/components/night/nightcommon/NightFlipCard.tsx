// 이미지
// 뒤집을 때 나옴

// Image

// 내용

// 리액트
import React from "react";

// 컴포넌트
import Button from "components/common/Button";

// 스타일
import styled, {css} from "styled-components";
import "./NightFlipCard.css"
import Image from "style/Image";
import Container from "style/Container";

// 임시
import Heart from "components/common/Heart";

const NightFlipCard = () => {

  return (
    <>
    <Container $baseContainer>
      <div className="card">
  {/* <div className="card-image"></div> */}
      <Image $mainImage $nightImageBorder>
        <img src={`${process.env.PUBLIC_URL}/image/samsung.png`}/>
      </Image>
        <div className="card-description">
          <p className="text-title"> Card Title</p>
          <p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </div>

      <Heart/>
    </Container>
    </>
  )
}

export default NightFlipCard