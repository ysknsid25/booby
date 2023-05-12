import "remixicon/fonts/remixicon.css";

export default function Header() {
    return (
        <header className="text-gray-600 body-font bg-gray-100">
            <div className="container flex flex-wrap flex-col md:flex-row">
                <a className="flex title-font ml-4 font-medium items-center text-gray-900 md:mb-0" href="https://github.com/ysknsid25/booby" target="blank">
                    <i className="ri-github-fill ri-3x"></i>
                    <span className="ml-3 text-2xl">booby</span>
                </a>
            </div>
        </header>
    )
}