(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{410:function(e,t,_){"use strict";_.r(t);var v=_(44),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h3",{attrs:{id:"목차"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#목차"}},[e._v("#")]),e._v(" 목차")]),e._v(" "),_("ol",[_("li",[e._v("웹 소켓이란")]),e._v(" "),_("li",[e._v("웹 소켓의 특징")]),e._v(" "),_("li",[e._v("웹 소켓 이전의 실시간 통신")]),e._v(" "),_("li",[e._v("웹 소켓 동작 방법")]),e._v(" "),_("li",[e._v("웹 소켓 프로토콜의 특징")]),e._v(" "),_("li",[e._v("웹 소켓 특이점")])]),e._v(" "),_("h2",{attrs:{id:"_1-웹-소켓이란"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-웹-소켓이란"}},[e._v("#")]),e._v(" 1. 웹 소켓이란")]),e._v(" "),_("ul",[_("li",[e._v("표준 프로토콜 중 하나")]),e._v(" "),_("li",[e._v("HTML5에서 많이 사용된다")]),e._v(" "),_("li",[e._v("웹 소켓 프로토콜을 지원한다")]),e._v(" "),_("li",[e._v("두 프로그램 간의 메시지를 교환하기 위한 통신 방법")])]),e._v(" "),_("h2",{attrs:{id:"_2-웹-소켓의-특징"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-웹-소켓의-특징"}},[e._v("#")]),e._v(" 2. 웹 소켓의 특징")]),e._v(" "),_("ol",[_("li")]),e._v(" "),_("p",[e._v("| 양 방향 통신")]),e._v(" "),_("ul",[_("li",[e._v("송수신을 동시에 처리할 수 있음")]),e._v(" "),_("li",[e._v("서버와 클라이언트가 원할 때 데이터를 주고 받을 수 있음")]),e._v(" "),_("li",[e._v("HTTP 통신은 클라이언트의 request 서버의 response하는 단방향 통신")])]),e._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[e._v("실시간 네트워킹")])]),e._v(" "),_("ul",[_("li",[e._v("웹에서 연속된 데이터를 빠르게 노출")]),e._v(" "),_("li",[e._v("채팅, 주식, 비디오")]),e._v(" "),_("li",[e._v("단말기에 빠르게 데이터를 교환")])]),e._v(" "),_("h2",{attrs:{id:"_3-웹-소켓-이전의-비슷한-기술"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-웹-소켓-이전의-비슷한-기술"}},[e._v("#")]),e._v(" 3. 웹 소켓 이전의 비슷한 기술")]),e._v(" "),_("ol",[_("li",[e._v("polling")])]),e._v(" "),_("ul",[_("li",[_("p",[e._v("서버로 일정 주기로 요청하는 통신")])]),e._v(" "),_("li",[_("p",[e._v("real-time 통신에서는 언제 통신이 발생할지 예측이 불가능 해짐")])]),e._v(" "),_("li",[_("p",[e._v("불필요한 reqeust와 connectin이 발생")])]),e._v(" "),_("li",[_("p",[e._v("애매한 실시간성")])])]),e._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("p",[e._v("Long Polling")])]),e._v(" "),_("li",[_("p",[e._v("Streaming")])])]),e._v(" "),_("ul",[_("li",[e._v("클라이언트는 서버에 요청을 보내고, 끊기지 않은 연결상태에서 끊임없이 데이터를 수신함")]),e._v(" "),_("li",[e._v("클라이언트에서 서버로의 데이터 송신이 어려움")])]),e._v(" "),_("h2",{attrs:{id:"_3-웹-소켓의-동작방식-핸드쉐이킹"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-웹-소켓의-동작방식-핸드쉐이킹"}},[e._v("#")]),e._v(" 3. 웹 소켓의 동작방식 - 핸드쉐이킹")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("HTTP, HTTPS 프로토콜을 사용")])]),e._v(" "),_("li",[_("p",[e._v("HTTP 헤더의 Upgrade헤더 필드를")])])]),e._v(" "),_("h3",{attrs:{id:"request"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" Request")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("Upgrade : websocket;\nConnection : Upgrade\nSec-WebSocket-Key : 시크릿키\nSec-WebSocket-Protocol : chat, superchat\n")])])]),_("ul",[_("li",[_("p",[_("code",[e._v("Upgrade")]),e._v(" 헤더필드를 websocket으로 명시, "),_("code",[e._v("Connection")]),e._v(" 헤더필드를 Upgrade로 명시해주어야함")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("Sec-Webosocket-Key")]),e._v("로 서버-클라이언트의 신원을 인증함")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("Sec-WebSocket-Protocol")]),e._v(" : 클라이언트가 요청하는 여러 서브 프로토콜을 의미함")]),e._v(" "),_("ul",[_("li",[e._v("공백문자로 구분되어, 순서에 따라 우선권을 부여")]),e._v(" "),_("li",[e._v("서버에서 여러 프로토콜, 프로토콜 버전을 나누어 서비스할 경우 필요한 정보임")])])])]),e._v(" "),_("h3",{attrs:{id:"response"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("Upgrade : websocket\nConnection : Upgrade\nSec-WebSocket-Accept : 시크릿 키\n")])])]),_("ul",[_("li",[_("code",[e._v("Sec-WebSocket-Accept")]),e._v(" : 클라이언트로부터 받은 시크릿 키를 계산한 값")])]),e._v(" "),_("h3",{attrs:{id:"핸드쉐이킹이-완료된-이후-프로토콜이-ws로-변경됨"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#핸드쉐이킹이-완료된-이후-프로토콜이-ws로-변경됨"}},[e._v("#")]),e._v(" 핸드쉐이킹이 완료된 이후, 프로토콜이 "),_("code",[e._v("ws")]),e._v("로 변경됨")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("wws(443)")]),e._v(" 데이터보안을 위한 SSL을 적용한 프로토콜도 사용")])]),e._v(" "),_("li",[_("p",[e._v("Message : 여러 frame에 모여서 구성하난 하나의 논리적 메시지 단위")])]),e._v(" "),_("li",[_("p",[e._v("frame : communication에서 가장 작은 단위의 데이터, 작은 헤더 + payload로 구성됨")])]),e._v(" "),_("li",[_("p",[e._v("웹소켓에서 사용되는 데이터는 UTF8 인코딩")])])]),e._v(" "),_("h2",{attrs:{id:"_5-웹-소켓-프로토콜의-특징"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-웹-소켓-프로토콜의-특징"}},[e._v("#")]),e._v(" 5. 웹 소켓 프로토콜의 특징")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("최초 접속에서만 http 프로토콜 위에서 handshaking을 하기 때문에 http header을 사용한다")])]),e._v(" "),_("li",[_("p",[e._v("웹소켓을 위한 별도포트는 없으며, 기존포트(http-80, https-443)을 사용함")])]),e._v(" "),_("li",[_("p",[e._v("frame이라는 논리적 단위로 송수신함. 명령,헤더,바디로 구상된다.")])]),e._v(" "),_("li",[_("p",[e._v("메시지에 포함될 수 있는 교환 가능한 메시지는 텍스트 + 바이너리")])])]),e._v(" "),_("h2",{attrs:{id:"_6-웹-소켓의-한계"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-웹-소켓의-한계"}},[e._v("#")]),e._v(" 6. 웹 소켓의 한계")]),e._v(" "),_("p",[e._v("웹 소켓 -> HTML5")]),e._v(" "),_("ul",[_("li",[e._v("HTML5이전에 구현된 서비스에서는???")]),e._v(" "),_("li",[e._v("socket.io와 SocketJS는 HTML5이전의 기술로 구현된 서비스에서 웹 소켓처럼 사용할 수 있도록 도와주는 기술임")])]),e._v(" "),_("ol",[_("li",[_("p",[e._v("Websocket은 문자열들을 주고받을 수 있게 해줄 뿐, 그이상의 일은 하지 않음")])]),e._v(" "),_("li",[_("p",[e._v("주고받는 문자열의 해독은 온전히 어플리케이션에게 맡김")])]),e._v(" "),_("li",[_("p",[e._v("WebSocket의 형식은 정해져 있지 않기 때문에, 어플리케이션에서 쉽게 해석하기가 어려움")])]),e._v(" "),_("li",[_("p",[e._v("WebSocket방식은 sub-protocols을 사용해서 주고받는 메시지의 형태를 약속하는 경우가 많다.")])])]),e._v(" "),_("h3",{attrs:{id:"서브-포로토콜-stomp-simple-text-oriented-message-protocol"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#서브-포로토콜-stomp-simple-text-oriented-message-protocol"}},[e._v("#")]),e._v(" 서브 포로토콜 STOMP (Simple Text Oriented Message Protocol)")]),e._v(" "),_("ul",[_("li",[e._v("STOMP는 채팅 통신을 하기 위한 형식을 정의함")]),e._v(" "),_("li",[e._v("HTTP와 유사하게 간단히 정의되어 해석하기 편한 프로토콜")])])])}),[],!1,null,null,null);t.default=a.exports}}]);