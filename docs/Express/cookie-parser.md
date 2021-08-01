# cookie-parser

> Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.

> 요청(req)된 쿠키를 쉽게 추출할 수 있게 도와주는 미들웨어

# cookieParser(secret, options)

- 쿠키를 암호화 하기위해 선택적으로 secret 인자를 넘겨줄 수 있습니다.
