import { Dispatch, SetStateAction, useEffect, useState } from "react"

// interface SpeechRecognitionEventType {
//   isTrusted: boolean;
//   bubbles: boolean;
//   cancelBubble: boolean;
// }

let recognition: any = null
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true // 공백이 생겨도 녹음이 계속 이어지도록
  recognition.lang = "ko-KR" // 언어 : 한국어
}

const SoundToText = () => {
  const [accentText, setAccentText] = useState<string>("");
  const [accentClickable, setaccentClickable] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);

  // useEffect(() => {
  //   // console.log("accentText: ", accentText)
  // }, [setAccentText]);

  const startListening = () => {
    setAccentText("");
    setIsListening(true);
    recognition.start() ;
  }

  // 음성 -> 텍스트로 변환
  const accenting = (setAccentText: Dispatch<SetStateAction<string>>) => {
    console.log("accenting 실행")
    if(!recognition) return 
    setaccentClickable(false);

    // 녹음 종료 시 아래 실행 (텍스트로 변환)
    recognition.onresult = (event :any) => {
      console.log('onresult 실행')
      setAccentText(event.results[0][0].transcript); // text변환
    }
    setIsListening(false);
    recognition.stop();
    setaccentClickable(true);
  }

  const stopListening = () => {
    if(recognition){recognition.stop()};
    setIsListening(false);
    setaccentClickable(true);
  }

  return {
    isListening,
    startListening,
    accenting,
    stopListening,
    hasRecognitionSupport: !! recognition
  }
}

export default SoundToText
