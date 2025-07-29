export default function Features() {
  const features = [
    { label: "Super Fast Delivery", img: "https://cdn.vectorstock.com/i/500p/00/12/fast-delivery-banner-scooter-with-a-man-vector-44840012.jpg" },
    { label: "100% Eco Friendly", img:"https://img.freepik.com/premium-vector/100-percent-eco-friendly-green-sticker-label-design-vector-illustration_172113-296.jpg" },
    { label: "Organic Foods", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYTbnEDSXveS9MI9FgbSmBH5I8-QRmZkJ8g&s" },
  ];

  return (
    <section className="bg-white py-6 px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.label}
              className="w-14 h-14 sm:w-20 sm:h-20 mb-2 object-contain"
            />
            <p className="text-sm sm:text-base text-green-700 font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
