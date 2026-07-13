# toham_frontend

토함산워케이션 프론트엔드 (Vue 3 + Vite)

## 폴더 구조

```
src/
  api/         API 호출 모듈 (도메인별 파일 분리)
  assets/css/  reset.css, basic.css(공통 유틸), style.css(사이트 스타일)
  components/  공용 컴포넌트
  layout/      Header, Footer, Layout(라우터 뷰 감싸는 레이아웃)
  utils/       공용 유틸 함수
  views/       페이지 컴포넌트 (섹션별 하위 폴더로 구성)
  router.js    라우터 설정
  main.js      앱 엔트리
```

## 사용법

```sh
npm install
npm run dev
npm run build
npm run lint
npm run format
```
