
// 인증 생성
// TitleBox -> 챌린지 제목
// WideTextInput -> 내용 입력  

// 업로드 버튼 클릭 전
// LongButton -> 사진 업로드 버튼


// 업로드 버튼 클릭 후

// 중간 과정 -> 파일 업로드 화면

// MainImage
// LongButton :완료

// 리액트
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";

// 컴포넌트
import Button from "components/common/Button";
import Container from "style/Container";
import tokenHttp from "api/tokenHttp";
import { ChalDetailDataType, ChalDetailInfoProps } from "../ChalDetail";
import { Box } from "style/Box";
import TextArea from "style/TextArea";
import { checkCertInput } from "utils/alert/checkInput";
import Image from "style/Image";
import { RiImageAddLine } from "react-icons/ri";

// 스타일



// 챌린지 디테일 초기값
const initialChalDetail: ChalDetailInfoProps = {
  chalDetailData: {
    challengeContent: '',
    challengeId: 0,
    challengeTitle: '',
    keyword: '',
    participationCount: 0,
    badgeUrl: '',
    period: '',
    ranking: [
      {
        ranking: 0,
        nickName: '',
      },
    ]
  },
}

const ChalCreateCert = () => {

  const params = useParams()
  const navigate = useNavigate()
  const currentChallengeId = Number(params.challengeId)
  const [chalData, setChalData] = useState<ChalDetailDataType>(initialChalDetail.chalDetailData)
  const [challengeContent, setChallengeContent] = useState<string>('')
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const [profileImageURL, setProfileImageURL] = useState<string | undefined>(undefined)

  useEffect(() => {
    // 렌더링되었을 때 참여
    tokenHttp.get(`day/challenge/item/${currentChallengeId}`)
      .then((response) => {
        const res = response.data.data
        setChalData(res.detail)
        console.log(chalData)
        // 성취도 계산

        // 현재 시작 후 몇일인지 계산

      })
      .catch((e) => { console.log(e) })
  }, [])

  // useRef를 이용해서 input 태그에 접근
  const imageInput = useRef<HTMLInputElement | null>(null);
  const imageInputClick = () => {
    imageInput.current?.click()
  }
  // 이미지 미리보기 
  const imageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    // 파일이 없으면 리턴
    if (!e.target.files) { return }
    // 파일이 있으면 타겟 파일 변수 설정
    const file = e.target.files[0]

    if (file) {
      let image = window.URL.createObjectURL(file)
      setProfileImageURL(image)
      setProfileImage(file);
      // console.log(image,'image')
      console.log(file, 'file')
    }
  }

  const checkContent = (inputData: string): void => {
    setChallengeContent(inputData)
    // 공백만 들어있거나 특수문자 들어있음
    if (!checkCertInput(inputData)) {
      alert('내용에 공백만 들어갔거나, 특수문자만 들어갔습니다.')
    }
  }

  return (
    <Container $dayBaseContainer $dayCreate>
      <Box $mainTitleBox>
        {/* 뱃지 이미지 아직 안됨 */}
        <img src={`${chalData?.badgeUrl}`}></img>
        {chalData?.challengeTitle}
      </Box>
      <TextArea
        $chalDetailValue
        placeholder="오늘의 인증 글"
        onBlur={(e) => {
          checkContent(e.target.value)
        }}
      ></TextArea>

      {
        profileImageURL ? (
          <>
            <Image $certImage>
              <img src={profileImageURL}></img>
            </Image>
            <Button
              $fullWidth
              $dayBlue
              style={{ color: 'black' }}
              onClick={()=>{}}
            >완료</Button>
          </>
          ) : (
            <Button
              $fullWidth
              $dayBlue
              $icon
              style={{ color: 'black' }}
              onClick={imageInputClick}
            ><RiImageAddLine /></Button>
        )
      }

      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }} // 화면에서 안보이게, 하지만 ref를 통해 기능은 가져감
        ref={imageInput}
        onChange={imageUpload}
      ></input>
    </Container>
  )
}

export default ChalCreateCert