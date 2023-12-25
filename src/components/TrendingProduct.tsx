import ProductCard from "./ProductCard";

const products = [
  {
    id: 0,
    img: "https://m.media-amazon.com/images/I/71gyslfwPPL._SL1500_.jpg",
    category: "Headphone",
    title:
      "Cosmic Byte GS430 Gaming Headphone, 7 Color RGB LED and Microphone for PC, PS5, Xbox, Mobiles, Tablets, Laptops (Camo Green)",
    price: "10",
  },
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/51q2KAqJX4L._SL1000_.jpg",
    category: "Headphone",
    title:
      "Ant Esports Hd Rgb Led Gaming Wired On Ear Headphones Without Mic (H530 - Black And Red)",
    price: "12",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/51eD8P0TWCL._SL1200_.jpg",
    category: "Headphone",
    title:
      "iGear Falcon Wired Gaming Headphone with Active Noise Cancellation(ANC)|RGB Headphone with 360° Mic|50mm Audio Driver|Mutijack 2m Wire|",
    price: "19",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51eFgb4stIL._SL1080_.jpg",
    category: "Computer",
    title:
      "Ant Esports GM320 RGB Optical Wired Gaming Mouse | 8 Programmable Buttons | 12800 DPI I Ergonomic Design with Braided Cable - Black",
    price: "8",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/61OlwsaCVDL._SL1500_.jpg",
    category: "Computer",
    title:
      "Ant Esports GM610 7D Crystal Full RGB Gaming Mouse, Instant 825 Chip, 7 Adjustable DPI Up to 12800, Lightweight Mouse, 7 Buttons, Ergonomic Gamer Mice",
    price: "12",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/71hLATTzChL._SL1500_.jpg",
    category: "Keyboard",
    title:
      "Ant Esports MK1400 Pro Backlit Membrane Wired Gaming Keyboard with Mixed Colour Lighting, White & Black Keycaps, Double Injection Key Caps - Black",
    price: "15",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/71fWGZ2GOOL._SL1500_.jpg",
    category: "Keyboard",
    title: "ZEBRONICS Premium Wireless Mechanical Keyboard",
    price: "250",
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/61gK+ivCo+L._SL1486_.jpg",
    category: "Keyboard",
    title: "Ninjadog Varna Pro - Mechanical Wireless Keyboard",
    price: "202",
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/61NrUr6Fm7L._SL1500_.jpg",
    category: "Keyboard",
    title:
      "HUO JI 60% Mechanical Keyboard, E-YOOSO Blue Switches Gaming Keyboard Wired with RGB Backlit",
    price: "218",
  },
];

const TrendingProduct = () => {
  return (
    <>
      <div className="container mt-32">
        <div className="sm:flex justify-between items-center">
          <h2 className="text-4xl font-medium">Trending Products</h2>
          <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
            <div className="text-black">New</div>
            <div>Featured</div>
            <div>Top Seller</div>
          </div>
        </div>
        {/* caRD */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              category={item.category}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingProduct;

// {
//     id: 0,
//     img: "",
//     category: "",
//     title: "",
//     price: "000",
//   },
