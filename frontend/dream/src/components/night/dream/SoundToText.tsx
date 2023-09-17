import { useEffect, useState } from "react"
// import { accentClickableState, accentSttState } from '/src/recoil/HW_Atom';
// import { useRecoilState } from "recoil";


let recognition: any = null
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true // 공백이 생겨도 녹음이 계속 이어지도록
  recognition.lang = "ko-KR" // 언어 : 한국어
}

const SoundToText = () => {
  const [accentText, setAccentText] = useState<string>("");
  const [accentClickable, setaccentClickable] = useState<boolean>(false);
  const [isListening, setIsListening] = useState(false)

  const startListening = () => {
    setAccentText("");
    setIsListening(true);
    recognition.start() ;
  }

  // 음성 -> 텍스트로 변환
  const accenting = () => {
    console.log("accenting 실행")
    if(!recognition) return 
    console.log('여기')
    setaccentClickable(false);
    recognition.onresult = (event: any) => {
      console.log(event)
      console.log(typeof event)
      setAccentText(event.results[0][0].transcript);
    }
    setIsListening(false)
    recognition.stop()
    setaccentClickable(true)
  }

  const stopListening = () => {
    if(recognition){recognition.stop()}
    setIsListening(false)
    setaccentClickable(true)
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
