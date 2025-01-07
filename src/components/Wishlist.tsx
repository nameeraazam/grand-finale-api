import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Products {
    image: string | StaticImageData;
    productAlt: string;
    title: string;
    price: number;
    cutPrice?: string;
    offer?: string;
    classes?: string;
    onDelete?: () => void; // optional callback for delete action
    onAddToCart?: () => void; // optional callback for adding to cart
}

function WishlistCard({
    image,
    productAlt,
    title,
    price,
    cutPrice,
    offer,
    classes,
    onDelete,
    onAddToCart
}: Products) {
  return (
    <div className='flex flex-col gap-3'>
        <div className='flex justify-center items-center w-[245px] h-[225px] bg-[#f5f5f5] relative overflow-y-hidden'>
            {/* Offer label */}
            {offer && <p className={`${classes}`}>{offer}</p>}

            {/* Delete button */}
            {onDelete && (
              <button 
                className='absolute right-3 top-3 bg-white p-1 rounded-full cursor-pointer hover:bg-[#db4444] hover:text-white'
                onClick={onDelete}
                aria-label="Remove from wishlist"
              >
                <RiDeleteBin6Line />
              </button>
            )}

            {/* Add to Cart button */}
            <div
              className='flex gap-2 justify-center items-center absolute left-0 bottom-0 transition-all w-full bg-black text-white py-2 cursor-pointer'
              onClick={onAddToCart}
              aria-label="Add to Cart"
            >
              <IoCartOutline className='text-2xl' />
              <p className='text-xs'>Add To Cart</p>
            </div>
            {/* Product Image */}
            <Image className='w-[150px] h-[150px]' src={image} alt={productAlt} />
        </div>

        {/* Product Title and Price */}
        <p>{title}</p>
        <p className='flex gap-3'>
            <span className='text-[#bd4444]'>${price}</span>
            {cutPrice && (
              <span className='text-[#707070] relative line-through'>{cutPrice}</span>
            )}
        </p>
    </div>
  );
}

export default WishlistCard;
