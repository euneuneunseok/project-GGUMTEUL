// 닉네임
// FollowButton (남의 프로필 경우) , 자신의 프로필 경우 -> 안보임

// wrapping 4칸
// CircleImage
// ProfileText 꿈머니(자신의 프로필 경우) 완료 챌린지 수(남의 프로필 경우)
// ProfileText 팔로워
// ProfileText 팔로잉

// 리액트
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

// 컴포넌트

// 스타일
import Button from "./Button";
import Wrap from "style/Wrap";
import Image from "style/Image";
import Text from "style/Text";
import styled from "styled-components";


const ProgressBar = styled.div`
  /* width:120px; */
  height: 1rem;
  border-radius: 1rem;
  color: #514b82;
  position: relative;
  background-color: white;

  &::before {
    content: "";
    position: absolute;
    /* margin: 0.1rem; */
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation: p6 2s linear;
  }
  @keyframes p6 {
      100% {inset:0}
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
      
  }
  

`


/* const ProgressBar = styled.div`
  height: 1rem;
  border-radius: 2rem;
  background:
  linear-gradient(#000 0 0) 0/70% no-repeat
  #ddd;
  animation:p1 2s linear;
  animation-timing-function: ease-in-out;
  @keyframes p1 {
    100% {background-size:100%}
  }
` */

const ProfileHeader = () => {
  const themeMode = useSelector((state: RootState) => state.themeModeReducer.themeMode);

  return (
    <>
    <Wrap $profileHeaderWrap>
      <div>
        <Image
        $smallProfileImage
        >
          <img src="https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjAy/MDAxNjQzMTAyOTk2NjE0.gw_H_jjBM64svaftcnheR6-mHHlmGOyrr6htAuxPETsg.8JJSQNEA5HX2WmrshjZ-VjmJWqhmgE40Qm5csIud9VUg.JPEG.minziminzi128/IMG_7374.JPG?type=w800"/>
        </Image>
        <div>
          <div>
            <Text>나는프론트엔드</Text>
          </div>
          <div>
            <div>
              <p>꿈머니</p>
              <p>5.5k</p>
            </div>
            <div>
              <p>팔로워</p>
              <p>1.3k</p>
            </div>
            <div>
              <p>팔로잉</p>
              <p>70</p>
            </div>
          </div>
        </div>
      </div>
      <ProgressBar></ProgressBar>
      
        
      {/* <div className="progress-1"></div> */}
      
    </Wrap>
    </>
  )
}

export default ProfileHeader