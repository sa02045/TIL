(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{392:function(t,s,a){"use strict";a.r(s);var n=a(44),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"함수-정의"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#함수-정의"}},[t._v("#")]),t._v(" 함수 정의")]),t._v(" "),a("ol",[a("li",[t._v("함수 선언문")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("자바스크립트의 함수는 객체 타입 값이다. 값처럼 변수에 할당 할 수 도있고, 프로퍼티의 값이 될 수 도, 배열의 요소가 될 수도 있다.")])]),t._v(" "),a("blockquote",[a("p",[t._v("이처럼 값의 성질을 가지는 객체를 "),a("code",[t._v("일급 객체")]),t._v("라고 하며, 자바스크립트에서 함수는 일급객체이다")])]),t._v(" "),a("p",[t._v("따라서 자바스크립트에서 함수는 변수에 할당할 수 있으며, 이를 함수 표현식이라고 한다.")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("함수 표현식")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("함수 리터럴의 함수 이름은 생략할 수 있다(foo는 생략가능)-> 이를 익명함수라고 한다.")])]),t._v(" "),a("li",[a("p",[t._v("함수를 호출할 때는 함수 이름이 아니라 함수 객체를 가르키는 식별자(add)를 사용해야 한다.")])]),t._v(" "),a("li",[a("p",[t._v("함수 이름(foo)는 함수 몸체 내부에서만 유효한 식별자이다")])])]),t._v(" "),a("h1",{attrs:{id:"함수-호이스팅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#함수-호이스팅"}},[t._v("#")]),t._v(" 함수 호이스팅")]),t._v(" "),a("ol",[a("li",[t._v("함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출할 수 있다.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f add(x,y)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sub")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("이는 선언문으로 정의한 함수와, 표현식으로 정의한 함수가 "),a("code",[t._v("생성시점")]),t._v("이 다르기 때문이다")])]),t._v(" "),a("li",[a("p",[t._v("모든 선언문 처럼, 함수 선언문도 "),a("code",[t._v("런타임")]),t._v(" 이전에 JS엔진에 의해 먼저 실행되고, 함수 객체가 먼저 생성된다.")])]),t._v(" "),a("li",[a("p",[t._v("JS엔진은 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 생성된 함수 객체에 할당한다.")])]),t._v(" "),a("li",[a("p",[t._v("이를 함수 호이스팅이라고 한다.")])]),t._v(" "),a("li",[a("p",[t._v("함수 호이스팅과 변수 호이스팅은 미묘하게 다르다.")])]),t._v(" "),a("li",[a("p",[t._v("둘 선언문은 런타임 이전에 JS엔진에 의해 실행되고, 식별자를 생성하는 점에서 동일하다.")])]),t._v(" "),a("li",[a("p",[t._v("하지만 var 키워드 변수는 undefined로 , 함수 선언문은 함수 객체로 초기화 된다")])]),t._v(" "),a("li",[a("p",[t._v("변수 할당문의 값은 할당문이 실행되는 시점, 런타임에 평가되므로, 함수 표현식의 함수 리터럴도 할당문이 실행되는 시점에 함수 객체가 된다.")])]),t._v(" "),a("li",[a("p",[t._v("즉, 함수 표현식으로 함수를 정의하면, 함수 호이스팅이 아닌 변수 호이스팅이 발생한다.")])])]),t._v(" "),a("h1",{attrs:{id:"인수-확인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#인수-확인"}},[t._v("#")]),t._v(" 인수 확인")]),t._v(" "),a("ol",[a("li",[t._v("JS 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.")]),t._v(" "),a("li",[t._v("JS는 동적타입언어이기 때문에, 매개변수의 타입을 사전에 저장할 수 없다.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);