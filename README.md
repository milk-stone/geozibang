# 2023 대구를 빛내는 SW 해커톤


## 🏢 팀명
거지방

## 🖥 제출 타입 및 주제
E타입 - 우선순위소비를 기록하여 청년들의 건전한 소비습관에 도움을 주는 어플!

## 시연영상
https://youtu.be/7Oyy0l8-kSw


## 서비스 주소

http://52.79.38.250:3000/



## 🖥️ 프로젝트 한 줄 설명
   - 청년 소비 습관 개선 프로젝트 :<br>
      청년소비기록을 개인 데이터화하여 소비습관문제를 해결

<br>

## 🕰️ 개발 기간
* 2023.11.11. ~ 2023.11.12.

### 🧑‍🤝‍🧑 멤버구성
 - 팀장  : 최정식 - Database Script 제작, 통합 및 형상관리, SpringBoot를 활용한 Backend 구현, Docker와 AWS를 활용한 서버 배포
 - 팀원1 : 박성윤 - 데이터 통신 관리, Docker와 aws를 활용한 서버 배포
 - 팀원2 : 강혜원 - 메인 페이지 디자인, React를 활용한 Frontend 구현
 - 팀원3 : 유우석 - React를 활용한 Frontend 구현, 통합 및 형상관리



## 📌 주요 기능

### ⚙️ 개발 환경
- **FrontEnd** : <img src= "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" > <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
- **BackEnd** : <img src= "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" > <img src= "https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white"> **jpa**
- **Database** : <img src= "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" >  **rds** 

- **Server** : <img src= "https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"> <img src= "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">
- **Design** : <img src= "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"> <img src= "https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white">
- **IDE** : <img src= "https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white"> <img src= "https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"> <img src= "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"> <img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white">

### 🛠️ 핵심 기능

#### MAIN ARCHITECTURE
<img width="1027" alt="image" src="https://github.com/Geozibang/Frontend/assets/80188977/ce9eef3f-a324-4c9f-934a-8213ae11c24a">

![image](https://github.com/Geozibang/Frontend/assets/80188977/17e21eaf-116a-4d78-a3ff-37182c03644f)

#### 1. **Docker 가상환경와 AWS EC2 Server를 이용한 배포**
   - 프론트 프로젝트와 백 프로젝트를 각각 Docker Image로 변환.
   - 변환된 Image를 Docker Hub를 통해 EC2 Server에 전송.
   - EC2 Server에서 Docker Image를 가동하여 프로젝트 실행.
<br>

![image](https://github.com/Geozibang/Frontend/assets/80188977/c151e420-536b-4f33-a608-7909990b9697)


#### 2. **AWS RDS를 이용한 MYSQL Database 구축**
   - Amazon RDS를 이용하여, Cloud 상에서 Database 구동.
   - Mysql Database를 구축하여,<br>Real-Time Accessibility / Continuous Evolution / Concurrent Sharing / Content Reference 이 가능하게 함.


<br>
<br>
<br>

     
#### 3. **React SPA를 통한 UI UX 개선 및 module css를 통한 DX 개선**
   <img width="718" alt="image" src="https://github.com/Geozibang/Frontend/assets/80188977/99af4289-9a89-44a7-b298-57162b98f0ba">


   - 소비보기 화면
      - 소비우선순위에 따라 소비기록을 계획.
      - 소비내역, 금액을 확인 가능.
        
  <img width="722" alt="image" src="https://github.com/Geozibang/Frontend/assets/80188977/313596b4-46d9-4255-9f63-d79dcc1c5b3c">


   - 달력보기 화면
      - 이미 완료한 소비기록을 확인.
      - 완료한 날짜에 따라 소비기록을 확인.

  <img width="738" alt="image" src="https://github.com/Geozibang/Frontend/assets/80188977/5620f610-7e79-4083-bdb5-9df664149954">


   - 기간별보기 화면
      - 이미 완료한 소비기록을 바탕으로, 과거의 지출 내역 분석.
      - 과거의 지출과 현재의 지출을 비교하여, 현재의 지출 상태 분석.
    

   
