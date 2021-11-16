import { ChevronDownIcon, AcademicCapIcon, ShoppingCartIcon, SearchIcon } from "@heroicons/react/solid";

const navItems = ["home", "pages", "courses", "features", "blog", "shop"];

function Header() {
  return (
    <nav className="flex mx-10 justify-between">
      <div className="flex items-center space-x-5">
        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
          <AcademicCapIcon className="h-8 text-red-600" />
        </div>
        <h1 className="capitalize text-2xl font-medium">skilify</h1>
      </div>
      <div className="flex items-center space-x-10">
        <ul className="flex space-x-5">
            {navItems.map((x, index) => (
            <div className="">
                <li key={index} className="text-gray-500 capitalize">
                {x}
                </li>
            </div>
            ))}
        </ul>
        <SearchIcon className="text-gray-500 h-5" />
        <ShoppingCartIcon className="text-gray-500 h-5" />
        <button className="bg-red-600 rounded-lg text-white px-5 py-2">Register</button>
      </div>
    </nav>
  );
}

export default Header;
