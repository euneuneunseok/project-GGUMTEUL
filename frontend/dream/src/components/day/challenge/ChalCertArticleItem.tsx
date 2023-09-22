

import React, {useState, useEffect} from "react";

import { changeDate } from "utils/dateForm";

// 컴포넌트
import Text from "style/Text";
import Heart from "components/common/Heart";
import { FaRegCommentDots } from "react-icons/fa6";

//타입
import { CertArticleItemType } from "./ChalCertArticleList";
import Image from "style/Image";
import styled from "styled-components";
import Container from "style/Container";

const ProfileDateWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`

const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
  /* line-height: 100%; */
  & > div:nth-child(2) {
    & > div{
      text-align: center;
    }
  }
`
const ProfileImage = styled(Image)`
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
    & > img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 1/1;
      object-position: center;
      border-radius: 50%;
    }
`

const MarginBot = styled.div`
  margin-bottom: 2rem;
`

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeartCommentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  & :first-child {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    font-size: 1rem;
    margin: 0;
  }

  & > svg {
    margin-left: 1rem;
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`

interface CertArticleItemProps {
  certData : CertArticleItemType
}

// 유저 프로필로 이동
const moveUserProfile = () => {

}


const ChalCertArticleItem = ({certData}:CertArticleItemProps) => {



  return (
    <>
    <ProfileDateWrap>
    {/* 상단바 */ }
    <ProfileWrap>
    <ProfileImage
    // 여기에 이동하는 곳
    onClick={moveUserProfile}
    >
    <img src={certData?.photoUrl} alt="없음"/>
    </ProfileImage>
    <Text $verticalAlign $nightWhite
    onClick={moveUserProfile}
    >{certData?.nickname} </Text>
    </ProfileWrap>

    <Text $verticalAlign $nightWhite>{changeDate(certData?.createdAt)}</Text>

    </ProfileDateWrap >
    
    {/* 인증 이미지 */ }
    <Image $mainImage $dayImageBorder>
      <img src={certData?.photoUrl} alt="없음"/>
    </Image>
    
    
    {/* 인증 글 하단바 */}
    <BottomContainer>

      {/* 좋아요 버튼 */ }
      <HeartCommentContainer>
        <Heart
        isLike={certData.like}
        likedNumber={certData.likeCount}
        /> 
        <FaRegCommentDots/>
        <Text>{certData?.commentCount}</Text>
      </HeartCommentContainer>

      {/* 하단 바 */}
    </BottomContainer>

    {/* 게시글 */}
    
    <MarginBot/>   
    </>
  )
}

export default ChalCertArticleItem