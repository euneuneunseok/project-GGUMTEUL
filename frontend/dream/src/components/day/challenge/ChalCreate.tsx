
// ThinTextInput 챌린지 제목
// WideTextInput 챌린지 내용
// TextBox 카테고리 (드롭다운 선택)
// TextBox 챌린지 기간 (드롭다운 선택)

// 등록하기 버튼 -> ./capsule ChalCapsuleCreatePage 페이지로 이동.

// 리액트
import React, {useEffect, useState} from "react";
import styled from "styled-components";


// 컴포넌트
import Button from "components/common/Button";
import Dropdown from "components/common/Dropdown";

import Input from "style/Input";
import TextArea from "style/TextArea";
import Container from "style/Container";
import basicHttp from "api/basicHttp";
import { checkWrongInput } from "utils/alert/checkInput";

interface categoryListType {
  "keywordId" : number;
  "keyword" : string;
}

const ChalCreate = () => {

  const [challengeTitle, setChallengeTitle] = useState<string>('')
  const [challengeContent, setChallengeContent] = useState<string>('')
  const [categoryList,setCategoryList] = useState<string[]>(['keyword1','keyword2','keyword3','keyword4','keyword5'])
  const [periodList,setPeriodList] = useState<string[]>(['7일','30일','100일','365일'])
 
  const [selectCategory, setSelectCategory] = useState<string>('');
  const [selectPeriod, setSelectPeriod] = useState<string>('');

  
  // 클릭 되어있는지 상태 확인 변수
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)  
  const [showPeriodDropdown, setShowPeriodDropdown] = useState(false)  

  const checkTitle = (inputData:string):void => {
    setChallengeTitle(inputData)
    // 공백만 들어있거나 특수문자 들어있음
    if (!checkWrongInput(inputData)){
      alert('제목에 공백만 들어갔거나, 특수문자가 들어갔습니다.')
    }
  }

  const checkContent = (inputData:string):void => {
    setChallengeContent(inputData)
    // 공백만 들어있거나 특수문자 들어있음
    if (!checkWrongInput(inputData)){
      alert('내용에 공백만 들어갔거나, 특수문자가 들어갔습니다.')
    }
  }

  const createChallenge = () => {
    console.log(selectPeriod)
    console.log(selectCategory)


    const challengeData = {
      "challengeTitle" : challengeTitle,
      "challengeContent" : challengeContent,
      "badgeUrl" : "S3 저장경로",
      "keywordId" : 2,
      "period" : "7일"
    }
    basicHttp.post('day/challenge/new', challengeData)
      .then((response) => console.log(response))
      .catch((e)=>{console.log(e)})
  }

  // 챌린지 카테고리 데이터 조회 
  useEffect(()=>{
    basicHttp.get('/day/keyword/list')
      .then((response)=>{
        const res = response.data.data
        
        let keywordList:string[] = []
        res.map((keywordObj:categoryListType)=>{
          console.log(keywordObj)
          keywordList = [...keywordList, keywordObj.keyword]
        })

        setCategoryList(keywordList)
        console.log(keywordList)

      })
      .catch((e)=>{console.log(e)})
  },[])


  // 동시에 둘다 드롭다운 되어있는 것 방지
  useEffect(()=>{
    if (showCategoryDropdown && showPeriodDropdown) {
      setShowPeriodDropdown(!showPeriodDropdown)
    }
    else if (showPeriodDropdown && showCategoryDropdown) {
      setShowCategoryDropdown(!showCategoryDropdown)
    }
  },[showCategoryDropdown, showPeriodDropdown])

  return (
    <Container $dayBaseContainer $dayCreate>

    {/* 챌린지 제목 */}
    <Input
      $chalCreateInput $dayColor 
      type="text" 
      placeholder="챌린지 제목"
      onBlur={(e)=>{
        checkTitle(e.target.value)
      }}
    ></Input>

    <TextArea 
      $chalDetailValue 
      placeholder="챌린지 내용"
      onBlur={(e)=>{
        checkContent(e.target.value)
      }}
    ></TextArea>


    {/* 카테고리 드롭다운 */}
    <div onClick={()=>{setShowCategoryDropdown(!showCategoryDropdown)}}>
      <Dropdown $show={showCategoryDropdown} $type={'category'} setSelectOption={setSelectCategory}>{categoryList}</Dropdown>
    </div>

    {/* 기간 드롭다운 */}
    <div onClick={()=>{setShowPeriodDropdown(!showPeriodDropdown)}}>
      <Dropdown $show={showPeriodDropdown} $type={'period'} setSelectOption={setSelectPeriod}>{periodList}</Dropdown>
    </div>

    {/* 등록하기 버튼 */}
    <Button 
      $dayCreate $fullWidth $dayBlue $isBold 
      onClick={()=>{createChallenge()}}
    >
      {'등록하기'}
    </Button>

    </Container>
  )
}

export default ChalCreate