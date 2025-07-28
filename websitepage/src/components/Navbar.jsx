export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-green-600">Fresh</h1>
      <ul className="flex gap-4 text-gray-700">
        <li>Home</li>
        <li>Categories</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
