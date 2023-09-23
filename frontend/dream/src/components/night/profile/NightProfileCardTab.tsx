// 카드 탭
// 버튼 : 공개, 구매 (본인일 때만 보임. 아니면 안 보여)
// 사진 리스트 (NightImage)

// 리액트
import React from "react";

// 컴포넌트
import Button from "components/common/Button";
import Image from "style/Image";
import Wrap from "style/Wrap";
import styled from "styled-components";

// 스타일
const ProfileCardButtonWrap = styled.div`
  margin: 1rem 0.5rem;
`

const ProfileDreamCardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-right: 0.5rem;
`

const NightProfileCardTab = () => {

  return (
    <>
    <ProfileCardButtonWrap>
      {/* 공개, 구매 버튼 */}
      <Button $follow $nightPalePurple>공개</Button>
      <Button $follow $nightPalePurple>구매</Button>
    </ProfileCardButtonWrap>

    <ProfileDreamCardWrap>
      <Image $profileCard $nightImageBorder>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1FLLXoD2D9jTPPy5nohrnuFBE0RypC2bdJucBEMGTQ&s"></img>
      </Image>
      <Image $profileCard $nightImageBorder>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1FLLXoD2D9jTPPy5nohrnuFBE0RypC2bdJucBEMGTQ&s"></img>
      </Image>
      <Image $profileCard $nightImageBorder>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1FLLXoD2D9jTPPy5nohrnuFBE0RypC2bdJucBEMGTQ&s"></img>
      </Image>
      <Image $profileCard $nightImageBorder>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1FLLXoD2D9jTPPy5nohrnuFBE0RypC2bdJucBEMGTQ&s"></img>
      </Image>
      <Image $profileCard $nightImageBorder>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1FLLXoD2D9jTPPy5nohrnuFBE0RypC2bdJucBEMGTQ&s"></img>
      </Image>
      <Image $profileCard $nightImageBorder>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1FLLXoD2D9jTPPy5nohrnuFBE0RypC2bdJucBEMGTQ&s"></img>
      </Image>
    </ProfileDreamCardWrap>
    </>
  )
}

export default NightProfileCardTab
