import Link from 'next/link'

function Navbar() {
    return (
        <div id="navbar">
            <div className="shadow-xl h-28 w-full flex justify-between items-center px-20">
                <div id="logo" className="text-xl font-bold">
                    mentor<span className="text-red-500 underline">daan.</span>
                </div>
                <div id="auth" className="space-x-12">
                    <Link
                        id="login_btn"
                        href="/auth"
                        className="border-2 border-red-500 bg-red-500 px-8 py-2 rounded-full text-white"
                    >
                        Login
                    </Link>
                    <Link
                        id="signup_btn"
                        href="/auth"
                        className="border-2 border-red-500 px-8 py-2 rounded-full text-red-500"
                    >
                        Join for Free
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
