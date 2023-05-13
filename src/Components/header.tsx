import "remixicon/fonts/remixicon.css";

export default function Header() {
    return (
        <header className="text-gray-600 body-font bg-gray-100">
            <div className="flex">
                <a className="flex title-font ml-4 font-medium items-center text-gray-900 md:mb-0" href="https://github.com/ysknsid25/booby" target="blank">
                    <i className="ri-github-fill ri-3x"></i>
                    <span className="ml-3 text-2xl">booby</span>
                </a>
                <div className="ml-auto mr-2 flex items-center justify-end">
                    <button name="sponsorbutton" className="border border-pink-500 text-pink-500 font-bold py-2 px-4 rounded-full">
                        <a href="https://github.com/ysknsid25/booby" target="_blank">
                            <i className="ri-heart-fill ri-lg"></i>
                        </a>
                    </button>
                </div>
            </div>
        </header>
    )
}