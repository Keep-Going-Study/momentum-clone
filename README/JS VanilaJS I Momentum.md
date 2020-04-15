# [JS] VanilaJS I - Momentum

Created: Apr 15, 2020 1:52 PM  
Created By: Hyeon Soo Choi  
Language: JavaScript  
Last Edited By: Hyeon Soo Choi  
Last Edited Time: Apr 15, 2020 5:24 PM  
Study at: Nomad Coder  

## 1. Required Knowledge and Skills

> 프로젝트에 필요한 사전 지식과 내가 몰랐던 이론과 팁

---

### `const` 로 선언한 객체에 대하여

`const` 로 선언된 객체더라도 그 안의 프로퍼티는 수정가능. 
객체 자체는 수정 불가능.

```javascript
    const person = {
      name: ‘Choi’,
      age: 23
    }

    console.log(person.name);	// Choi

    person.name = ‘Lee’;

    console.log(person.name);	// Lee 로 바뀜

    person = {    // 이렇게 객체 자체는 수정불가
      name : ‘Park’,
      age: 24
    }
    
```

---

### 템플릿리터럴 : 문자열 세련되게 다루기 ( 백틱 (`) 사용 )

`(백틱) 을 사용하면 문자열을 좀 더 편하게 다룰 수 있다.
‘+’ 기호를 사용하지 않고 변수를 문자열 안에서 이용할 수 있다.

```javascript
    let name = “choi”;
    let age = 23;
    
    let strings = `Hi ${name}! You are ${age} years old! `;	
    // Hi choi! You are 23 years old!
```
---

### `console.dir` 사용

DOM 객체의 프로퍼티와 메서드 세부정보를 볼 수 있다.

---

### `Element.classList` (클래스 제어하기 )

JS 파일에서 html 문서를 조작할 때( 특히 색이나 폰트 크기 등등 ), 스타일 값 자체를 사용하는 것 (ex . ‘#ffffff’ )보다는 CSS 파일에서 클래스를 만들어서 JS 에서는 클래스로만 조작하는 것이 낫다.

클래스 조작을 할 때 유용한 프로퍼티가 `Element.classList` 이다.

 [메서드 참고](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)

예시

1. 틀린 건 아니지만 권장까지는 안하는 방식  

```javascript
const title = document.querySelector(“#title”);
function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    // If the color is same as the initial one
    title.style.color = OTHER_COLOR;
  } 
else {
    // If the color has changed,
    // we make it into the initial one again
    title.style.color = BASE_COLOR;
  }
```

2. 클래스를 조작하긴 하지만 코드낭비가 있는 방식 (add / remove 메서드 사용)

  ```javascript
    const title = document.querySelector(“#title”);
      const CLICKED_CLASS = “clicked”; // 클래스 이름으로 쓰일 문자열

    	function handleClick() {
      const hasClass = title.classList.contains(CLIKED_CLASS); 
    // title 에 CLIKED_CLASS 가 있는지 없는지 확인
      if (!hasClass) {
        // If the color is same as the initial one
        title.classList.add(CLICKED_CLASS);
      } 
      else {
        // If the color has changed,
        // we make it into the initial one again
         title.classList.remove(CLICKED_CLASS);
      }
  ```

 3. #2 에서 더 발전한 방식 ( toggle 메서드 사용 )

```javascript
    function handleClick(){
    			title.classList.toggle(CLICKED_CLASS);
        }
```

---

### `setTimeout` VS `setInterval`

- `setTimeout(function, time)` : 함수가 한 번 실행된다.

    `clearTimeout(SETINTERVAL_NAME);` 으로 종료

- `setInterval(function, time)` : 함수가 정한 시간 주기마다 반복 실행된다.

    `clearInterval(SETINTERVAL_NAME);` 으로 종료

 `setInterval` 은 실행 중에 또 다른 `setInterval` 이 호출되면 기존 `setInterval` 은 종료된다. `setTimeout` 은 다른 `setTimeout` 이 호출되어도 기존 함수에 영향 x)

---

### `forEach` 반복문 ( Array,Map,Set 객체에서 사용가능 )

배열의 요소들을 반복하여 작업을 수행할 수 있다.

  
    arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
  

EX)


  ```javascript
    var arr = ['가','나','다','라']; 
    
    arr.forEach( function(item,index,arr2){ 
    console.log(item,index,arr2[index+1]); 
    }
    );
    //첫 번째 인수는 배열의 각각의 item 
    //두 번째 인수는 배열의 index
    //세 번째 인수는 forEach() 를 호출한 배열 그자체
  ```

결과

![JS%20VanilaJS%20I%20Momentum.png](JS%20VanilaJS%20I%20Momentum.png)

---

### `filter()` 메서드 (in Array)

배열의 요소들 중 `callback` 함수의 리턴값이 참인 요소들만 모아 새로운 배열을 리턴한다.

    arr.filter(callback(element[, index[, array]])[, thisArg])

`callback` : 각 요소를 시험할 함수. `true`를 리턴하면 새 배열에 해당 요소를 포함, `false`를 리턴하면 버림.

`element` : 처리할 현재 요소

`index`(optional) : 처리할 현재 요소의 인덱스

`array`(optional) : `filter()`를 호출한 배열

[더 많은 내용은 링크 참고](https://bblog.tistory.com/300)

---

### `geolocation` API 사용 : 사용자의 위치정보 파악

[링크 참고](http://dev.youngkyu.kr/31)

[다음 지도 API 이용하기](http://magic.wickedmiso.com/77)

---

### `JSON` (JavaScript Object Notation)

`JSON`은 단순히 데이터를 표시하는 표현 방법(데이터 포맷) 일 뿐이다.

`JSON`자체는 객체가 아니라 텍스트 이다.

- `JSON` 문법

```json
{
  "employees": [
    {
      "name": "Surim",
      "lastName": "Son"
    },
    {
      "name": "Someone",
      "lastName": "Huh"
    },
    {
      "name": "Someone else",
      "lastName": "Kim"
    } 
  ]
}
```

  `JSON` 형식은 자바스크립트 객체와 마찬가지로 `KEY` 와 `VALUE` 가 존재할 수 있으며,

  `KEY` 와 `VALUE` 는 항상 **쌍따옴표**를 이용하여 표기한다.

  `JSON`형식에서는 `null`, `number`, `string`, `array`, `object`, `boolean`을 사용할 수 있다.    

- **JSON 텍스트** 와 **JavaScript 객체** 끼리의 변환

    1. `JSON.parse` ( JSON 형식 텍스트 )

        : JSON 형식 텍스트 를 자바스크립트 객체로 변환

    2.  `JSON.stringify` ( 자바스크립트 객체 )

        : 자바스크립트 객체를 JSON 형식 텍스트로 변환

        ```javascript
        var jsonText = '{ "name": "Someone else", "lastName": "Kim" }';  // JSON 형식의 문자열
        var realObject = JSON.parse(jsonText);
        var jsonText2 = JSON.stringify(realObject);
        
        console.log(realObject);
        console.log(jsonText2);
        ```

        ![JS%20VanilaJS%20I%20Momentum%201.png](JS%20VanilaJS%20I%20Momentum%201.png)

         console.log 결과창

     [더 많은 내용은 링크 참고](https://velog.io/@surim014/JSON%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)