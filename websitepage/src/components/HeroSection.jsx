export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-green-100 px-4 sm:px-8 md:px-16 py-10">
      <div className="text-center md:text-left max-w-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4">Eat Healthy<br />Live Healthy</h2>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          We providing you the fresh, organic and chemical free foods to your doorstep as your needs.
        </p>
        <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 text-sm sm:text-base">📞 Call for Details</button>
      </div>
      <div className="relative mt-8 md:mt-0">
        <img src="/veggies.jpg" alt="Veg Bundle" className="w-64 sm:w-80 md:w-96 mx-auto md:mx-0" />
        <div className="absolute top-2 left-2 bg-green-800 text-white text-xs sm:text-sm px-2 py-1 rounded">
          Vegetable Bundle <br /> Only at BDT. 299
        </div>
      </div>
    </section>
  );
}
