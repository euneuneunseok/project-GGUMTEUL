// 리액트
import React, { Dispatch, SetStateAction, useState } from "react";

// 컴포넌트

// 스타일
import Wrap from "style/Wrap";
import { AiOutlineClose } from "react-icons/ai";
import ReactInstaStories from "react-insta-stories";

export interface DayStoryDetailProps {
  setIsOpenModal : Dispatch<SetStateAction<boolean>>
}

interface StoryHeaderType {
  heading :string,
  subheading :string,
  profileImage :string
}

interface StoriesObjType {
  url :string,
  header ?:StoryHeaderType,
  type ?:string,
  duration ?:number
}

interface StoryStylesType {
  width :number | string,
  height :number | string,
  margin :string,
  padding :string,
  borderRadius :string,
  objectFit :string;
  aspectRatio :number;
}


interface StoriesType extends Array<StoriesObjType> {}


const DayStoryDetail = ({setIsOpenModal} :DayStoryDetailProps) => {

  // 모달을 닫음
  const handleIsOpenModal = () => {
    setIsOpenModal(false);
    console.log("모달 닫기");
  }

  // 더미 데이터
  const stories :StoriesType = [
    { 
      url: 'https://picsum.photos/1080/1920',
      header: { 
        heading: 'Mohit Karekar', 
        subheading: 'Posted 5h ago', 
        profileImage: 'https://picsum.photos/1000/1000' 
    }}, 
    { 
      url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', 
      header: { 
        heading: 'Mohit Karekar', 
        subheading: 'Posted 32m ago', 
        profileImage: 'https://picsum.photos/1080/1920' 
      }
    }, 
    { 
      url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', 
      header: { 
        heading: 'mohitk05/react-insta-stories', 
        subheading: 'Posted 32m ago', 
        profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' 
      } 
    }, 
  ]

  // 스토리에 나오는 사진 크기 지정
  const storyStyles = {
    width: '100%',
    height: '100%',
    margin: 'auto',
    padding: '0.5rem',
    borderRadius: '1rem',
    objectFit: 'cover',
    aspectRatio: 1/1,
    
  }

  // 화면 크기
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  

  // 인덱스로 제어
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleOnNext = () => {
    console.log('다음 클릭');
    let newIndex = currentIndex + 1;
    if (newIndex === stories.length) {return handleIsOpenModal()};
    setCurrentIndex(newIndex);
  }

  const handleOnPrevious = () => {
    console.log('이전 클릭');
    let newIndex = currentIndex - 1;
    if (newIndex <= -1) {newIndex = 0};
    setCurrentIndex(newIndex);
  }

  
  return (
    <>
    <Wrap $storyWrap>

      {/* 닫기 버튼 */}
      <AiOutlineClose
        onClick={handleIsOpenModal}
        className="closeButton"
        style={{position: "fixed", top: "1.5rem", right: "1rem", width: "1.5rem", height: "1.5rem", zIndex: 1, color: "white"}}  
      ></AiOutlineClose>

      {/* 스토리 */}
      <div 
      className="story"
      
      >
        <div
        className="storyRight"
        onClick={handleOnNext}
        ></div>
        <div
        className="storyLeft"
        onClick={handleOnPrevious}
        ></div>
      
        <ReactInstaStories
          preventDefault
          onAllStoriesEnd={handleIsOpenModal}
          onNext={handleOnNext}
          currentIndex={currentIndex}
          stories={stories}     // 스토리에 들어갈 컨텐츠들
          defaultInterval={4000} // 스토리가 넘어가는 시간
          width={windowWidth}
          height={windowHeight}
          storyStyles={storyStyles} // 스토리 사진 크기 지정
        />
      </div>
    </Wrap>
    </>
  )

  // return (
  //   <>
  //   <Wrap $storyWrap>
  //     {/* 상단바 */}
  //     <div>
  //       <Image $tinyProfileImage><img /></Image>
  //       <Text $isBold $nightWhite>나는프론트엔드</Text>
  //       <AiOutlineClose onClick={handleIsOpenModal}></AiOutlineClose>
  //     </div>
  //     <div>
  //       {/* 챌린지 제목 */}
  //       <Box $mainTitleBox>
  //         <img />
  //         <Text>1일 1커밋 챌린지</Text>
  //       </Box>

  //       {/* 사진 */}
  //       <Image $signupImage><img src={`${process.env.PUBLIC_URL}/image/iu.png`}/></Image>

  //       {/* 내용 */}
  //       <Box $storyContentsBox $day>
  //         <Text>여기는 스토리 세부 내용 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sint nostrum? Dicta, provident maiores! Explicabo excepturi, odit ea facilis itaque neque laboriosam totam perspiciatis repellat quia aut consequatur dolorem accusantium!</Text>
  //       </Box>
  //     </div>


  //   </Wrap>
  //   </>
  // )
}

export default DayStoryDetail