바벨 : 자바스크립트의 최신 문법을 -> 낮은 문법으로

- preset-env : 묶음

1. for문을 -> 어떻게 바꾼다
2. sort문을 -> 어떻게 바꾼다등등등...
   을 묶어놓음

- plugin

1.

트랜스파일링하는 도구

- 브라우저와의 호환성을 위해서
- ES6 (ES2015)-> ES5문법으로 변환
- 브라우저가 자바스크립트의 발전속도를 따라가지 못해서 등장

가장 큰 변화가 ES2015에서 일어났음

웹팩 :

- 다수의 의존관계에 있는 모듈들을 하나의 JS파일로 번들하는 도구

# 번들이 필요한 이유

- TCP스펙에 따라 브라우저에서 보낼 수 있는 HTTP Request 요청 숫자를 줄이기 위해서

# SPA와 의존성

- 파일이 많아짐 -> 누가누구를 의존하고 있는건지?

# 벤더 prefix

--webkit

- 자동으로 붙여주는 도구가 있음.

# 현업에서는 babel과 webpack을 직접 설정할까?

webpack

- task runner
- module bundler

module: 각 모듈별로 적용할 것들
plugins: 번들한 이후 후행해서 할 동작들

배포용 -> 최적화, minify
개발용 -> 디버깅(source map)