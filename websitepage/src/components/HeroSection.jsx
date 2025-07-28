export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-green-100 px-6 py-10">
      <div className="max-w-md">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Eat Healthy<br />Live Healthy</h2>
        <p className="text-gray-700 mb-4">
          We providing you the fresh, organic and chemical free foods to your doorstep as your needs.
        </p>
        <button className="bg-green-700 text-white px-4 py-2 rounded">📞 Call for Details</button>
      </div>
      <div className="relative mt-6 md:mt-0">
        <img src="/veggies.jpg" alt="Veg Bundle" className="w-80 rounded-full shadow" />
        <div className="relative top-0 left-2 bg-green-800 text-white px-2 py-1 rounded">
          Vegetable Bundle <br /> Only at BDT. 299
        </div>
      </div>
    </section>
  );
}
