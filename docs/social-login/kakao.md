# 카카오 소셜 로그인 정리

## REST API

1. 인가코드를 받고
2. 토큰을 요청합니다

> 두 단계로 동작합니다. 토큰을 요청할 때는 인가코드를 사용합니다

- 인가코드 요총 단계에서 클라이언트에 카카오계정 정보 또는 카카오톡 을 통해 사용자를 인증하는 과정을 거침

## 인가코드 받기