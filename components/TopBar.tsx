import Link from 'next/link'

export default function TopBar() {
    return (
        <header className="flex items-center justify-between p-6 bg-blue-500">
            <div className="flex items-center space-x-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 8a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" />
                </svg>
                <h1 className="text-2xl text-white">PostalShare</h1>
            </div>
            <div className="flex items-center space-x-4">
                <Link href="/signin" className="text-white px-4 py-2 bg-green-500 rounded hover:bg-green-400">Sign In</Link>
                <Link href="/register" className="text-white px-4 py-2 bg-green-500 rounded hover:bg-green-400">Register</Link>
            </div>
        </header>
    )
}
