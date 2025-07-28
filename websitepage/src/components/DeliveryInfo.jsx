export default function DeliveryInfo() {
  return (
    <section className="bg-white py-8 px-6 text-center">
      <h3 className="text-xl font-bold mb-4">Delivery Information</h3>
      <img src="/delivery.png" alt="Delivery" className="mx-auto h-40 mb-4" />
      <p>Home delivery available countrywide.</p>
      <div className="mt-4 space-y-2 text-sm text-gray-700">
        <p>📍 Inside City Corporation - Delivery within 6 hours - BDT. 50</p>
        <p>📦 Outside City Corporation - Delivery within 24 hours - BDT. 70</p>
      </div>
    </section>
  );
}
