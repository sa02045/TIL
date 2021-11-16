(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{400:function(t,s,a){"use strict";a.r(s);var _=a(44),e=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"프로토타입을-사용하는-이유"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로토타입을-사용하는-이유"}},[t._v("#")]),t._v(" 프로토타입을 사용하는 이유")]),t._v(" "),a("h1",{attrs:{id:"wiki-정리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiki-정리"}},[t._v("#")]),t._v(" wiki 정리")]),t._v(" "),a("p",[t._v("프로토타입 기반 프로그래밍?")]),t._v(" "),a("ul",[a("li",[t._v("객체지향 프로그래밍의 한 갈래")]),t._v(" "),a("li",[t._v("클래스 기반 언어에서 상속을 사용하는 것과 다르게, 객체를 "),a("code",[t._v("원형")]),t._v("(프로토타입)으로 하여 "),a("code",[t._v("복제")]),t._v("의 과정을 통해 객체의 동작방식을 다시 사용하는 것")])]),t._v(" "),a("h2",{attrs:{id:"클래스-기반-프로그래밍과의-비교"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#클래스-기반-프로그래밍과의-비교"}},[t._v("#")]),t._v(" 클래스 기반 프로그래밍과의 비교")]),t._v(" "),a("p",[t._v("| 객체")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("클래스")]),t._v(" : 객체의 기본적인 메서드, 속성을 정의")])]),t._v(" "),a("ul",[a("li",[t._v("구조를 정의")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[t._v("인스턴스")]),t._v(" : 사용할 수 있는 객체")])]),t._v(" "),a("p",[t._v("| 객체 생성")]),t._v(" "),a("ol",[a("li",[t._v("클래스")])]),t._v(" "),a("ul",[a("li",[t._v("클래스의 생성자를 이용하여 인스턴스를 생성")]),t._v(" "),a("li",[t._v("결과로 만들어진 인스턴스는 클래스의 설계, 메서드를 따르게 되어있음")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("프로토타입\n새 객체를 만드는 두 가지 방법")])]),t._v(" "),a("ul",[a("li",[t._v("원래 있던 객체를 Clone하는 방법 -> 대부분")]),t._v(" "),a("li",[t._v("새로운 객체를 생성하는 방법")])]),t._v(" "),a("blockquote",[a("p",[t._v("기본적인 프로토타입인 "),a("code",[t._v("Object")]),t._v("를 가짐")])]),t._v(" "),a("h1",{attrs:{id:"mdn-정리-object-prototypes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mdn-정리-object-prototypes"}},[t._v("#")]),t._v(" MDN 정리 Object Prototypes")]),t._v(" "),a("h2",{attrs:{id:"_1-프로토타입-기반-언어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-프로토타입-기반-언어"}},[t._v("#")]),t._v(" 1. 프로토타입 기반 언어")]),t._v(" "),a("p",[t._v("| 모든 객체들이 메소드+속성을 상속받기 위한 탬블릿으로서 프로토타입 객체를 가진다는 의미")]),t._v(" "),a("ul",[a("li",[t._v("해당 프로토타입 객체는 다시 상위 프로토타입 객체를 상속받을 수 있다.")]),t._v(" "),a("li",[t._v("이를 프로토타입 체인이라고 한다")])]),t._v(" "),a("blockquote",[a("p",[t._v("다른 객체에 정의되어 있는 메소드+속성을 사용할 수 있도록 한다.")])]),t._v(" "),a("h2",{attrs:{id:"_2-prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-prototype"}},[t._v("#")]),t._v(" 2. "),a("code",[t._v("prototype")])]),t._v(" "),a("p",[t._v("| 상속되는 메서드+속성은 객체의 생성자의 "),a("code",[t._v("prototyp")]),t._v("이라는 속성에 정의되어 있다")]),t._v(" "),a("h2",{attrs:{id:"_3-프로토타입-객체"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-프로토타입-객체"}},[t._v("#")]),t._v(" 3. 프로토타입 객체")]),t._v(" "),a("p",[t._v("| 프로토타입 객체에서 한 객체의 메소드+속성은 다른 객체로 복사되는 것이 아닙니다")]),t._v(" "),a("ul",[a("li",[t._v("프로토타입 체인을 타며 올라가서 접근할 뿐입니다")])]),t._v(" "),a("h2",{attrs:{id:"_4-프로토타입-객체에-접근"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-프로토타입-객체에-접근"}},[t._v("#")]),t._v(" 4. 프로토타입 객체에 접근")]),t._v(" "),a("p",[t._v("| 공식적으로 프로토타입 객체에 바로 접근하는 방법은 없습니다")]),t._v(" "),a("ul",[a("li",[t._v("JS표준에서는 "),a("code",[t._v("[[prototype]]")]),t._v(" 내부속성으로 정의되어 있습니다.")]),t._v(" "),a("li",[t._v("브라우저차원에서 "),a("code",[t._v("__proto_-")]),t._v("속성을 통해 특정 객체의 프로토타입객체에 접근할 수 있도록 구현되어있습니다")]),t._v(" "),a("li",[t._v("ES2015부터는 Object.getPrototypeOf(obj) 함수를 통해 프로토타입 객체에 바로 접근 할 수 있습니다")])]),t._v(" "),a("h1",{attrs:{id:"프로토타입-prototype-코어스크립트-정리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로토타입-prototype-코어스크립트-정리"}},[t._v("#")]),t._v(" 프로토타입 (ProtoType) - 코어스크립트 정리")]),t._v(" "),a("p",[a("code",[t._v("키워드")])]),t._v(" "),a("p",[a("code",[t._v("Constructor")]),t._v(" "),a("code",[t._v("instance")]),t._v(" "),a("code",[t._v("__proto__")])]),t._v(" "),a("p",[t._v("생성자 함수를 new 연산자와 함께 호출하면\nConstructor에 정의된 내용으로 새로운 인스턴스가 생성\n새로운 인스턴스에는 "),a("code",[t._v("__proto__")]),t._v("라는 property가 자동으로 부여\n"),a("code",[t._v("__proto__")]),t._v(" property에는 Constructor의 prototype이라는 property을 참조")]),t._v(" "),a("p",[t._v("Ex1 )")]),t._v(" "),a("p",[t._v("Person 생성자의 prototype에 getName메서드를 지정")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getName")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Person인스턴스는 "),a("code",[t._v("__proto__")]),t._v(" 프로퍼티를 통해 호출할 수 있음")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" suzi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"suzi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsuzi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//undefined")]),t._v("\n")])])]),a("ol",[a("li",[t._v("undefined가 발생했다는 이유는, 에러가 발생하지 않았다는 점과 같습니다")]),t._v(" "),a("li",[t._v("즉 변수가 호출할 수 있는 함수에 해당하는 것입니다")]),t._v(" "),a("li",[t._v("결과로 getName이 함수라는 것")])]),t._v(" "),a("h3",{attrs:{id:"this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" this")]),t._v(" "),a("p",[t._v("어떤 함수를 '메서드로서' 호출할 때는 메서드명 바로 앞의 객체가 this가 됩니다")]),t._v(" "),a("ul",[a("li",[t._v("예를들어 "),a("code",[t._v("thomas.__proto__.getName()")]),t._v("에서 getName함수 내부에서의 this는 thomas가 아니라 thomas."),a("strong",[t._v("proto")]),t._v("라는 객체가 되는 것입니다")]),t._v(" "),a("li",[t._v("이 객체에는 name프로퍼티가 없으므로 찾고자 하는 식별자가 정의되지 않는 경우 에러가 아닌 undefined를 반환합니다")])]),t._v(" "),a("h3",{attrs:{id:"관건은-this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#관건은-this"}},[t._v("#")]),t._v(" 관건은 this")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("this를 인스턴스로 할 수 있다면?")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("__proto__")]),t._v("를 빼면 this는 instance가 되고, 메서드가 호출되어 원하는 값이 나옵니다")])])]),t._v(" "),a("h3",{attrs:{id:"왜"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#왜"}},[t._v("#")]),t._v(" 왜?")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("__proto__")]),t._v(" 가 생략 가능한 프러퍼티이기 때문, 원래부터 생략가능하기 구조되어있다!")])]),t._v(" "),a("li",[a("p",[t._v("그냥 그런가보다 하는 수밖에 없다!")])])]),t._v(" "),a("h3",{attrs:{id:"그래서"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#그래서"}},[t._v("#")]),t._v(" 그래서?")]),t._v(" "),a("blockquote",[a("p",[t._v("new 연산자로 constructor를 호출하면 instance가 만들어지는데, 이 instance의 생략 가능한 프로퍼티인 "),a("strong",[t._v("proto")]),t._v("는 Constructor의 prototype을 참조한다")])]),t._v(" "),a("blockquote",[a("p",[t._v("생성자 함수의 prototype의 어떤 메서드나 프러퍼티가 있다면, 인스턴스에서도 마치 자신의 것처럼 해당 메서드나 프로퍼티에 접근할 수 있게 됩니다")])]),t._v(" "),a("h1",{attrs:{id:"prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prototype"}},[t._v("#")]),t._v(" "),a("code",[t._v("[[Prototype]]")])]),t._v(" "),a("p",[t._v("| 객체는 "),a("code",[t._v("[[Prototype]]")]),t._v("이라는 은닉 속성을 가짐")]),t._v(" "),a("ul",[a("li",[t._v("자신의 프로토타입이 되는 객체를 가르킨다")]),t._v(" "),a("li",[t._v("프로토타입 체인을 타고 올라가다가, "),a("code",[t._v("null")]),t._v("을 프로토타입으로 가지는 프로토타입 체인의 종점역할을 하는 객체에서 끝나게 된다.")])]),t._v(" "),a("h2",{attrs:{id:"속성-상속"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#속성-상속"}},[t._v("#")]),t._v(" 속성 상속")]),t._v(" "),a("ul",[a("li",[t._v("객체의 어떤 속성에 접근하려고 할 때, 그 객체 자체 속성뿐만 아니라 객체의 프로토타입, 그 프로토타입의 프로토타입등 프로토타입 체인의 종점에 이를 때 까지 속성을 탐색한다")])]),t._v(" "),a("h1",{attrs:{id:"self-check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#self-check"}},[t._v("#")]),t._v(" self check")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("[[Prototype]]")]),t._v(" 이란?")]),t._v(" "),a("li",[a("code",[t._v("__prototype__")]),t._v(" 이란?")]),t._v(" "),a("li",[t._v("프로토타입 체인 이란?")]),t._v(" "),a("li",[t._v("Constructor 프로퍼티란?")])])])}),[],!1,null,null,null);s.default=e.exports}}]);