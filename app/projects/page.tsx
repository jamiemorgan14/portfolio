export default function Projects() {
  return (
    <main>
      <h1>My Projects</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'rgb(31, 41, 55)',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#60a5fa' }}>Project 1</h2>
          <p style={{ color: 'rgb(156, 163, 175)' }}>Description of project 1</p>
        </div>
        <div style={{
          background: 'rgb(31, 41, 55)',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#60a5fa' }}>Project 2</h2>
          <p style={{ color: 'rgb(156, 163, 175)' }}>Description of project 2</p>
        </div>
        <div style={{
          background: 'rgb(31, 41, 55)',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#60a5fa' }}>Project 3</h2>
          <p style={{ color: 'rgb(156, 163, 175)' }}>Description of project 3</p>
        </div>
      </div>
    </main>
  )
} 