
// map
// <CategoryBox></CategoryBox>

// 리액트
import Button from "components/common/Button";
import React from "react";
import Text from "style/Text";
import styled from "styled-components";

// 컴포넌트

// 스타일
const CategoryWrap = styled.div`
`

const DayCategoryList = () => {
  let categoryList :string[] = [
    '재물', '진로', '인간관계', '감정', '자기계발', 
    '건강', '도전', '교양', '학습', '기타'];

  return (
    <>
    <CategoryWrap>
      <Text $isBold>카테고리</Text>
      {
        categoryList.map((category, i) => 
          <Button $category key={i}>{category}</Button>
        
        )
      }
    </CategoryWrap>
    </>
  )
}

export default DayCategoryList