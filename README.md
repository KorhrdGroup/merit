# merit — 국가유공자 혜택자 학습 상담 신청

barosocial 을 바탕으로 만든 국가유공자 상담 신청 랜딩 폼입니다.
접수는 한평생 오피스 문의 DB(Supabase `hakjeom_consultations`)에 저장됩니다.

## 포함된 화면과 동작

- `/`, `/form`: 국가유공자 혜택자 학습 상담 신청 폼
- `/api/consultations`: 상담 접수 저장(POST)만 제공. 조회·수정·삭제는 오피스에서 합니다.
- 광고 채널 경로(`/daangn`, `/insta` 등): UTM 값을 붙여 폼으로 이동
- `/privacy`, `/terms`: 안내 페이지

관리자 화면은 두지 않습니다. 오피스 DB 에서 유입경로는 대분류 「랜딩페이지」, 중분류 「국가유공자_{유입}」 으로,
국가보훈대상자와의 관계는 메모 칸에 「국가보훈대상자와의 관계: …」 로 보입니다.

## 실행과 배포

1. `npm ci`
2. 환경 변수는 `.env.example` 을 참고합니다. 로컬 값은 `.env.local` 에 있습니다.
3. `npm run dev` 또는 `npm run build` 후 `npm run start`
