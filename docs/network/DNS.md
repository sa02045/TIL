DNS(Domain Name System)
컴퓨터의 주소를 찾기위해, 사람이 이해하기 쉬운 도메인 이름과 숫자로 된IP주소를 서로 변환하는 역할을 한다.
DNS 라우팅 방법
한번에 도메인 이름 <-> IP주소를 변환하면 좋겠지만, 세상에는 수많은 도메인이 있기 때문에 이를 관리하기 위해 계층적으로 분리하여 DNS를 관리한다.

Root DNS 서버: 가장 최상위에 위치하며 ICANN(국제인터넷주소관리기구)이 관리한다. 도메인에 따라 다음 DNS 서버로 라우팅한다. www.example.com은 .com을 관리하는 Com DNS 서버로 안내한다.

TLD(최상위 도메인) DNS 서버: TLD(Top-Level-Domain)이라고도 불리는 .org .com등의 일반 최상위 도메인 + .kr등의 국가 코드 최상위 도메인의 IP를 저장하고,example.com 도메인과 연관된 다음 DNS 서버로 안내한다.

Authoritative DNS Server : 도메인과 IP주소를 변환해주는 서버로 최종 찾고자하는 도메인의 IP주소를 알려준다.

Recursive DNS Server : 위 사진에서는 DNS resolver

찾고자 하는 도메인에 대한 정보를 캐싱한다.
위의 DNS Server가 안내하는 정보에 따라 라우팅을 하는 역할
