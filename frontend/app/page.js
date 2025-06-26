import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto">
          {/* Logo/Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
              Welcome to <span className="text-blue-600">AuthSystem</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Secure authentication for your application
            </p>
          </div>

          {/* Auth Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Get Started
              </h2>
              <p className="text-gray-500">
                Sign in to your account or register for a new one
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="/auth/login"
                className="block w-full px-6 py-3 text-center font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 shadow-sm hover:shadow-md"
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="block w-full px-6 py-3 text-center font-medium text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 transition duration-200"
              >
                Create Account
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500">
                By continuing, you agree to our Terms and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}