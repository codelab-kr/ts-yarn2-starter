# Yarn2 Settings

```bash
$ yarn set version berry

$ yarn -v
4.02

$ yarn init

$ echo nodeLinker: pnp > .yarnrc.yml
nodeLinker: pnp // Add this line!

$ vi package.json
{
  "name": "nodejs-design-patterns",
  "packageManager": "yarn@4.0.2",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist"
  }
}

$ yarn install

$ yarn add --dev typescript @types/node nodemon

```
<br>

# VS Code Settings

```bash
# ZipFS extension 설치 후

$ yarn dlx @yarnpkg/sdks vscode

# Allow
# 또는
# .ts 파일 선택 후 > TypeScript: Select TypeScript Version --> sdk 버전(작업 영역)으로 선택

```
<br>

# Nodemon Settings
```bash
$ vi nodemon.json
{
  "watch": [
      "src",
      ".env"
  ],
  "ext": "js,ts,json",
  "ignore": [
      "src/**/*.spec.ts"  
  ],
  "exec": "ts-node  --transpile-only ./src/index.ts"
}

```

<br>

# TSConfig Settings
```bash
{
  "compilerOptions": {
    "target": "es2017", // 컴파일 버전
    "allowSyntheticDefaultImports": true, // default export가 없는 모듈에서 default imports를 허용
    "experimentalDecorators": true, // decorator 실험적 허용
    "emitDecoratorMetadata": true, // 데코레이터가 있는 선언에 대해 특정 타입의 메타 데이터를 내보내는 실험적인 지원
    "skipLibCheck": true, // 정의 파일 타입 체크 여부
    "moduleResolution": "node", // commonJS -> node 에서 동작
    "module": "commonjs", // import 문법
    "strict": true, // 타입 검사 엄격하게 
    "pretty": true, // error 메시지 예쁘게
    "outDir": "./dist", // 트랜스 파일 (.js) 저장 경로
    "allowJs": true, // js 파일 ts에서 import 허용
    "esModuleInterop": true, // ES6 모듈 사양을 준수하여 CommonJS 모듈을 가져올 수 있게 허용
    "baseUrl": "./", // 절대경로 설정
    "strictNullChecks": false, // null 체크
    "noImplicitAny": false, // any 허용
    "strictBindCallApply": false, // bind, call, apply 허용
    "forceConsistentCasingInFileNames": false, // 파일명 대소문자 구분
    "noFallthroughCasesInSwitch": false, // switch 문에서 break 허용
    "removeComments": true // 주석 제거
    // "incremental": true, // 증분 컴파일
    // "sourceMap": true, // 소스맵 파일 생성 -> .ts가 .js 파일로 트랜스 시 .js.map 생성
    // "declaration": true, // .d.ts 파일 생성
  },
  "include": [
    "./src/**/*" // build 시 포함
  ],
  "exclude": ["node_modules", "dist", "**/*.(test|spec).ts"]
}
```
