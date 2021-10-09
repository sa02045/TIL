원문글 : [res.json() vs res.send() vs res.end() in Express by Tamas Piros](https://tpiros.dev/blog/res-json-vs-res-send-vs-res-end-in-express/)

### 알게된 사실)

---

**_1_**. 서버에서 응답(response)을 보낼 때는 `content-type`을 지정해주어야 한다. 기본값은 `text/html` 이다

**_2_**. res.send(arg) 메서드는 arg인자에 따라서 자동으로 헤더의 `Content-type`이 설정한다

**_3_**. `res.json()`도 결국 res.send()를 호출한다.

Q) `res.send()`와 차이점은???
A1) json형식을 보낼 때 사용된다.
A2) send()메서드를 사용해서 데이터를 보낼 때 사용할 수 없는 몇가지 옵션을 설정해줄 수 있다.

**_4_**. `res.end()` 메서드는 서버에서 데이터를 보내지 않고 종료하기 위한 메서드이다.

- `res.json()`와 `res.send()` 모두 응답을 종료 시켜주기 때문에 두 메서드를 사용하는 경우 `res.end()`를 사용할 필요는 없다.
- 예를들어 응답코드 404를 리턴해줄 때 사용한다.
