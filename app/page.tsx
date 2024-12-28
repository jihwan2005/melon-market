import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <span>🍈</span>
        <h1>멜론</h1>
        <h2>멜론 마켓에 어서오세요!</h2>
      </div>
      <div>
        <Link href="/create-account">시작하기</Link>
        <div>
          <span>이미 계정이 있나요?</span>
          <Link href="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}
