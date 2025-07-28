import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI 메모 애플리케이션
          </h1>
          <p className="text-xl text-gray-600">
            지능적인 메모 작성과 관리를 위한 최신 플랫폼
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 메모 작성 카드 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                📝 메모 작성
              </h2>
              <p className="text-gray-600 mb-4">
                AI가 도와주는 스마트한 메모 작성 기능
              </p>
              <Button variant="primary" className="w-full">
                새 메모 작성
              </Button>
            </div>

            {/* 메모 관리 카드 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                📚 메모 관리
              </h2>
              <p className="text-gray-600 mb-4">
                태그와 검색으로 체계적인 메모 관리
              </p>
              <Button variant="outline" className="w-full">
                메모 목록 보기
              </Button>
            </div>

            {/* AI 분석 카드 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                🤖 AI 분석
              </h2>
              <p className="text-gray-600 mb-4">
                메모 내용 분석 및 인사이트 제공
              </p>
              <Button variant="secondary" className="w-full">
                분석 시작
              </Button>
            </div>
          </div>

          {/* 기술 스택 섹션 */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              🛠️ 기술 스택
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="font-medium">Next.js 15</div>
                <div className="text-sm text-gray-600">App Router</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-medium">Tailwind CSS</div>
                <div className="text-sm text-gray-600">스타일링</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">🗄️</div>
                <div className="font-medium">Supabase</div>
                <div className="text-sm text-gray-600">데이터베이스</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl mb-2">🔧</div>
                <div className="font-medium">DrizzleORM</div>
                <div className="text-sm text-gray-600">ORM</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
