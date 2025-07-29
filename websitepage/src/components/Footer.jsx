export default function Footer() {
  return (
    <footer className="bg-green-100 px-6 py-8 text-center text-sm text-gray-700">
      <h4 className="text-green-700 font-bold text-xl mb-2">Fresh Food</h4>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-4 text-sm">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">Terms</a>
        <a href="#">About</a>
      </div>
      <p>© 2022 - 2025 Fresh Food, LLC. All Rights Reserved.</p>
    </footer>
  );
}
