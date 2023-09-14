import React, { useEffect, useState } from "react";

// 컴포넌트
import Button from "./Button";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useNavigate } from "react-router-dom";

// 함수
// 1안
// 현재 url state로 관리를 하고
// 모드 변경할 때 그 url 이 가지고 있는 것을 변경시켜줌
// mode변경 버튼에서 url day-> night -> day로 이동할 수 있게 만들어야함

// 2안
// 현재 theme 상태를 확인하는 redux
// 현재 url state로 관리를 하고 프로필인지 홈인지 알아야 다음 url로 보낼 수 있음
// night면 day url 로 
// day면 night url 로


const NavBar = () => {
  const navigate = useNavigate()

  // //true : night, false : day
  const [nightDayMode, setNightDayMode] = useState<boolean>(true);

  const themeMode = useSelector((state :RootState) => state.themeModeReducer.themeMode);
  
  useEffect(()=>{
    setNightDayMode(themeMode.mode ==='night' ? true : false)
  },[themeMode.mode])

  return (
    <>
    {/* NavBar왼쪽 */}
      {/* 로고 */}
      {/* mode변경 버튼 */}

    {/* NavBar오른쪽 */}
      {/* 알림 버튼 */}
    </>
  )
}

export default NavBar