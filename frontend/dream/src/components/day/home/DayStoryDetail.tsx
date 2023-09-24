// 리액트
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

// 외부 라이브러리
import basicHttp from "api/basicHttp";
import ReactInstaStories from "react-insta-stories";

// 컴포넌트

// 스타일
import Wrap from "style/Wrap";
import { AiOutlineClose } from "react-icons/ai";
import Text from "style/Text";
import { Renderer } from "react-insta-stories/dist/interfaces";
import { Box } from "style/Box";
import Image from "style/Image";
import styled from "styled-components";

export interface DayStoryDetailProps {
  setIsOpenModal :Dispatch<SetStateAction<boolean>>,
  isOpenModal :boolean,
}

interface StoryType {
  challengeDetailContent :string,
  challengeDetailId :number,
  challengeTitle :string,
  nickName :string,
  photoUrl :string,
  userId :number
}

interface StoryBarProps {
  storyLength :number,
  currentIndex :number,
  index :number,
}

const StoryBar = styled.div<StoryBarProps>`
  width: calc(${props => 100/props.storyLength*(props.currentIndex+1)}%);
  height: 0.4rem;
  background-color: ${props =>
    props.currentIndex >= props.index ? "#3D5665" : "#E4E8E7"};
  border-radius: 1rem;
  border: 1px solid #3D5665;
  `

// interface StoriesType extends Array<StoriesObjType> {}

