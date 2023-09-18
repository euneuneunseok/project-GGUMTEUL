// 로고 이미지
// 닉네임인풋
// 프로필사진 업로드 버튼
// 프로필사진 전용 이미지 태그
// 다음버튼 -> <SunsetMainPage/>

import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";
import Input from "style/Input";
import Image from "style/Image";
import Button from "components/common/Button";
import Text from "style/Text";
// import { BoxTitle } from "style/Box";


// 회원가입 박스
const SignUpContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SignUp = () => {

  const [profileImage, setProfileImage] = useState<File | null>(null)
  const [profileImageURL, setProfileImageURL] = useState<string | undefined>(undefined)

  // useRef를 이용해서 input 태그에 접근
  const imageInput = useRef<HTMLInputElement | null>(null);

  const imageInputClick = () => {
    imageInput.current?.click()
  }

  const imageUpload = (e:React.ChangeEvent<HTMLInputElement>):void => {
    e.preventDefault();

    if (!e.target.files) {return}
    const file = e.target.files[0]

    if (file) {
      let image = window.URL.createObjectURL(file)
      console.log(image,'image')
      console.log(file,'file')
      setProfileImageURL(image)
      setProfileImage(file);
    }
    
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
        onClick={imageInputClick}
      >프로필 사진 업로드</Button>

      {/* 프로필 이미지 미리보기*/}
      <Image $signupImage>
        <img src={ profileImageURL ? profileImageURL : `${process.env.PUBLIC_URL}/image/default-profile.png`}></img>
      </Image>
      <input 
        type="file"
        accept="image/*"
        style={{display:'none'}} // 화면에서 안보이게, 하지만 ref를 통해 기능은 가져감
        ref = {imageInput}
        onChange={imageUpload}
      ></input>
      
      {/* 다음 */}
      <Button $fullWidth $sunsetPink>가입 완료</Button>

    </SignUpContainer>
  )
}
export default SignUp 