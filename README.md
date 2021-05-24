# typechain

Learning Typescript by making Blockchain with it
</br>

### How to Start?

yarn start: package.json의 prestart인 tsc를 실행후, node index.js를 실행해준다.

`tsc`: index.ts파일에 있는 코드를 컴파일해서 index.js, index.js.map을 생성해준다.
node.js는 TypeScript를 이해하지 못해서 TS를 JS로 컴파일 하는 작업이 필요하다.

### tsconfig.json

```json
"include":["src/**/*"],
"compilerOptions":{
    "outDir": "dist"
```

- 위 코드에 따라 모든 TS는 src로, 모든 컴파일된 파일은 dist로 들어간다.
- `yarn start` 실행시, src에서 변경사항이 있다면 dist파일이 수정된다.

### interface

- interface를 `변수의 타입체크`를 위해 사용된다.
- interface는 **JS로 컴파일 되지 않는다.**(.ts의 interface가 .js에는 존재하지 않는다.)
- .js에 interface를 넣고 싶을때는 `class`를 사용한다.

### class

- public, private : private의 경우, class 내부에서만 변수를 사용할 수 있어 정보를 보호할 수 있다.
- constructor : class가 시작될 대마다 호출 되는 메서드

### Create a New Block

1. 새로운 블록을 만들기 위해서는 해쉬를 계산해야 한다.
2. Hash값을 계산하는 static method을 Block안에 생성한다.(Block 클래스 안에서 항상 사용 가능한 method)
