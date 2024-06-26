# 객체지향 프로그래밍과 설계의 5가지 원칙

## SSRP (단일 책임 원칙)

- 하나의 클래스는 하나의 책임만 가져야 한다
- 응집도는 높이고, 결합도 낮추자
- `calculator` 라는 함수보다는 `plus` `minus`로 분리

## OOCP (개방-폐쇄 원칙)

- 소프트웨어 요소는 확장에는 열려 있으나 변경에는 닫혀있어야한다
- 기존의 코드를 변경하지 않으면서 기능을 추가할 수 있도록 구현해야한다
- 캐릭트를 생성하는 객체인 경우, 캐릭터마다 움직임 패턴이 다를경우 패턴구현을 하위클래스에 맡긴다
- 오버라이딩을 통해서 자식클래스에 구현을 맡긴다

## LLSP

- 객체는 하위타입의 인스턴스로 바꿀 수 있다
- 부모 클래스의 인스턴스 대신, 자식 클래스의 인스턴스를 사용해도 상관없다
- 오버라이딩을 피해야한다...??

## IISP (인터페이스 분리 원칙)

- 특정 클라이언트를 위한 인터페이스 여러개가 범용 인터페이스 하나보다 낫다
- 인터페이시의 단일 책임

## DDIP (의존관계 역전 원칙)

- 추상화에 의존해야지, 구체화에 의존해서는 안된다
- 객체지향프로그래밍에서는 객체는 서로 도움을 받게 된다.
- 의존관계를 맺을 때, 변화하기 쉬운 것 보다는 변화하기 어려운 것에 의존하라
