
// 상단 div
// CircleImage 
// 닉네임 text 
// X button

// TitleBox
// MainImage
// WideTextBox

// 리액트
import React from "react";
import Image from "style/Image";
import Text from "style/Text";
import Wrap from "style/Wrap";

// 컴포넌트

// 스타일

const DayStoryDetail = () => {

  return (
    <>
    <Wrap $storyWrap>
      {/* 상단바 */}
        <div>
          <Image $tinyProfileImage><img /></Image>
          <Text $isBold $nightWhite>나는프론트엔드</Text>
        </div>
      {/* 챌린지 제목 */}

      {/* 사진 */}

      {/* 내용 */}


    </Wrap>
    </>
  )
}

export default DayStoryDetail