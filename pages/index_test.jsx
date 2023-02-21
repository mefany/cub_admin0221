import Link from "next/link";

export default function testPage() {
  const id = 31;
  return (
    <div>
      <h1>TEST PAGE</h1>
      <Link href={`/test/${id}`}>ROUTH</Link>
    </div>
  );
}
