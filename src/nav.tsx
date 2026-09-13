
import logo from "./assets/logo-text.png";
const Nav = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
  <nav className="container mx-auto flex flex-wrap items-center justify-between gap-4 p-4 md:px-8">

    <img
      src={logo}
      alt="DevStack Logo"
      className="w-auto"
    />
    <ul className="flex flex-wrap justify-center gap-4 text-base md:gap-6 md:text-lg">
      <li><a href="#" className="text-gray-700">Home</a>
      </li>
      <li><a href="#" className="text-gray-700">Technologies</a>
      </li>
      <li><a href="#" className="text-gray-700">Projects</a>
      </li>
      <li><a href="#" className="text-gray-700">About</a>
      </li>
      <li><a href="#" className="text-gray-700">Contact</a>
      </li>
    </ul>

    <div className="flex flex-wrap justify-center gap-5 md:justify-end">
      <button>Sign In</button>

      <button className="rounded-full bg-pink-600 px-4 py-2 text-white hover:bg-pink-700">
        Sign Up
      </button>
    </div>

  </nav>
</div>
  )
}

export default Nav;