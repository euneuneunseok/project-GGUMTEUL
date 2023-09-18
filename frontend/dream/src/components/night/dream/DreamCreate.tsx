// 음성 LongButton
// WideTextInput
// 공개 // 버튼 2개

// 리액트
import React, { useEffect, useState } from "react";

// 컴포넌트

// 스타일
import Button from "components/common/Button";
import TextArea from "style/TextArea";
import styled from "styled-components";
import { IoMicOutline } from "react-icons/io5"
import SoundToText from "./SoundToText";

const DreamCreateContainer = styled.div`
  margin: 6rem 0.5rem;
`;

const IconRecord = styled(IoMicOutline)`
  width: 2rem;
  height: 2rem;
`



const DreamCreate = () => {
  const [recordStart, setRecordStart] = useState<boolean>(false); // 녹음 시작
  const [allText, setAllText] = useState<string>(""); // 입력본 + 녹음본 모두 합친 것
  const { startListening, stopListening, accenting, setAccentText, accentText } = SoundToText();
  // const [accentRecord, setAccentRecord] = useState<string>("");
  // const [accentScript, setAccentScript] = useState<string>("");
  // const [accentClickable, setAccentClickable] = useState<boolean>(false);
  // const [accentText, setAccentText] = useState<string>("");

  // 녹음 시작 & 종료
  useEffect(() => {
    if (recordStart) {
      startListening();
    } else {
      stopListening();
    }
  }, [setRecordStart, recordStart]);

  useEffect(() => {
    if (accentText) {
      setAllText(allText + " " + accentText); // 기존 입력된 값과 합치기
    }
  }, [setAccentText, accentText])

  return (
    <>
    <DreamCreateContainer>
      <Button
      $fullWidth
      $nightVoice
      onClick={() => {
        console.log('클릭');
        setRecordStart(!recordStart); // 녹음 시작, 종료
        accenting(); // 텍스트로 변환
      }}
      >
        <IconRecord/>
      </Button>
      <TextArea
      $nightDreamInput
      value={allText}
      onChange={(e) => setAllText(e.target.value)}
      />

      <div
      style={{
        display: "flex", 
        justifyContent: "space-between", 
        padding: "0 1rem"
      }}
      >
        <div>
          {/* 임시 체크박스 */}
          <input
          type="checkbox"
          />
          공개
        </div>

        <div>
          <Button
          $nightMiddlePurple
          >
          취소
          </Button>
          <Button
          $nightPurple
          >
          등록
          </Button>
        </div>
      </div>
    </DreamCreateContainer>
    </>
  )
}

export default DreamCreate