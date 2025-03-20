export default function Home() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Jamie Morgan</h1>
          <p className="text-gray-500 mt-2">Software Engineer | Tech Enthusiast</p>
          <div className="mt-6">
            <a href="/projects" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View My Projects
            </a>
          </div>
        </div>
      </div>
    );
  }