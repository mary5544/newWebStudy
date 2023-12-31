/*
  >> 비교연산자
  ->
    [ < <= > >= == != !== === ]

    > 유니코드 비교
    'A' > 'a' // false 이유는 유니코드 번호상 'a'가 더 크다

    > == === 차이점
    - ==, !=은 타입을 구분하지 않는다. (1 == '1' true)
    - ===, !==은 타입을 구분한다. (1==='1' false)
    * ==을 사용하면 나중에 심각한 버그를 발생시킬수 있으므로 삼중부등호를 사용하자
  <-
*/