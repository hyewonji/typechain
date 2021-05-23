// 선언부터 export까지가 한 개의 모둘이다.

// public, private : private의 경우, class 내부에서만 변수를 사용할 수 있어 정보를 보호할 수 있다.
// constructor : class가 시작될 대마다 호출 되는 메서드
class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const hyewon = new Human("hyewon", 20, "female")

// gender에 붙은 '?'가 gender인자가 optional이라는 것을 말해준다.
// gender에 해당하는 인자가 없어도 에러를 발생시키지 않는다.

// void : return 값이 없음을 명시
// string : return 값이 문자열임을 명시
const sayHi = (person: Human):string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(hyewon));

export {};