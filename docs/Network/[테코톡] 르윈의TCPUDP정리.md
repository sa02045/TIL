# Transport Layer

> End Point간의 신뢰성 있는 데이터 전송을 담당하는 기술로

## 신뢰성

: 데이터를 순차적, 안정적으로 전달

## 전송

: 포트번호에 해당해난 프로세스에 데이터를 전달

## 전송계층이 없다면?

1. 데이터의 순차 전송이 원할하지 않음 : 데이터의 순서
2. 흐름 문제
   - 원인 : 송수진간의 데이터 처리 속도 차이
   - 수신자가 처리할 수 있는 데이터한계 때문에 데이터의 누락
3. 혼잡 문제(Congestion)
   - 원인 : 네트워크의 데이터 처리속도(라우터)

결과 : 데이터의 손실 발생

## TCP (Transmission Control Protocol)

- 신뢰성있게 데이터 통신을 가능하게 해주는 프로토콜
- Connection (양방향 통신) - 3-way-handshake
- 데이터의 순차 전송을 보장
- Flow Control
- Congestion Control
- 오류감지

## 세그먼트 (Segment) - TCP 프로토콜의 PDU

- 데이터를 잘라서 : TCP Header + data 단위로 만듬

## TCP Header

### 플래그 비트

- ACK : 수신자가 제어를 할 때 사용하는 비트
- SYN : TCP가 connection을 연결할 때 사용하는 플래그
- FIN : 연결을 종료할 때 사용하는 플래그,비트

## TCP 3-way handshake

1. 클라이언트 : SYN 비트를 1로 설정해 패킷 송신
2. 서버 : SYN , ACK비트를 1로 설정해 패킷 송신
3. 클라이언트 : ACK 비트를 1로 설정해 패킷 송신

## TCP의 데이터 전송 방식

1. 클라리언트가 패킷 송신
2. 서버에서 ACK 송신
3. ACK를 수신하지 못하면 재전송

## 4-way handshake (Connection close)

1. 데이터를 전부 송신한 클라이언트가 FIN 송신
2. 서버가 ACK 송신
3. 서버가 남은 패킷 송신(일정 시간 대기)
4. 서버가 FIN 송신
5. 클라으언트가 ACK 송신

# TCP의 문제점

- 매번 Connection을 연겨랳서 시간 손실 발생 (3-way-handshake)
- 패킷을 조금만 손실해도 재전송

# UDP

- TCP보다 신뢰성이 떨어지진 속도가 빠른 프로토콜
- Connectionless (3-way-handshake X)
- Error Detection
- ex) 영상 스트리밍

## UDP Datagram

UDP header + Data
TCP와의 차이점 : 데이터를 쪼개지 않고 보냄

## UDP Header

- checksum

## UDP의 데이터 전송 방식

1. 클라이언트가 패킷 송신
