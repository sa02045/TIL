```js
var player = {
  say: function () {
    conosle.log(this); // 1번 this

    function say2() {
      conosle.log(this); // 2번 this
    }
    say2();
  },
};

player.say();
```

- 1번 this는 player를
- 2번 this는 window를 가르킨다

# 알 수 있는 사실

- 객체의 메소드로 호출된 함수의 this는 객체를 가르키지만
- 객체의 메소드 내부에 정의되었지라도 함수의 this는 전역객체를 가르킨다

## JS 내부 함수의 this는 전역객체에 바인딩된다

# 생성자 함수 호출

자바스크립트에서는 기존함수에 `new` 연산자를 붙여 호출하면 해당 함수는 생성자 함수로 작동한다

- 원래 생성자 함수로 의도했던 함수말고
- 일반함수도 마찬가지이다.
- 생성자 함수명의 첫문자를 대문자로 만들어 구분한다

## new 연산자는...

new 연산자를 사용해서 생성자 함수를 호출하면

1. 생성자 함수의 코드가 실행되기 전, 빈 객체(A)를 생성한다.

   - 생성자 함수의 this는 객체 (A)를 가리킨다.
   - 생성된 빈 객체 (A)는 생성자 함수의 `prototype` 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정한다.

2. this를 통한 프로퍼티 생성

   - this를 통해 생성한 프로퍼티와 메소드가 생성된 객체(A)에 추가된다.

3. 생성된 객체 반환
   - 반환문이 없는경우) this에 바인딩 된 객체 (A)가 반환된다.
   - 반환문이 있는경우) 명시적으로 다른 객체를 반환하는 경우, this가 아닌 다른 객체게 반환된다.

## 만약 new 연산자 없이 함수를 호출하면

- 생성자 함수로 동작하는것이 아닌, 일반 함수로서 동작된다.

```js
function Foo() {
  this.value = 1;
}

var bar = Foo();
conolse.log(bar); //undefined
console.log(window.value); //
```

# apply, call, bind 따로 작성