const DayStoryDetail = ({setIsOpenModal, isOpenModal} :DayStoryDetailProps) => {
  // const auth = useSelector((state: RootState) => state.auth);
  const [storyList, setStoryList] = useState<StoryType[]>([]); // axios로 새로 받아올 데이터
  const [isStoryData, setIsStoryData] = useState<boolean>(false);
  
  // 모달을 닫음
  const handleIsOpenModal = () => {
    setIsOpenModal(false); // 모달 닫음
    setCurrentIndex(0); // 스토리 인덱스 0으로 초기화
    console.log("모달 닫기");
  }

  
  // API 연결
  // userId는 상대방의 ID를 넣어야 함
  const userId = 3; // 임시 데이터

  useEffect(() => {
    basicHttp.get(`/day/challange/story/${userId}`)
    .then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        setStoryList(res.data.data); // 데이터 저장
        // setIsStoryData(true)
      }
      // checkStoryData();
      // 팔로우한 유저가 올린 글이 없을 때
      if (res.data.status === 400) {
        // setIsStoryData(false)
      }
    })
    .catch(err => console.log(err))
  }, [])


  // 인덱스로 제어
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // const [currentTime, setCurrentTime] = useState<number>(999);
  // let newIndex = 0;
  // const [newIndex, setNewIndex] = useState<number>(0);
  let interval = 3000;

  
  // 스토리 입장 -> n초 대기 -> 다음 화면 넘어가기
  // 입장 후 n초 대기 -> 기준time 0으로 초기화 -> handleOnNext 실행
  // 다음 클릭 -> handleOnNext 실행 -> n초 대기 -> handleOnNext 실행
  // 이전 클릭 -> handleOnPrevious 실행 -> n초 대기 -> handleOnNext 실행
  
  const nextTime = (callback :() => void, time :number) => {
    setTimeout(callback, time);
  };

  // 스토리 시작 시 실행
  const storyStart = async () :Promise<void> => {
    if (isOpenModal) {
      await nextTime(() => {
        console.log('시작');
        setCurrentIndex(1);
      }, interval);
    }
  }

  // 일정시간 후 다음 페이지로 이동
  const goToNextInterval = async () :Promise<void> => {
    await nextTime(() => {
      console.log('다음');
      if (isOpenModal && currentIndex + 1 < storyList.length) {
        setCurrentIndex(currentIndex+1);
      } else {handleIsOpenModal()}
      }, interval);
  }
    // return new Promise((resolve, reject) => {
    //   if (isOpenModal) {
    //     nextTime(() => {
    //       console.log('go to next page');
    //       resolve(currentIndex+1);
    //     }, interval)
    //   }
    // })


  // const storyStart = () :Promise<void> => { // storyStart 객체가 boolean을 반환하는 Promise 객체
  //   return new Promise((resolve) => { // Promise 객체 반환
  //     nextTime(() => { // Promise 내부 함수
  //       console.log('시작');
  //       resolve(setCurrentIndex(1)); // 성공 시 반환할 값 : 인덱스 1로 이동
  //       // reject(false); // 실패 시 반환할 값
  //     }, interval)
  //   });
  // }
  
  // storyStart() // storyStart 실행
    // .then(progress => setCurrentIndex(currentIndex+1)); // n초 대기 후다음 화면으로 넘어감
  
  // // 일정시간 후 다음 페이지로 이동
  // const goToNextInterval = () :Promise<number> => {
  //   return new Promise((resolve, reject) => {
  //     if (isOpenModal) {
  //       nextTime(() => {
  //         console.log('go to next page');
  //         resolve(currentIndex+1);
  //       }, interval)
  //     }
  //   })
  // }

  // goToNextInterval()
  //   .then(progress => {
  //     console.log('progress : ', progress, 'storyList.length : ', storyList.length)
  //     if (progress < storyList.length) {
  //       setCurrentIndex(progress)
  //     } else {setIsOpenModal(false)}
  //   }); // 인덱스에 +1

  // // 이전 페이지로 이동
  // const goToPrevious = () :Promise<void> => {
  //   return new Promise((resolve, reject) => {
  //     nextTime(() => {
  //       console.log('go to previous page');
  //       resolve(setCurrentIndex(currentIndex-1));
  //     }, interval)
  //   })
  // }

  

  const handleOnNext = () => {
    if (currentIndex + 1 >= storyList.length) {
      handleIsOpenModal();
      return
    }
    setCurrentIndex(currentIndex + 1);
  }

  
  const handleOnPrevious = () => {
    if (currentIndex - 1 < 0) return;
    setCurrentIndex(currentIndex - 1);
    console.log('이전');
  }

  // 인덱스가 리스트 길이보다 작고 모달이 띄워져있을 때 실행
  useEffect(() => {
    if (currentIndex < storyList.length && isOpenModal) {
      goToNextInterval();
    };
  }, [currentIndex, isOpenModal])

  // 스토리 시작 시 setTimeOut
  useEffect(() => {
    if (isOpenModal) {
      storyStart();
    }
  }, [storyList])


  // // storyList 개수만큼 div 태그 만들기 (상단바)
  // useEffect(() => {
  //   const newDivElement = document.createElement('div');
  //   newDivElement.className = 'storyBarElement';
  //   storyList.forEach((element, index) => {
  //     document.querySelector('.storyBar')?.appendChild(newDivElement);
  //   });
  // }, [storyList])

  // currentIndex까지의 StoryBar 배경색을 특정색으로 지정
  useEffect(() => {
    const storyBars = document.querySelectorAll(".storyBar");
    storyBars.forEach((storyBar, index) => {
      const element = storyBar as HTMLElement; // 타입 어설션
      if (index <= currentIndex) {
        element.style.backgroundColor = "#3D5665";
      } else {
        element.style.backgroundColor = "transparent"; // currentIndex 이후는 투명 배경색
      }
    });
  }, [currentIndex]);

  
  return (
    <>
    {
      isOpenModal &&
      storyList && 
      currentIndex < storyList.length &&
      currentIndex > -1 &&
      <Wrap $storyWrap>
        {/* 닫기 버튼 */}
        <AiOutlineClose
        onClick={handleIsOpenModal}
        className="closeButton"
        style={{position: "fixed", top: "1.5rem", right: "1rem", width: "1.5rem", height: "1.5rem", zIndex: 1, color: "white"}}  
        ></AiOutlineClose>

        {
          <div className="story">
            {/* 클릭 영역 */}
            <div
            className="storyRight"
            // onClick={handleOnNext}
            onClick={handleOnNext}
            ></div>
            <div
            className="storyLeft"
            // onClick={handleOnPrevious}
            onClick={handleOnPrevious}
            ></div>

            {/* 상단바 */}
            <div className="storyBarBox">
              {storyList.map((element, i) => (
                  <StoryBar 
                  key={i} 
                  storyLength={storyList.length}
                  currentIndex={currentIndex}
                  index={i}
                  ></StoryBar>
              ))}
            </div>

            {/* 컨텐츠 영역 */}
            {/* 헤더 */}
            <div className="header">
              <Box $mainTitleBox $day>
                <Text>{storyList[currentIndex].challengeTitle}</Text>
              </Box>
            </div>
              <Image $mainImage $nightImageBorder>
                <img src={storyList[currentIndex].photoUrl}></img>
              </Image>
              <Text>{storyList[currentIndex].nickName}</Text>
              <Box $challengeContentBox
              style={{padding: "1.5rem"}}
              >
                {/* <Text>{storyList[currentIndex].challengeDetailContent}</Text> */}
                {storyList[currentIndex].challengeDetailContent}
              </Box>

          </div>
          }
        


        
        {/* {
          isStoryData
          && <>
            <div className="story">
            <div
            className="storyRight"
            onClick={handleOnNext}
            ></div>
            <div
            className="storyLeft"
            onClick={handleOnPrevious}
            ></div>
            
            <ReactInstaStories
              // preventDefault
              onStoryStart={() => console.log('스토리 시작')}
              onAllStoriesEnd={handleIsOpenModal}
              onNext={handleOnNext}
              onPrevious={handleOnPrevious}
              currentIndex={currentIndex}
              // stories={storyList && storyList.map((story, i):any => ({
              //   url: "https://picsum.photos/1080/1920",
              //   header: { 
              //         heading: story.nickName, 
              //         subheading: i, 
              //         profileImage: "https://picsum.photos/1080/1920" // 유저 프로필로 바꾸기
              //       }
              // }))}
              stories={stories}
              defaultInterval={interval} // 스토리가 넘어가는 시간
              width={windowWidth}
              height={windowHeight}
              storyStyles={storyStyles} // 스토리 사진 크기 지정
              />
              </div>
            </>
          // : <>
          //   <div className="noContent">
          //     <Text>팔로우한 유저의 글이 없습니다.</Text>
          //   </div>
          //   </>
          } */}

      </Wrap>
      }

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


// interface StoryHeaderType {
//   heading :string,
//   subheading :string,
//   profileImage :string
// }

// interface StoriesObjType {
//   url :string,
//   header ?:StoryHeaderType,
//   type ?:string,
//   duration ?:number,
//   // content :Renderer | undefined
// }

// interface StoryStylesType {
//   width :number | string,
//   height :number | string,
//   margin :string,
//   padding :string,
//   borderRadius :string,
//   objectFit :string;
//   aspectRatio :number;
// }



  // API로 받아올 데이터
  // const stories :StoriesType = [

  // ]

  // // 데이터가 존재하는지 여부 확인
  // const checkStoryData = () => {
  //   // 데이터가 존재할 때
  //   if (storyList.length > 0) return setIsStoryData(true);
  //   // 데이터가 존재하지 않을 때
  //   setIsStoryData(false);
  // }

  // 더미 데이터
  // const stories :StoriesType = [{
  //   content: ({ action, isPaused }) => {
  //     storyList.map(({s, i}: any) => (
  //       <div key={i}>
  //         <img src="https://picsum.photos/1080/1920"></img>
  //       </div>
  //     ));
  //   },
  // }];
// 스토리 객체 생성을 위한 함수
// const createStory = (url: string) => ({
//   url,
//   content: ({ action, isPaused }: any) => (
//     <div>
//       <img src="https://picsum.photos/1080/1920"></img>
//     </div>
//   )
// });
// const stories: StoriesType = storyList.map((s: string, index: number) => createStory(s));

// const stories :StoriesType = 
//   storyList.map((s, i) => ({
//     content: ({ action, isPaused }: any) => (
//       <div>
//         <img src={`https://picsum.photos/1080/1920?random=${i}`} alt={`Story ${i}`} />
//       </div>
//     )
//   }))
  // {
  //   content: ({ action, isPaused }: any) => (
  //     <div>
  //       {storyList.map((s: string, i: number) => (
          
  //         <img key={i} src="https://picsum.photos/1080/1920" alt={`Story ${i}`} />
  //       ))}
  //     </div>
  //   )
  // }


  // const stories :StoriesType =  [
  //   { 
  //     url: 'https://picsum.photos/1080/1920',
  //     header: { 
  //       heading: 'Mohit Karekar', 
  //       subheading: 'Posted 5h ago', 
  //       profileImage: 'https://picsum.photos/1000/1000' 
  //     }
  //   }, 
  //   { 
  //     url: 'https://picsum.photos/1080/1920',
  //     header: { 
  //       heading: 'Mohit Karekar', 
  //       subheading: 'Posted 5h ago', 
  //       profileImage: 'https://picsum.photos/1000/1000' 
  //     }
  //   }, 
  // ]
  // useEffect(() => {
  //   console.log(storyList)
  // }, [storyList, setStoryList])

  // const stories: StoriesType = storyList.map((story, index) => ({
  //   url: "https://picsum.photos/1000/1000", // storyList의 각 요소를 url로 사용
  //   header: {
  //     heading: story.nickName,
  //     subheading: story.photoUrl,
  //     profileImage: 'https://picsum.photos/1000/1000', // 프로필 이미지 URL
  //   },
  // }));

  
  
      
    
    // { 
    //   url: 'https://picsum.photos/1080/1920',
    //   header: { 
    //     heading: 'Mohit Karekar', 
    //     subheading: 'Posted 5h ago', 
    //     profileImage: 'https://picsum.photos/1000/1000' 
    // }}, 
    // { 
    //   url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', 
    //   header: { 
    //     heading: 'Mohit Karekar', 
    //     subheading: 'Posted 32m ago', 
    //     profileImage: 'https://picsum.photos/1080/1920' 
    //   }
    // }, 
    // { 
    //   url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', 
    //   header: { 
    //     heading: 'mohitk05/react-insta-stories', 
    //     subheading: 'Posted 32m ago', 
    //     profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' 
    //   } 
    // }
  




    // storyList.map((s) => ({
    //   content: ({ action, isPaused }) => {
    //     return (
    //       <div>
    //         <img src="https://picsum.photos/1080/1920"></img>
    //         {/* <img src={s}></img> */}
    //       </div>
    //     );
    //   }
    // }))
  
    
  
//     storyList.map((s):any => {
//       return (
//       <>
//       {s}
//       </>
//       )
// })
    // { 
    //   url: 'https://picsum.photos/1080/1920',
    //   header: { 
    //     heading: 'Mohit Karekar', 
    //     subheading: 'Posted 5h ago', 
    //     profileImage: 'https://picsum.photos/1000/1000' 
    // }}, 
    // { 
    //   url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', 
    //   header: { 
    //     heading: 'Mohit Karekar', 
    //     subheading: 'Posted 32m ago', 
    //     profileImage: 'https://picsum.photos/1080/1920' 
    //   }
    // }, 
    // { 
    //   url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', 
    //   header: { 
    //     heading: 'mohitk05/react-insta-stories', 
    //     subheading: 'Posted 32m ago', 
    //     profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' 
    //   } 
    // }, 
  
  // console.log(stories.length)


  // // 스토리에 나오는 사진 크기 지정
  // const storyStyles = {
  //   width: '100%',
  //   height: '100%',
  //   margin: 'auto',
  //   padding: '0.5rem',
  //   borderRadius: '1rem',
  //   objectFit: 'cover',
  //   aspectRatio: 1/1,
    
  // }

  // // 화면 크기
  // let windowWidth = window.innerWidth;
  // let windowHeight = window.innerHeight;
  