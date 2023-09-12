// 리액트
import ChalContentListItem from "components/day/daycommon/ChalContentListItem";
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

// 컴포넌트
// import ChalContentListItem from "../daycommon/ChalContentListItem";

// 스타일
export interface DayChallengeObj {
  title :string,
  period :string,
  challengeId :number
}

export interface DayChallengeList extends Array<DayChallengeObj> {}

export interface propsObj {
  children ?: any,
  setArriveEnd :Dispatch<SetStateAction<boolean>>,
  setAllChalList :Dispatch<SetStateAction<DayChallengeList>>,
  allChalList :DayChallengeList,
  newChalList :DayChallengeList,
  lastItemId :number,
  component :any,
} 


const InfiniteScroll = ({
  setArriveEnd, 
  setAllChalList, 
  allChalList,
  newChalList,
  lastItemId,
  component
} :propsObj) => {
  

  // 무한 스크롤
  // const [posts, setPosts] = useState<postType[]>(getPostList(1));
  // posts 배열의 초기값은 페이지가 1인 객체들 입니다.
  // const [currentPage, setCurrentPage] = useState<number>(1);

  // 스크롤을 하면서 실행할 내용
  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    // 브라우저창 내용의 크기 (스크롤을 포함하지 않음)
    
    const { scrollHeight } = document.body;
    // 브라우저 총 내용의 크기 (스크롤을 포함한다) - 사이즈 3rem정도 줄이기 (미리 axios 요청하도록)
    
    const { scrollTop } = document.documentElement;
    // 현재 스크롤바의 위치
    
    if (Math.round(scrollTop + innerHeight) >= scrollHeight*0.95 ) {
      // scrollTop과 innerHeight를 더한 값이 scrollHeight*0.95 보다 크다면, 가장 아래에 도달했다는 의미
      setArriveEnd(true);
      
      // setPosts(posts.concat(getPostList(page + 1)));
      // setAllChalList([...allChalList, newChalList])
      // 페이지에 따라서 불러온 배열을 합쳐줍니다.
      
      // setPage((prevPage: number) => prevPage + 1);
      // 페이지 state 변수의 값도 1씩 늘려줍니다.

    }
  }, [lastItemId]);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    // 스크롤이 발생할때마다 handleScroll 함수를 호출하도록 추가
    
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      // 해당 컴포넌트가 언마운트 될때, 스크롤 이벤트를 제거
    };
  }, [handleScroll]);



  return (
    <>
      {component}
    </>
  )
}

export default InfiniteScroll