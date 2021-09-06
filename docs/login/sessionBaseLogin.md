# Session Base Login

- 클라이언트
- 서버

## 세션

- 서버안에 RAM 공간에 DB형태로 저장

- 하나의 `연결`
- Session ID, User ID, TimeOut, Authorization등의 저장
- 쿠키 안에 Session ID를 넣어서 돌려줌

## 문제점

- 다수의 서버
- 로드밸런스가 요청을 처리하는 과정

## 해결

- 세션 전용 DB
