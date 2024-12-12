
const Nav = () => {
    return (
        <div key="Nav" className="nav z-50 sticky top-12 left-1/2 mx-auto rounded-full px-4 py-2 flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-sm w-fit h-fit gap-4 mt-12 border">
            <a href="#about" className="text-sm font-bold p-2 rounded-full text-white hover:scale-110 transition-all duration-200">About</a>
            <a href="#projects" className="text-sm font-bold p-2 rounded-full text-white hover:scale-110 transition-all duration-200">Projects</a>
            <a href="#skills" className="text-sm font-bold p-2 rounded-full text-white hover:scale-110 transition-all duration-200">Skills</a>
        </div>
    )
}

export default Nav