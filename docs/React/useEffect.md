1. useEffect의 dependancy가

```js
useEffect(() => {
  performSideEffect();
}, []);

useEffect(() => {
  performSideEffect();
});
```

- 빈 배열
- 아무 것도 없을 때
  차이점이 있을 까?

A) 답변 [스택오버플로우](https://stackoverflow.com/questions/58579426/in-useeffect-whats-the-difference-between-providing-no-dependency-array-and-an)
