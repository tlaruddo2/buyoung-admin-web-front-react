import { useState } from "react"

export const Nav: React.FC = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    
    return (
        <nav className="bg-base-100 w-full px-1 py-2">
            <div className="flex justify-between items-center w-full px-1">
                <a href="/" className="text-black text-xl font-semibold">
                    부영금속
                </a>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden p-2 rounded border border-black hover:bg-gray-100"
                    onClick={() => setIsOpened(!isOpened)}
                >
                    <svg className="w-4 h-4" viewBox="0 0 20 20">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>

                {/* Navigation Links  */}
                <div className={`${isOpened ? 'block' : 'hidden'} 
                    lg:block absolute lg:relative top-12 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 z-50`}
                >
                    <div className="flex flex-col lg:flex-row gap-4">
                        <a href="condition-management" className="text-black hover:text-gray-700">조건관리</a>
                        <a href="production-log" className="text-black hover:text-gray-700">생산관리</a>
                        <a href="menu3" className="text-black hover:text-gray-700">인사관리</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
