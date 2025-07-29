const products = [
  { name: "Tomato", price: 30, image: "/tomato.avif" },
  { name: "Carrots", price: 22, image: "/carrots.jpg" },
  { name: "Cucumbers", price: 40, image: "/cucumber.webp" },
];

export default function SuggestedProducts() {
  return (
    <section className="bg-green-50 py-10 px-4 sm:px-8">
      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-800">Suggested for you</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300 text-center">
            <img src={p.image} alt={p.name} className="mx-auto h-24 w-24 object-contain mb-4" />
            <h4 className="text-lg text-gray-800 font-medium">{p.name}</h4>
            <p className="text-green-700 text-sm mb-2">BDT. {p.price}/kg</p>
            <button className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700">Add to cart</button>
          </div>
        ))}
      </div>
      <button className="mt-3 ml-120 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 text-sm sm:text-base">View All Products</button>
    </section>
  );
}
