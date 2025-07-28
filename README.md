# AI 메모 애플리케이션

지능적인 메모 작성과 관리를 위한 최신 웹 애플리케이션입니다.

## 🚀 주요 기능

- **AI 기반 메모 작성**: 인공지능이 도와주는 스마트한 메모 작성
- **태그 기반 관리**: 체계적인 메모 분류 및 검색
- **실시간 동기화**: 클라우드 기반 실시간 데이터 동기화
- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험

## 🛠️ 기술 스택

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: Supabase (PostgreSQL)
- **ORM**: DrizzleORM
- **State Management**: Zustand
- **Development**: ESLint, Prettier

## 📦 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/jaehoon1128/ai-memo-app.git
cd ai-memo-app
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
`.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```env
# Supabase 설정
DATABASE_URL="postgresql://your-username:your-password@your-host:5432/your-database"
NEXT_PUBLIC_SUPABASE_URL="your-supabase-project-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"

# AI API 설정 (향후 사용)
OPENAI_API_KEY="your-openai-api-key"
```

### 4. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

## 📁 프로젝트 구조

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # 루트 레이아웃
│   └── page.tsx        # 메인 페이지
├── components/         # 재사용 가능한 컴포넌트
│   └── Button.tsx     # 기본 버튼 컴포넌트
├── lib/               # 유틸리티 및 설정
│   ├── db/           # 데이터베이스 관련
│   │   ├── index.ts  # DrizzleORM 클라이언트
│   │   └── schema.ts # 데이터베이스 스키마
│   └── stores/       # Zustand 스토어
│       └── memoStore.ts # 메모 상태 관리
└── types/            # TypeScript 타입 정의
```

## 🗄️ 데이터베이스 스키마

### Users 테이블
- 사용자 정보 관리
- 이메일 기반 인증

### Memos 테이블
- 메모 제목 및 내용
- 사용자별 메모 관리
- 생성/수정 시간 추적

### Tags 테이블
- 태그 이름 관리
- 사용자별 태그 분류

### MemoTags 테이블
- 메모와 태그 간의 다대다 관계

## 🔧 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 🤝 기여하기

1. 이슈를 생성하여 작업할 내용을 알려주세요
2. `feature/이슈번호` 형식으로 브랜치를 생성하세요
3. 작업을 완료한 후 Pull Request를 생성하세요

## 📄 라이선스

MIT License

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 통해 연락해주세요.
