const CONST = require("./const.js")

module.exports = {
  title: "물처럼 흐르는 기억을 바위에 새기듯 글로 쓰자",
  description: "Today I Learned",
  base: "/til/",
  themeConfig: {
    sidebar: [
      {
        title: "Javascript",
        children: CONST.JavaScriptList,
      },
      {
        title: "HTML",
      },
      {
        title: "CSS",
      },
      {
        title: "React",
      },
      {
        title: "HTTP",
      },
      {
        title: "Database",
      },
      {
        title: "MongoDB",
      },
    ],
    nav: [
      {
        text: "GitHub",
        link: "",
      },
      {
        text: "Blog",
        link: "",
      },
    ],
  },
}
