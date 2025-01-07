"use client";

import WishlistCard from '@/components/Wishlist';
import ForyouCard from '@/components/ForyouCard';

function Page() {
  // Define product data with correct image paths
  const wishlistItems = [
    {
      image: "/images/2.png",
      productAlt: "gucci bag",
      title: "Gucci duffle bag",
      price: 960,
      cutPrice: "$1160",
      offer: "-35%",
      classes: "absolute left-3 top-3 py-1 rounded-sm px-3 text-white text-xs bg-[#db4444]"
    },
    {
      image: "/images/3.png",
      productAlt: "cpu cooler",
      title: "RGB Liquid CPU Cooler",
      price: 1960
    },
    {
      image: "/images/7.png",
      productAlt: "gamepad",
      title: "GP11 Shooter USB Gamepad",
      price: 550
    },
    {
      image: "/images/8.png",
      productAlt: "jacket",
      title: "Quilted Satin Jacket",
      price: 750
    }
  ];

  const forYouItems = [
    {
      image: "/images/3.png",
      productAlt: "asus laptop",
      title: "ASUS FHD Gaming Laptop",
      price: 960,
      cutPrice: "$1160",
      reviewStars: 5,
      reviewCount: 65,
      offer: "-35%",
      classes: "absolute left-3 top-3 py-1 rounded-sm px-3 text-white text-xs bg-[#db4444]"
    },
    {
      image: "/images/3.png",
      productAlt: "ips lcd",
      title: "IPS LCD Gaming Monitor",
      price: 1160,
      reviewStars: 5,
      reviewCount: 65
    },
    {
      image: "/images/1.png",
      productAlt: "gamepad",
      title: "HAVIT HV-G92 Gamepad",
      price: 560,
      reviewStars: 5,
      reviewCount: 65,
      offer: "new",
      classes: "absolute left-3 top-3 py-1 rounded-sm px-3 text-white text-xs bg-[#00ff66]"
    },
    {
      image: "/images/2.png",
      productAlt: "rgb keyboard",
      title: "AK-900 Wired Keyboard",
      price: 200,
      reviewStars: 5,
      reviewCount: 65
    }
  ];

  return (
    <div className="flex flex-col gap-12 mx-6 md:mx-24 my-10 md:my-20">
      {/* Wishlist Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-lg md:text-xl">Wishlist (4)</h2>
        <button className="flex justify-center items-center border border-black border-opacity-50 w-full md:w-[223px] h-[50px] text-base md:text-xl rounded-sm">
          Move All To Bag
        </button>
      </div>

      {/* Wishlist Items */}
      <div className="flex flex-col md:flex-row gap-6">
        {wishlistItems.map((item, index) => (
          <WishlistCard
            key={index}
            image={item.image}
            productAlt={item.productAlt}
            title={item.title}
            price={item.price}
            cutPrice={item.cutPrice}
            offer={item.offer}
            classes={item.classes}
          />
        ))}
      </div>

      {/* "Just For You" Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-3 items-center">
          <div className="w-5 h-8 md:h-10 bg-[#db4444] rounded-sm"></div>
          <h2 className="text-lg md:text-xl">Just For You</h2>
        </div>
        <button className="flex justify-center items-center border border-black border-opacity-50 w-full md:w-[150px] h-[50px] text-base md:text-xl rounded-sm">
          See All
        </button>
      </div>

      {/* "Just For You" Items */}
      <div className="flex flex-col md:flex-row gap-6">
        {forYouItems.map((item, index) => (
          <ForyouCard
            key={index}
            image={item.image}
            productAlt={item.productAlt}
            title={item.title}
            price={item.price}
            cutPrice={item.cutPrice}
            reviewStars={item.reviewStars}
            reviewCount={item.reviewCount}
            offer={item.offer}
            classes={item.classes}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;