# BRAND ENGINE V11.2

## 핵심 목표
V11.1의 카테고리 Reasoning을 유지하면서 같은 카테고리 안에서도 제품마다 다른 구매 기준·스토리·카피가 나오도록 확장했습니다.

## 추가 기능
- Product Reasoning Profile
  - 루테인
  - 오메가3
  - 비타민C
  - 벌꿀
  - 참기름/들기름
  - 볶음밥
  - 쿠키
  - 한우
- 제품별 Story Flow, Hero, 핵심 섹션, CTA, Smart Card 기준 분리
- 벌꿀에 압착 표현이 나오지 않도록 채밀·밀원·결정화 중심으로 분리
- 참기름은 볶음 정도·압착·착유·산패·활용 중심으로 분리
- 오메가3는 EPA·DHA·원료 형태·산패 관리 중심으로 분리
- 루테인은 루테인·지아잔틴·마리골드·1일 섭취 기준 중심으로 분리
- 비타민C는 1일 함량·원료 출처·제형·섭취 편의성 중심으로 분리

## 문장 품질 개선
- 조사 보정 후처리 유지
- 반복되는 AI 문장 패턴 완화
- 카테고리 금지어 제거
- 중복 섹션 제거
- Smart Card 및 구매 기준의 제품별 차별화

## 신규 파일
- src/data/productReasoningProfiles.js
- src/utils/languagePostProcessor.js

## 수정 파일
- src/engines/v9/copyLibrary.js
- src/engines/v9/intentEngine.js
- src/engines/v9/rendererEngine.js
- package.json / package-lock.json

## 검증
- npm ci 성공
- npm run build 성공
- Vite production build 완료

## 테스트 권장 제품
루테인, 오메가3, 비타민C, 벌꿀, 참기름, 볶음밥, 쿠키, 한우
