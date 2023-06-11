# 🌟 wanted-pre-onboarding-frontend

2023년 6월 [Wanted pre-onboarding Frontend Internship](https://www.wanted.co.kr/events/pre_ob_fe_10?utm_source=wanted&utm_medium=share) 사전 과제

<br/>
<br/>

## 🍋 프로젝트 소개

회원가입, 로그인을 통해 유저 별 todo list를 생성·수정·삭제 할 수 있는 어플리케이션입니다.

[요구사항 및 서버 디렉토리](https://github.com/walking-sunset/selection-task)

<br/>
<br/>

## 🍋 프로젝트 구조

```
 🗂️ src
├──📁 Axios
│   ├──📄 apis.tsx
│   └──📄 instance.tsx
├──📁 components
│   ├──📄 CreateTodo.tsx
│   ├──📄 ItemTodo.tsx
│   └──📄 EditTodo.tsx
├──📁 hooks
│   ├──📄 useCheckToken.tsx
│   └──📄 useValid.tsx
├──📁 pages
│   ├──📄 SignIn.tsx
│   ├──📄 SignUp.tsx
│   └──📄 Todo.tsx
├──📄 index.tsx
├──📄 App.tsx
├──📄 App.css
└──📄 types.tsx
```

<br/>
<br/>

## 🍋 기능시연 데모 영상

📌 **회원가입·로그인**

<img src="https://user-images.githubusercontent.com/99721472/231049540-c7a9fd5f-341f-443c-abca-e2aeacec1306.gif" alt="유효성검사 및 회원가입 기능" />

✔️ Assignment 1: 회원가입과 로그인 유효성 검사기능

- 이메일 조건: @ 포함
- 비밀번호 조건: 8자 이상
- 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여
  <br/>

✔️ Assignment 2: 회원가입 기능

- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행
- 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동

<br/>
<br/>

<img src="https://user-images.githubusercontent.com/99721472/231049574-2ca70330-420f-4cd5-89b9-a4a191e36328.gif" alt="유효성검사 및 회원가입 기능" />

✔️ Assignment 3: 로그인 기능

- 로그인을 진행
- 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동
- 로그인이 성공했을 시 응답받은 JWT는 로컬 스토리지에 저장

<br/>
<br/>
<div><img src="https://user-images.githubusercontent.com/99721472/231049589-ab5135ed-d8c1-4631-b3c0-07fc9814de91.gif" width="380px" /> <img src="https://user-images.githubusercontent.com/99721472/231049596-5dbcdd43-eb22-4d3f-beeb-f13cc54b9748.gif" width="380px" ></div>
✔️ Assignment 4: 로그인 여부에 따른 리다이렉트 처리

- 로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트
- 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트

<br/>
<br/>

📌 **TODO LIST**

<img src="https://user-images.githubusercontent.com/99721472/231049614-e592afda-a989-4481-b18d-ad36d8c633ca.gif" alt="TODO LIST 기능 시연"/>
✔️ Assignment 5: /todo경로에 투두 리스트

- TODO의 내용과 완료 여부가 표시

✔️ Assignment 6: 새로운 TODO를 입력

- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가
- TODO를 추가 한 뒤 새로고침을 해도 정상작동

✔️ Assignment 7: TODO의 체크박스를 통해 완료 여부 수정

✔️ Assignment 8: TODO 수정버튼과 삭제 버튼

✔️ Assignment 9: TODO 삭제 기능

✔️ Assignment 10: 수정 기능

- TODO 우측의 수정 버튼을 누르면 수정모드가 활성화
- 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경
- 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼 표시
- 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트
- 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화

<br/>
<br/>

## 🍋 사용 stacks

<img src="https://img.shields.io/badge/Typescript-02569B?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react-blue?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/prettier-1F313A?style=for-the-badge&logo=prettier&logoColor=white"> <br/>
<img src="https://img.shields.io/badge/axios-purple?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/emotion-hotpink?style=for-the-badge&logo=emotion&logoColor=white"> <img src="https://img.shields.io/badge/eslint-7C7CEA?style=for-the-badge&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<br/>
<br/>

## 🍋 프로젝트의 실행 방법

설치하기 위해서는 다음 사항이 필요합니다.

- Node.js v16.15.0 이상

아래 명령어를 입력하여 의존성을 설치 합니다.

`npm install`

아래 명령어를 입력하여 어플리케이션을 실행 합니다.

`npm start`

회원가입, 로그인 후 todo list 기능을 이용합니다.
