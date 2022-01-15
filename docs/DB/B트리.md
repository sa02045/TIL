# Binary Search Tree (이진탐색트리)

| 이진탐색과 연결리스트를 결합한 자료구조

- 왼쪽 자식 노드는 부모보다 작고, 오른쪽 자식 노드는 부모보다 크다
- O(logn)의 시간복잡도
  ![](https://blog.kakaocdn.net/dn/lEd87/btqBcwJo1Cl/nCuQqgz9esm8KQghyPo2pk/img.gif)

## BST의 단점

| 데이터가 몰릴 수 있다!

- 단점을 극복해서, 균형을 찾기위해 나온 것이 B Tree

- 데이터의 삽입, 삭제가 일어나도 균형있는 트리 형태를 유지한다

- 최악의 시간복잡도는 O(logN)로 빠르다
- 하나의 노드에 여러 데이터가 존재할 수 있음
- 존재하는 데이터의 홀,짝에 따라 알고리즘이 달라짐

# B Tree (Balanced Tree)

- 이진트리와 마찬가지로 왼쪽자식에는 key보다 작은 값을, 오른쪽 자식에는 key보다 큰 값을 가진다
- 두개이상의 노드를 자식으로 가질 수 있다
-
