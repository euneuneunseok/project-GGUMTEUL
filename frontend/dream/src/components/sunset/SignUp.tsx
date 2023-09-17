// 로고 이미지
// 닉네임인풋
// 프로필사진 업로드 버튼
// 프로필사진 전용 이미지 태그
// 다음버튼 -> <SunsetMainPage/>

import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import Input from "style/Input";
import Image from "style/Image";
import Button from "components/common/Button";
import { BoxTitle } from "style/Box";
import Text from "style/Text";


// 회원가입 박스
const SignUpContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SignUp = () => {

  // useRef를 이용해서 input 태그에 접근

  const imageInput = useRef<HTMLInputElement | null>(null);

  const imageUpload = () => {
    imageInput.current ?.click()
  }

  useEffect(()=>{

  })

  return (
    <SignUpContainer>
      {/* 로고 */}
      {/* 닉네임 인풋 */}
      <Input $nicknameInputBar type="text" placeholder="닉네임"></Input>
      {/* 경고창 */}
      <Text $danger>중복된 닉네임입니다.</Text>
      <Button 
        $fullWidth 
        $nightPalePurple 
        style={{color:'black'}}
        onClick={imageUpload}
      >프로필 사진 업로드</Button>

      {/* 프로필 이미지 */}
      {/* 프로필 사진 업로드 기능, 하지만 안 보임*/}
      <Image $signupImage></Image>
      <input 
        type="file"
        style={{display:'none'}}
        ref = {imageInput}
      ></input>
      
      {/* 다음 */}
      <Button $fullWidth $sunsetPink>가입 완료</Button>

    </SignUpContainer>
  )
}
export default SignUp