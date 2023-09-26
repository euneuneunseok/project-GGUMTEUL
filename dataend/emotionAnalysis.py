import asyncio
from google.cloud import language_v2
from google.oauth2 import service_account

# 구글 키 설정
key_path = ".\\googleKey.json"

# 인증 설정
credentials = service_account.Credentials.from_service_account_file(
    key_path, scopes=['https://www.googleapis.com/auth/cloud-platform']
)

# 감정 분석할 텍스트
text = "비둘기가 방에 들어옵니다."

# 비동기 함수로 변환
async def analyze_text_sentiment():
    # NL API 클라이언트
    client = language_v2.LanguageServiceAsyncClient(credentials=credentials)

    # 문서 생성
    document = language_v2.Document(
        content=text, 
        type_=language_v2.Document.Type.PLAIN_TEXT,
        language_code="ko"
    )

    request = {"document": document, "encoding_type": language_v2.EncodingType.UTF8}

    # 감정 분석 요청
    response = await client.analyze_sentiment(request=request)

    # 감정 스코어
    sentiment = response.document_sentiment

    print("감정 종합")
    print(sentiment)

    print("감정 점수")
    print(f'{sentiment.score}')
    print("강도")
    print(f'{sentiment.magnitude}')

# 비동기 함수 실행
if __name__ == "__main__":
    asyncio.run(analyze_text_sentiment())

exit()

# 구글 키 설정
key_path = ".\\googleKey.json"

# 인증 설정
credentials = service_account.Credentials.from_service_account_file(
    key_path, scopes=['https://www.googleapis.com/auth/cloud-platform']
)


async def analyze_sentiment(text_content:str = text) -> None:
    """
    Analyzes Sentiment in a string.

    Args:
      text_content: The text content to analyze.
    """
    client = language_v2.LanguageServiceAsyncClient(credentials=credentials)

    # Available Type : PlainText, HTML
    document_type_in_plain_text = language_v2.Document.Type.PLAIN_TEXT

    # Optional. If not specified, the language is automatically detected.
    # For list of supported languages:
    # https://cloud.google.com/natural-language/docs/languages

    language_code = "ko"
    document = {
        "content": text_content,
        "type_": document_type_in_plain_text,
        "language_code": language_code,
    }

    # Available values: NONE, UTF8, UTF16, UTF32
    # See https://cloud.google.com/natural-language/docs/reference/rest/v2/EncodingType.
    encoding_type = language_v2.EncodingType.UTF8

    response = await client.analyze_sentiment(
        request={"document": document, "encoding_type": encoding_type}
    )
    # Get overall sentiment of the input document
    print(f"Document sentiment score: {response.document_sentiment.score}")
    print(f"Document sentiment magnitude: {response.document_sentiment.magnitude}")
    # Get sentiment for all sentences in the document
    for sentence in response.sentences:
        print(f"Sentence text: {sentence.text.content}")
        print(f"Sentence sentiment score: {sentence.sentiment.score}")
        print(f"Sentence sentiment magnitude: {sentence.sentiment.magnitude}")

    # Get the language of the text, which will be the same as
    # the language specified in the request or, if not specified,
    # the automatically-detected language.
    print(f"Language of the text: {response.language_code}")


# 감정분석할 텍스트

# NL API 클라이언트
# client = language_v2.LanguageServiceAsyncClient(credentials=credentials)

# # 문서 생성
# document = language_v2.Document(
#     content=text, 
#     type_=language_v2.Document.Type.PLAIN_TEXT,
#     language_code="ko"
#     )


# request={"document": document, "encoding_type": language_v2.EncodingType.UTF8}

# # 감정분석 요청
# response = client.analyze_sentiment(request=request)

# print(response, "응답답답")

# # 감정 스코어
# sentiment = response.document_sentiment

# print("감정 종합")
# print(sentiment)

# print("감정점수")
# print(f'{sentiment.score}')
# print("강도")
# print(f'{sentiment.score}')

# 비동기 함수 실행
if __name__ == "__main__":
    asyncio.run(analyze_sentiment())