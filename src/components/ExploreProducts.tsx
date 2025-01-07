import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ProductsCard from "./ProductsCard";
import Link from "next/link";
import EP1 from '../../public/images/1.png';
import EP2 from '../../public/images/2.png';
import EP3 from '../../public/images/3.png';
import EP4 from '../../public/images/4.png';
import EP5 from '../../public/images/5.png';
import EP6 from '../../public/images/6.png';
import EP7 from '../../public/images/7.png';
import EP8 from '../../public/images/8.png';

function ExploreProducts() {
  const products = [
    {
      image: EP1,
      productAlt: "pet food",
      title: "Breed Dry Dog Food",
      price: 100,
      cutPrice: 120,
      reviewStars: 3,
      reviewCount: 35
    },
    {
      image: EP2,
      productAlt: "canon camera",
      title: "Canon EOS DSLR Camera",
      price: 960,
      cutPrice: 1200,
      reviewStars: 4,
      reviewCount: 95
    },
    {
      image: EP3,
      productAlt: "asus laptop",
      title: "ASUS FHD Gaming Laptop",
      price: 700,
      cutPrice: 900,
      reviewStars: 5,
      reviewCount: 325
    },
    {
      image: EP4,
      productAlt: "curlogy products",
      title: "Curlogy Product Set",
      price: 300,
      cutPrice: 350,
      reviewStars: 4,
      reviewCount: 145
    },
    {
      image: EP5,
      productAlt: "electric car",
      title: "Kids Electric Car",
      price: 1200,
      cutPrice: 1500,
      reviewStars: 5,
      reviewCount: 65
    },
    {
      image: EP6,
      productAlt: "soccer shoes",
      title: "JR Zoom Soccer Cleats",
      price: 400,
      cutPrice: 420,
      reviewStars: 5,
      reviewCount: 35
    },
    {
      image: EP7,
      productAlt: "gamepad",
      title: "GP11 Shooter USB Gamepad",
      price: 360,
      cutPrice: 400,
      reviewStars: 4,
      reviewCount: 55
    },
    {
      image: EP8,
      productAlt: "jacket",
      title: "Quilted Satin Jacket",
      price: 660,
      cutPrice: 700,
      reviewStars: 4,
      reviewCount: 55
    }
  ];

  return (
    <div className="flex flex-col gap-5 mx-5 sm:mx-24 my-10 sm:my-32">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10 bg-[#db4444] rounded-sm"></div>
        <p className="font-semibold text-[#db4444] text-lg sm:text-xl">Our Products</p>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-4xl font-semibold">Explore Our Products</h1>
        <div className="flex gap-2">
          <button 
            className="flex justify-center items-center w-8 h-8 text-sm bg-[#f5f5f5] rounded-full hover:bg-[#e5e5e5] transition-colors"
            aria-label="Previous products"
          >
            <FaArrowLeft />
          </button>
          <button 
            className="flex justify-center items-center w-8 h-8 text-sm bg-[#f5f5f5] rounded-full hover:bg-[#e5e5e5] transition-colors"
            aria-label="Next products"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product, index) => (
          <ProductsCard
            key={index}
            image={product.image}
            productAlt={product.productAlt}
            title={product.title}
            price={product.price}
            cutPrice={product.cutPrice}
            reviewStars={product.reviewStars}
            reviewCount={product.reviewCount}
          />
        ))}
      </div>

      <Link 
        href="/products" 
        className="py-3 sm:py-4 px-8 sm:px-12 bg-[#db4444] w-[180px] sm:w-[234px] rounded-sm mx-auto mt-8 text-white text-sm sm:text-base hover:bg-[#c13e3e] transition-colors text-center"
      >
        View All Products
      </Link>
    </div>
  );
}

export default ExploreProducts;