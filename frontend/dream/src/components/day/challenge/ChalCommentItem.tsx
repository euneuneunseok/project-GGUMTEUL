
// 댓글 아이템

// CircleImage :댓글프로필
// 닉네임
// 댓글 콘텐츠

// 리액트
import React from "react";

// 컴포넌트

// 스타일
import styled from "styled-components";
import Text from "style/Text";
import Image from "style/Image";
import Wrap from "style/Wrap";

// interface CommentItemTypeProps{
//   data: 
// }

const ChalCommentItem = (
  // {data:CommentItemTypeProps}
  ) => {

  return (
    <>
    <Wrap $alertWrap>
      <Image $tinyProfileImage>
        <img></img>
      </Image>
      <div className="contentarea">
        {/* <Text $black>{data.title}</Text> */}
        {/* <Text $black>{data.content}</Text> */}
      </div>
    </Wrap>
    </>
  )
}

export default ChalCommentItem
