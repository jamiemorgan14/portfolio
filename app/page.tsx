import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Portfolio</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link className="nav-button" href="/projects">View My Projects</Link>
        <Link className="nav-button" href="/contact">Contact Me</Link>
      </div>
    </main>
  )
}