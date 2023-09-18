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

const ProfileHeader = () => {
  const themeMode = useSelector((state: RootState) => state.themeModeReducer.themeMode);

  return (
    <>
    <Wrap>
      <Image
      $smallProfileImage
      >
        <img src="https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjAy/MDAxNjQzMTAyOTk2NjE0.gw_H_jjBM64svaftcnheR6-mHHlmGOyrr6htAuxPETsg.8JJSQNEA5HX2WmrshjZ-VjmJWqhmgE40Qm5csIud9VUg.JPEG.minziminzi128/IMG_7374.JPG?type=w800"/>
      </Image>
      <div>
        <Text
        
        >나는프론트엔드</Text>
      </div>
    </Wrap>
    </>
  )
}

export default ProfileHeader