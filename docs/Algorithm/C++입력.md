# C++ 입력정리

1.

입력

```
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1
```

다음과 같이 이중 for문으로 배열요소를 직접 지정하여 입력 받을 수 있다

````c
//bad
for(int i=1; i<=N; i++){
    for(int j=1 j<=M; j++){
        int num;
        cin >> num;
        adj[i][j] = num;
    }
}

```c
//good
for(int i=1; i<=N; i++){
    for(int j=1 j<=M; j++){
        cin >> adj[i][j];
    }
}
````
