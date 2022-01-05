- HTTP = HyperText Transfer Protocol Secure
- HTTPS의 `S`는 Secure Socket을 뜻한다.

# HTTP

## 문제점

- HTTP는 내용아 `암호화` 되지 않아 중간에서 탈취될 위험이 있다.

# HTTPS

## HTTPS 암호화 방법

- SSL(Secure Socket Layer) 또는 TLS 프로토콜을 통해 세션 데이터를 암호화 한다.

  - TLS는 SSL 3.0을 기반으로 만들어진 프로토콜로서 좀 더 안전하다. 업그레이드 버전이라고 생각하자.

- HTTPS의 TCP/IP 기본 포트번호는 443이다.
  - HTTP의 기본 포트번호는 80이다.

### SSL

- 신뢰할 수 있는 제 3자가 발행한 인증서가 있다.
- 이 인증서를 통해 발급한 `암호화 키` 를 가지고 공개키 방식으로 클라이언트와 서버가 통신하는 규약이다.

### HTTPS의 단점

- 암호화로 인해 HTTP에 비해 속도가 느리다.
- 그래서 민감한 데이터를 전송할 때만 HTTPS를 쓰고, 나머지는 HTTP를 쓰기도 한다.
