1. send()

- 버퍼 데이터
- 문자열
- HTML코드
- JSON
  전송가능

2. sendFile()

- 파일응답

3. json()

- JSON데이터

4. redirect()

- 응답을 다른 라우터로
- 302코드

5. status()

- 상태코드를 직접 바꿀 수 있음

6. render()

- 템플릿엔진을 렌더링할 때

# res 메서드 정리

1. writeHead
   | response.writeHead(statusCode[, statusMessage][, headers])

```js
const body = "hello world";
response
  .writeHead(200, {
    "Content-Length": Buffer.byteLength(body),
    "Content-Type": "text/plain",
  })
  .end(body);
```