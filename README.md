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
