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

export interface DayStoryDetailProps {
  setIsOpenModal :Dispatch<SetStateAction<boolean>>,
  isOpenModal :boolean,
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
  duration ?:number,
  // content :Renderer | undefined
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

interface StoryType {
  challengeDetailContent :string,
  challengeDetailId :number,
  challengeTitle :string,
  nickName :string,
  photoUrl :string,
  userId :number
}


interface StoriesType extends Array<StoriesObjType> {}


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
        // setStoryList(res.data.data.map((story: any) => ({
        //   challengeDetailContent: story.challengeDetailContent,
        //   challengeDetailId: story.challengeDetailId,
        //   challengeTitle: story.challengeTitle,
        //   nickName: story.nickName,
        //   photoUrl: story.photoUrl,
        //   userId: story.userId,
        // })));
        setIsStoryData(true)
      }
      // checkStoryData();
      // 팔로우한 유저가 올린 글이 없을 때
      if (res.data.status === 400) {
        setIsStoryData(false)
      }
    })
    .catch(err => console.log(err))
  }, [])

  // API로 받아올 데이터
  // const stories :StoriesType = [

  // ]

  // 데이터가 존재하는지 여부 확인
  const checkStoryData = () => {
    // 데이터가 존재할 때
    if (storyList.length > 0) return setIsStoryData(true);
    // 데이터가 존재하지 않을 때
    setIsStoryData(false);
  }

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

  const stories: StoriesType = storyList.map((story, index) => ({
    url: "https://picsum.photos/1000/1000", // storyList의 각 요소를 url로 사용
    header: {
      heading: story.nickName,
      subheading: story.photoUrl,
      profileImage: 'https://picsum.photos/1000/1000', // 프로필 이미지 URL
    },
  }));

  
  
      
    
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
  const [currentTime, setCurrentTime] = useState<number>(4);
  // let newIndex = 0;
  const [newIndex, setNewIndex] = useState<number>(0);
  let interval = 4000;

  const handleOnNext = () => {
    setNewIndex(currentIndex + 1);
    if (currentIndex + 1 === storyList.length) {return handleIsOpenModal()};
    setCurrentIndex(currentIndex + 1);
    console.log('다음', currentIndex, newIndex);
    // setTimeout(() => handleOnNext(),interval);
  }

  const handleOnPrevious = () => {
    setNewIndex(currentIndex - 1);
    if (currentIndex - 1 <= 0) {setNewIndex(0)};
    setCurrentIndex(newIndex);
    console.log('이전', currentIndex, newIndex);
    // setTimeout(() => handleOnNext(),interval);
  }


  useEffect(() => {
    if (currentIndex <= -1) {
      setIsOpenModal(false)
      setCurrentIndex(0)
    }
    // setTimeout(() => handleOnNext, interval)
  }, [currentIndex])

  
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
            onClick={handleOnNext}
            ></div>
            <div
            className="storyLeft"
            onClick={handleOnPrevious}
            ></div>

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