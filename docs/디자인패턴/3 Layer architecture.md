# 3 Layer architecture

- 중요한 것은 관심사의 분리!
- Routing 로직과 비지니스 로직을 분리하자

1. 컨트롤러
2. 서비스 레이어
3. 데이터 Access 레이어

# 컨트롤러 안에 비지니스 로직을 두지말자

- 로그인, validation 같은 로직은 미들웨어로 관리하자

# 비지니스 로직을 위해 서비스 레이어를 두자

## 서비스 레이어

- 서비스 레이어는 SOLID 원칙을 지키는 클래스들의 집합
- req, res 오브젝트를 건내받으면 안된다
- 서비스 레이어에는 SQL 쿼리는 존재하면 안된다, Data Access Layer를 두어라!
- statuc code와 같은 HTTP의 Head와 관련된 값들은 return 해서는 안된다

# 예시

```js
route.post(
  "/",
  validators.userSignup, // validation을 위한 미들웨어 분리
  async (req, res, next) => {
    // 라우트 레이어
    const userDTO = req.body;

    // 서비스 레이어를 부르고, 비지니스로직에 대한 추상화
    const { user, company } = await UserService.Signup(userDTO);

    return res.json({ user, company });
  }
);
```

```js

// 서비스 레이어
import UserModel from '../models/user';
import CompanyModel from '../models/company';

export default class UserService() {

  async Signup(user) {
    const userRecord = await UserModel.create(user);
    const companyRecord = await CompanyModel.create(userRecord); // needs userRecord to have the database id
    const salaryRecord = await SalaryModel.create(userRecord, companyRecord); // depends on user and company to be created
    ...whatever
    await EmailService.startSignupSequence(userRecord)
    ...do more stuff
    return { user: userRecord, company: companyRecord };
  }
}
```

# 정리

- Express Routing으로부터 코드를 분리하라
- 서비스레이어에 req,res 오브젝트를 건내지 마라
