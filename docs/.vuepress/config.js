var CONST = require("./const.js");

module.exports = {
  title: "물처럼 흐르는 기억을 바위에 새기듯 글로 쓰자",
  description: "Today I Learned",
  base: "/til/",
  themeConfig: {
    sidebar: [
      {
        title: "알고리즘",
        children: CONST.AlogoList,
      },
      {
        title: "Express",
        children: CONST.ExpressList,
      },
      {
        title: "HTTP",
        children: CONST.HttpList,
      },
      {
        title: "login",
        children: CONST.loginList,
      },
      {
        title: "NodeJS",
        children: CONST.NodeJsList,
      },
      {
        title: "React",
        children: CONST.ReactList,
      },
      {
        title: "Webpack",
        children: CONST.webpackList,
      },
    ],
  },
};
