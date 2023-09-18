import { useEffect, useState } from "react"

let recognition: any = null
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true // 공백이 생겨도 녹음이 계속 이어지도록
  recognition.lang = "ko-KR" // 언어 : 한국어
}

const SoundToText = () => {
  const [accentText, setAccentText] = useState<string>("");
  const [accentClickable, setAccentClickable] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);

  const startListening = () => {
    setIsListening(true);
    recognition.start() ;
  }

  // 음성 -> 텍스트로 변환
  const accenting = () => {
    if(!recognition) return 
    console.log("accenting 실행")
    setAccentClickable(false);

    // 녹음 종료 시 아래 실행 (텍스트로 변환)
    recognition.onresult = (event :any) => {
      setAccentText(accentText + event.results[0][0].transcript); // text변환
    }
    setIsListening(false);
    recognition.stop(); // 음성인식 종료
    setAccentClickable(true);
    setAccentText(""); // 녹음이 종료되면 변환된 텍스트 초기화
  }

  const stopListening = () => {
    if(recognition){recognition.stop()};
    setIsListening(false);
    setAccentClickable(true);
  }

  return {
    isListening,
    startListening,
    accenting,
    stopListening,
    setAccentText,
    accentText,
    // hasRecognitionSupport: !! recognition
  }
}

export default SoundToText
