// 이미지
// 뒤집을 때 나옴

// Image

// 내용

// 리액트
import React, {useState} from "react";

// 컴포넌트
import Button from "components/common/Button";
import DreamCardGrade from "./DreamCardGrade";

// 스타일
import styled, {css} from "styled-components";
import "./NightFlipCard.css"
import Image from "style/Image";
import Container from "style/Container";
import { Box } from "style/Box";
import Text from "style/Text";

// 타입
import { ReverseCardType } from "../home/NightHomeItem";
import { changeDate } from "utils/dateForm";
import { useNavigate } from "react-router-dom";

const CustomKeywordBox = styled.div`
  background-color: #3b3170;
  color: white;
  padding: 0.25rem;
  text-align: center;
  border-radius: 0.25rem;
`

const NightFlipCardKeyBtnWrap = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  margin: inherit;
`
const NightFlipCardKeywordWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: inherit;
  gap: 3vw;
`

const ButtonDiv = styled.div`
  text-align: right;
`
// 플립 카드 닉네임과 일자 용도
const NightFlipCardBotWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
`

export interface ReverseCardProps {
  reverseCardData ?: ReverseCardType | null
}

const NightFlipCard = ({reverseCardData}: ReverseCardProps) => {
  const navigation = useNavigate()

  const [isFlipCard, setIsFlipCard] = useState(false)

  const dreamCardFlipStyle = {
    transform: isFlipCard ? 'translateY(0)' : "translateY(100%)"
  }

  // 꿈 주인 유저 프로필로 이동
  const moveUserProfile = () => {
    navigation(`/night/profile/${reverseCardData?.dreamCardOwner}`)
  }
  

  return (
    <>
    <Container $baseContainer>
      <div className="card" onClick={(e:any) => {
        if (!e.target.className.includes("blockClickEvent")) {
          setIsFlipCard(!isFlipCard)
          return
        }
      }}>
  {/* <div className="card-image"></div> */}
      <Image $mainImage $nightImageBorder>
        <img src={reverseCardData?.dreamCardImageUrl}/>
      </Image>
        <div className="card-description" style={dreamCardFlipStyle}>
          <NightFlipCardKeyBtnWrap >
            <NightFlipCardKeywordWrap>
              {/* 키워드 3개까지만 출력하기 */}
              { (Array.isArray(reverseCardData?.keywords) && reverseCardData?.keywords.length !== 0 ) ? 
              reverseCardData?.keywords.map((keyword, idx) => (
                (idx <= 2 && keyword !== null) ? (
                <CustomKeywordBox className="blockClickEvent" key={idx}> 
                  <Text $nightKeword className="blockClickEvent">
                    {/* 키워드가 빈 배열이라 에러 발생하여 임시로 막음 */}
                    {/* {keyword} */}
                  </Text>
                </CustomKeywordBox >
                ) : null
              )) 
              : null }
            </NightFlipCardKeywordWrap>
            {/* d */}
            <ButtonDiv >
              {/* 경매 상태 T일 때만 버튼 보임 */}
              { reverseCardData?.auctionStatus === "T" &&             
              <Button $nightMiddlePurple className="blockClickEvent">꿈 경매</Button>}            </ButtonDiv>
          </NightFlipCardKeyBtnWrap>

          <DreamCardGrade positiveGrade={reverseCardData?.positiveGrade} rareGrade={reverseCardData?.rareGrade}/>
          <NightFlipCardBotWrap >
            <Text className="blockClickEvent"
            onClick={moveUserProfile}
            > {reverseCardData?.ownerNickname} </Text>
            <Text>{changeDate(reverseCardData?.createdAt)}</Text>
          </NightFlipCardBotWrap>
        </div>
      </div>

    </Container>
    </>
  )
}

export default NightFlipCard