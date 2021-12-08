# History API

- history.back()
- history.forward()
- history.go()
- history.length

## popstate 이벤트

- 사용자의 세션 기록 탐색으로 인해 현재 활성화된 기록 항목이 바뀔 때 발생

1. history.pushState(), history.replaceState() 메서드에 의해 `엔트리`가 생성

2. popstate 이벤트의 state 속성은 히스토리 엔트리 state 객체의 복사본을 갖게된다

3. history.pushState(), history.replaceState() 자체가 popstate 이벤트 자체를 발생시키는 것은 아님

4. popstate 이벤트는 브라우저의 back 버튼등을 통해서만 발생

## window.onpopstate

- popstate 이벤트가 발생했을 때의 이벤트핸들러

## History.pushState()

- 브라우저의 세션 기록 스택에 상태를 추가합니다.

```js

history.pushState(state, title[, url]);
```

# 코드 설명

- 버튼을 누르면 history.pushState가 실행되어 브라우저의 세션 기록 스택에 상태가 추가되어 렌더링된다

- window.addEventListener("popstate")와 window.onpopstate는 같다

- popstate 이벤트의 state 속성은 히스토리 엔트리 state 객체의 복사본을 갖게되어 다음과 같은 state를 갖게 된다

```js
{
  color: color;
}
```
