# Redis

Remote dictionary server

- 외부의 딕셔너리 자료구조를 사용하는 DB서버!
- Database이다!

## Cache?

나중의 요청에 대한 결과를 미리 저장했다가 빠르게 사용하는것

## 메모리 계층구조

낮을수록 빠르고 비싸다

1. CPU Register
2. CPU Cache Memory(SRAM)
3. Main Memory(DRAM) - 휘발성
4. Storage : HDD SSD - 비휘발성

Redis --> Main Memory에 자주 접근하고 덜 바뀌는 데이터를 저장하자

- In-memoty Database

## 자료구조

### 콜렉션 자료구조

### Race Condition

: 여러 쓰레드가 경합하면서 Context Switching에 따라 원하지 않는 결과를 불러일으킴

### Redis는 Single Thread

Redis 자료구조는 Atomic Critical Section에 대한 동기화를 제공
서로다른 Transaction Read/Write를 동기화

## Redis는 어디에서 쓰나요?

- 여러 서버에서 같은 데이터를 공유할 때
- Atomic한 자료구조 or Cache를 이용할 때

# 주의해야할 점

## Single Thread이기 때문에 시간복잡도를 고려해야한다

## in-memory 특성상 메모리 파편화, 가상화 지식이 필요함

## Single Thread

- 비동기
- IO bound Process
- Context Swtiching 효율
- 개발의 단순함

## O(N)의 시간복잡도는 주의

- getAll같은 전체데이터를 가져오는 시간복잡도는 주의해야한다

## 메모리 관리

- 메모리 파편화
- 가상메모리 Swap
-

### 메모리 파편화

- 메모리를 할당,해제하는 단계에서 군데 군데 비게되는 현상이 발생

- Redis를 사용할때는 적당히, 여유있게 사용해야함

- Replication -Fork

### 가상메모리 Swap

- 메모리에 일부만 올려 프로세스를 실행, 필요할 때만 가져옴
- latency가 발생함

### Replication

- 데이터 복사 기능을 제공

- Fork 프로세스를 복제해서 메모리에서 사용
- 만약 메모리가 가득차있다면 복제본이 생기지 않고 서버가 죽는 현상이 발생
- 메모리를 여유있게 사용해야 한다
