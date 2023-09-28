import React, {useState, useEffect} from "react"
import { useSelector } from "react-redux";
import { RootState } from "store";

// 컴포넌트

import { Bar } from "style/Bar";

import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Input from "style/Input";
import Image from "style/Image";
import Text from "style/Text";
import Button from "./Button";
import { checkCertInput } from "utils/alert/checkInput";
import { async } from "q";
import tokenHttp from "api/tokenHttp";

interface NavTitleProps {
  children ?: React.ReactNode;
  commentDetailId ?: number;
}

const FooterCommentBar = (props:NavTitleProps) => {

  const [comment, setComment] = useState<string>('')
  const userdata = useSelector((state: RootState) => state.auth.userdata);
  const userProfileImage = userdata.profileUrl
  const userNickname = userdata.nickname
  const navigate = useNavigate();

  const addComment = async() => {
    if (await checkCertInput(comment)) {
      console.log(comment)
      const commentData = {
        // 'detailId' : props.commentDetailId, // 임시
        'detailId' : 2, // 임시
        'content' : comment,
      }

      await tokenHttp.post('/day/challenge/detail/comment', commentData)
        .then((response) => {console.log("댓글 생성 성공", response)})
        .catch((e)=>{console.log("댓글 생성 실패", e)})
    }
  }

  return (
    <>
    {/* <h1>NavTitleBar</h1> */}
    <Bar $footerCommentBar>
      <Image $tinyProfileImage>
        <img src={userProfileImage}></img>
      </Image>
      <Input 
        $commentInput 
        placeholder={`${userNickname}(으)로 댓글달기...`}
        onChange={(e)=>{
          setComment(e.target.value)
        }}
      >
      </Input>
      <Button 
        $addCommentButton
        onClick={()=>{addComment()}}
      >게시</Button>
    </Bar>
    </>
  )
}

export default FooterCommentBar