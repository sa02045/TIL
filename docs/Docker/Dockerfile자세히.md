# FROM

> FROM은 어떤 이미지를 기반으로 생성할지 설정합니다
> FROM은 반드시 설정해야 합니다

```
FROM 이미지 or 이미지:태그
```

# MAINTAINER

> 이미지를 생성한 사람의 정보를 설정합니다. 형식은 자유

```
MAINTAINER hong,gildong <sa02045@naver.com>
```

# RUN

> FROM에서 설정한 이미지 위에서 스크립트,명령을 실행합니다. RUN으로 실행한 결과가 새 이미지로 생성되고, 실행 내역은 이미지의 히스토리에 기록됨

> RUN 명령으로 쉘 스크립트 구문을 사용할 수 있음. /bin/sh 실행파일을 사용하며 /bin/sh 실행파일이 없으면 사용할 수 없음

```
RUN apt-get install -y nginx
RUN echo "hello docker" > /tmp/hello
```

# CM

> 컨테이너가 시작되었을 때 스크립트를 실행합니다
> docker run, docker start로 컨테이나가 시작할 떄 실행됨
> Dockerfile에서 딱 한번만 사용할 수 있음
