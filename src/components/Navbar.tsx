function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <div className="font-bold text-xl text-green-700">🍃 JuiceBar</div>
      <ul className="hidden md:flex gap-6 text-gray-700">
        <li>
          <a href="#home" className="hover:text-green-600">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-green-600">
            About
          </a>
        </li>
        <li>
          <a href="#menu" className="hover:text-green-600">
            Menu
          </a>
        </li>
        <li>
          <a href="#benefits" className="hover:text-green-600">
            Benefits
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-green-600">
            Bestellen
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
