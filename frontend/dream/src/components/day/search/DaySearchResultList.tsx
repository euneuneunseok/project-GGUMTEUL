// SearchBar 
// 검색 입력하면 검색바는 상단

// DayCategoryList // daycommon 폴더

// 검색결과리스트.map
// ChalContentListItem

 // 리액트
import React, {useState} from "react";

// 컴포넌트
import DayCategoryList, { CategoryAxiosType } from "../daycommon/DayCategoryList";
import ChalContentListItem from "../daycommon/ChalContentListItem";
import DayChallengeList from "../home/DayChallengeList";
import Text from "style/Text";

// 스타일

// 타입
interface SearchResultProps {
  searchWord :string
}


const DaySearchResultList = ({searchWord}: SearchResultProps) => {

  const [categoryProps, setCategoryProps] = useState<CategoryAxiosType>({keyword: '', keywordId: 0});


  return (
    <>
    <DayCategoryList setCategoryProps={setCategoryProps} />
    <Text $isBold $daySearchText>검색 결과</Text>
    <DayChallengeList searchWord={searchWord} categoryProps={categoryProps}/>
    </>
  )
}
export default DaySearchResultList