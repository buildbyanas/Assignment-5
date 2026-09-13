
import logo from "./assets/logo-text.png";
const Nav = () => {
  return (
    <div className="bg-white shadow-md">
    <nav className="container mx-auto flex flex-wrap justify-between items-center gap-4 p-4 md:px-8">
        <img src={logo} alt="DevStack Logo" className="w-auto md:w-auto" />
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-base md:text-lg">
                <li><a href="#" className="text-gray-700">Home</a></li>
                <li><a href="#" className="text-gray-700">Technologies</a></li>
                <li><a href="#" className="text-gray-700">Projects</a></li>
                <li><a href="#" className="text-gray-700">About</a></li>
                <li><a href="#" className="text-gray-700">Contact</a></li>
            </ul>
            <div className="flex flex-wrap justify-center md:justify-end gap-5">
                <button className="">Sign In</button>
                <button className="bg-pink-600 text-white hover:bg-pink-600 hover:text-white px-4 py-2 rounded-full">Sign Up</button>
      
     </div>
     </nav>
    </div>
  )
}

export default Nav;