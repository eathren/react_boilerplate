import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="bg-slate-100 pt-3 pb-3 mb-16 shadow-md">
      <nav className="flex items-center justify-between max-w-[1200px] m-auto px-4">
        <Link to="/" className="text-xl font-semibold">
          <h3 className="text-xl font-semibold">Zenote</h3>
        </Link>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="/pricing" className="text-gray-700 hover:text-gray-900">
            Pricing
          </a>
          <a href="/auth/login" className="text-gray-700 hover:text-gray-900">
            Login
          </a>
          <a href="/auth/signup" className="text-gray-700 hover:text-gray-900">
            Signup
          </a>
        </div>
        <div className="md:hidden">
          <button type="button" className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
