// 선언부터 export까지가 한 개의 모둘이다.

interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "hyewon",
    age: 20,
    gender: "female"
}

// gender에 붙은 '?'가 gender인자가 optional이라는 것을 말해준다.
// gender에 해당하는 인자가 없어도 에러를 발생시키지 않는다.

// void : return 값이 없음을 명시
// string : return 값이 문자열임을 명시
const sayHi = (person: Human):string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(person));

export {};