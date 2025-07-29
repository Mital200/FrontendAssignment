export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-4 bg-white shadow flex-col sm:flex-row">
      <h1 className="text-2xl font-bold text-green-800 mb-2 sm:mb-0">Fresh<br/>Foods</h1>
      <ul className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm sm:text-base">
        <li>Home</li>
        <li>Categories</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
