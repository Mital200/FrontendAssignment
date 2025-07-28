export default function Features() {
  const features = [
    { label: "Super Fast Delivery", img: "https://cdn.vectorstock.com/i/500p/00/12/fast-delivery-banner-scooter-with-a-man-vector-44840012.jpg" },
    { label: "100% Eco Friendly", img:"https://img.freepik.com/premium-vector/100-percent-eco-friendly-green-sticker-label-design-vector-illustration_172113-296.jpg" },
    { label: "Organic Foods", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYTbnEDSXveS9MI9FgbSmBH5I8-QRmZkJ8g&s" },
  ];

  return (
    <section className="flex justify-around items-center py-6 bg-white text-green-700 text-sm font-medium">
      {features.map((f, i) => (
        <div key={i} className="text-center">
          <img src={f.img} className="h-20 object-contain"/>
          <p>{f.label}</p>
        </div>
      ))}
    </section>
  );
}
