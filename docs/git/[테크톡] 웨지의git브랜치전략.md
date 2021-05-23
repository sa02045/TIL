# git 브랜치 전략이란?

## 브랜치 전략이 없다면?

- 어느 브랜치가 최신인지?
- 급하게 수정할 일이 생겼는게 어떤 브랜치를 기준으로 수정해야하는지?

# 자주 쓰이는 브랜치 전략이

1. git-flow

- 5가지의 브랜치를 이용하는 전략

2. github-flow

## git-flow

> 항상 유지되는 메인브랜치와 역활이 완료되면 사라지는 3개의 브랜치로 구성

1. 메인 브랜치 : 항상 유지

- master : 제품으로 출시될 수 있는 브랜치
- develop : develop 다음 출시 버전을 개발하는 브랜치

2. 보조 브랜치 : merge되면 사라짐

- feature : 기능을 개발하는 브랜치
- release : 이번 출시 버전을 준비하는 브랜치
- hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치

## git-flow 프로세스

1. develop 브랜치로부터 본인이 개발할 기능을 위한 feature 브랜치를 만듬

2. feature브랜치에서 기능을 만들다가 기능이 완성되면 develop 브랜치에 merge

3. dvelop브랜치의 모두 merge됐다면 QA를 위해 release 브랜치를 생성
4. release 브랜치에서 오류가 발생하면, release브랜치 내에서 수정
5. 마침내 QA가 끝나면 배포를 위해 master브랜치로 merge함
6. bugfix가 있었다면 해당 내용을 반영하기 위해 devlop 브랜치에도 merge함
