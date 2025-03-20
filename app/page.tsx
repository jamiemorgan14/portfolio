import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Portfolio</h1>
      <Link href="/projects">View My Projects</Link>
    </main>
  )
}