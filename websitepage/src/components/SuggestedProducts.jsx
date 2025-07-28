const products = [
  { name: "Tomato", price: 30, image: "/tomato.png" },
  { name: "Carrots", price: 22, image: "/carrots.png" },
  { name: "Cucumbers", price: 40, image: "/cucumber.png" },
];

export default function SuggestedProducts() {
  return (
    <section className="bg-green-50 py-6 px-6">
      <h3 className="text-xl font-bold mb-4">Suggested for you</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((p, i) => (
          <div key={i} className="bg-white p-4 rounded shadow text-center">
            <img src={p.image} alt={p.name} className="mx-auto h-24" />
            <h4 className="mt-2 font-medium">{p.name}</h4>
            <p>BDT. {p.price}/kg</p>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded">View All</button>
    </section>
  );
}
