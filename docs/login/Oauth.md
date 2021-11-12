# AccessToken을 발급하기 위해

# 용어 정의

1. Resource Owner : 일반적인 사용자

- 일반 유저

2. Client : 서비스 제공자

- OAuth로 로그인하려는 서비스 사이트

3. Authorization Sever : 인증을 담당하는 서버

- 구글,페이스북의 인증을 담당하는 서버

4. Resource Server : 리소스를 가지고 있는, 클라이언트에게 제공해주는 서버

- 구글, 페이스북, 카카오, 깃허브

# 등록

1. Client가 Resource Server에 허가를 받아야함

- Client ID (노출되도 됨)
- Client Secret (노출되면 안됨!)
- Authrozied redirect URiS
  을 가짐

2. Client는 Resource Server의 일부 기능이 필요한 경우,

- Resource Owner가 로그인 한 후, authorization code를 저장함
- authorization code와 함께 Client에 보냄
-

# 인증 방법 4가지

1. authorization code

2. implicit

3. resource owner password-credentials

4. client credentials
