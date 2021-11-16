## 브랜치란?

> 동일한 소스코드를 기반으로 작업을 할 수 있음

### 브랜치 명령어

1. 브랜치 생성

```
git branch step1
```

2. 브랜치 전환

```
git switch step1
```

3. 브랜치 작업내역을 합치자

step1으로 이동한후 bugFix를 합치기

```
git swtich step1
git merge bugFix
```

4. rebase
   연결을 끊고 커밋뒤에 옮기기

5. HEAD

6. 상대참조

```
git switch HEAD^
```

7. 작업 되돌리기
   git reset HEAD~1

- remote 브랜치에서는 사용하지 않는 방법

# 원격 저장소

## 원격저장소의 브랜치 열기

git fetch upstream wuilder
git pull upstream wilder
git push origin wilder
