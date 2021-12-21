function Footer() {
    return (
        <div id="footer" className="">
            <div className="shadow-xl w-auto height-auto p-20 flex flex-col items-center space-y-8">
                <div
                    id="footer_links"
                    className="font-semibold space-x-16 underline"
                >
                    <a href="#" className="">
                        Need a Mentor?
                    </a>
                    <a href="#" className="">
                        Be a Mentor?
                    </a>
                    <a href="#" className="">
                        How it Works?
                    </a>
                    <a href="#" className="">
                        About Us
                    </a>
                </div>
                <div>contact@mentordaan.io</div>
                <div id="footer_socials" className="flex space-x-8">
                    <a
                        href="#"
                        className="h-14 w-14 rounded-full bg-red-500 flex justify-center items-center text-white"
                    >
                        f
                    </a>
                    <a
                        href="#"
                        className="h-14 w-14 rounded-full bg-red-500 flex justify-center items-center text-white"
                    >
                        L
                    </a>
                    <a
                        href="#"
                        className="h-14 w-14 rounded-full bg-red-500 flex justify-center items-center text-white"
                    >
                        I
                    </a>
                    <a
                        href="#"
                        className="h-14 w-14 rounded-full bg-red-500 flex justify-center items-center text-white"
                    >
                        Y
                    </a>
                    <a
                        href="#"
                        className="h-14 w-14 rounded-full bg-red-500 flex justify-center items-center text-white"
                    >
                        E
                    </a>
                </div>
                <div>&copy; Copyright 2021, mentordaan. All rights reserved.</div>
            </div>
        </div>
    )
}
export default Footer