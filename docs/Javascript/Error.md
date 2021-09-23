# Error 객체

| Error 생성자는 오류 객체를 생성합니다.

## Error 클래스

```js
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error"; // (name은 내장 에러 클래스마다 다릅니다.)
    this.stack = <call stack>;
  }
}
```

## 사용법

1. new Error()
2. new Error(msg)
3. new Error(msg,fileName)
4. new Error(msg,fileName,lineNumber)

## new 키워드 있고 없고 차이

- new 없이 함수로 호출하여도 Error 객체를 반환함ㄴ
- 결과적으로 같은 쓰임
