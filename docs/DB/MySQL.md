### SQL문 정리

1. 테이블의 COLUMN 조회

```sql
SHOW FULL COLUMNS FROM 테이블명;
```

2. 테이블에 레코드 추가

```sql
INSERT INTO 테이블이름(필드이름1, 필드이름2, 필드이름3, ...) VALUES (데이터값1, 데이터값2, 데이터값3, ...)
```

# Pool

- DB에 연결된 Connection을 미리 만든 후, POOL에 보관하여 DB가 필요할때마다 Pool을 꺼내 사용하고 Pool에 반환하는 기법
- Connection을 매번 생성하고, 종료할 필요가 없어 DB의 성능을 향상할 수 있음
