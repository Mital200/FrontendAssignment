
 
export default function BrowseProducts() {
//   const allProducts = [
//   "Cauliflower", "Asparagus", "Carrots", "Tomatoes",
//   "Onions - brown", "Avocados", "Potatoes brown", "Onions - red"
// ];

  const allProducts = [{
    veg:"Cauliflower",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSungRAJWDJxxBLqxccucPcwq8YZ0P7P6k34Q&s",
  },{
    veg:"Asparagus",
    img:"https://www.allrecipes.com/thmb/lp5H2Nzz6AskQDx5GkKF7Xf5w48=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/214931_oven-roasted-asparagus_Rita-1x1-1-4f7b495c60eb4f619d80e86307472e1c.jpg"
  },{
    veg:"Carrots",
    img:"https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/25/3/shutterstock_440493100_5-second-Studio_carrots.jpg.rend.hgtvcom.1280.1280.85.suffix/1524688181811.webp"
  },{
    veg:"Tomatoes",
    img:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7UH64K2_JbWj--JEDbWcTUfrwSvo7Xuk1tm4NYExO2VhZTWm8Qs1YdW1IctLimuJqONWxfLEUk3IIrtluNW1nDg"
  },{
    veg:"Onions-brown",
    img:"https://cdn.prod.website-files.com/561569086aa9370f413e628b/608bb1a5e703de8a0b5ba2fd_dreamstime_xl_35283605-(Small).jpeg"
  },{
    veg:"Avocados",
    img:"https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2022/04/pexels-antonio-filigno-8538296-1024x657.jpg",
  },{
    veg:"Potatoes brown",
    img:"https://5.imimg.com/data5/SELLER/Default/2023/2/QE/PR/XG/34205695/russet-potato-500x500.png",
  },{
    veg:"Onions-red",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BHU-RMDQCv1Pm92BKtGJtYiNWHBRLVY_Mg&s",
  }]
  return (
    <section className="py-8 px-6">
      <h3 className="text-xl font-semibold mb-4">Browse Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {allProducts.map((veg, i) => (
          <div key={i} className="bg-white p-4 rounded shadow text-center">
            <img src={veg.img} alt={veg.veg} className="h-40 mx-auto" />
            <h4 className="mt-2">{allProducts[i].veg}</h4>
            <p>BDT. 25/kg</p>
          </div>
        ))}
      </div>
    </section>
  );
}

