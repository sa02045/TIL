1. strict

- 타입 검사 옵션

2. module

- amd방식, commonjs 방식

3. moduleResolution

4. target

- 트랜스파일링할 대상의 자바스크립트 버전
- 타입스크립트 코드가 해당 버전의 자바스크립트로 변환됨
- 대부분 ES5로

5. outDir

- baseURL 기준으로 dist 폴더를 만드는 루트

6. esModuleInterop

```js
import * as React from 'react;
```

exModuleInterop을 true로 하면

```js
import React from 'react;
```

7. include exclude

include `src/*/`은 src 디렉토리와 src의 하위폴더를 컴파일 대상으로 한다는 뜻
exclude는 컴파일 대상에서 제외한다는 것
