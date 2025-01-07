import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { CiMobile4, CiCamera } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats2 } from "react-icons/tb";
import { PiHeadphones, PiGameController } from "react-icons/pi";

function Category() {
  const categories = [
    { icon: CiMobile4, label: "Phones" },
    { icon: HiOutlineComputerDesktop, label: "Computer" },
    { icon: TbDeviceWatchStats2, label: "SmartWatch" },
    { icon: CiCamera, label: "Camera", isActive: true },
    { icon: PiHeadphones, label: "HeadPhones" },
    { icon: PiGameController, label: "Gaming" }
  ];

  return (
    <div className="flex flex-col gap-5 mx-5 md:mx-24 my-16 border-b">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10 bg-[#db4444] rounded-sm"></div>
        <p className="font-semibold text-[#db4444]">Categories</p>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="text-xl md:text-4xl font-semibold">Browse By Category</h1>
        </div>
        <div className="flex gap-2">
          <button 
            className="flex justify-center items-center w-8 h-8 text-sm bg-[#f5f5f5] rounded-full hover:bg-[#e5e5e5] transition-colors"
            aria-label="Previous category"
          >
            <FaArrowLeft />
          </button>
          <button 
            className="flex justify-center items-center w-8 h-8 text-sm bg-[#f5f5f5] rounded-full hover:bg-[#e5e5e5] transition-colors"
            aria-label="Next category"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 mt-10 mb-16">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className={`
                flex flex-col w-full h-[130px] gap-4 justify-center items-center
                border border-[#707070] rounded-sm transition-all
                ${category.isActive 
                  ? 'bg-[#db4444] text-white' 
                  : 'hover:bg-[#db4444] hover:text-white'
                }
              `}
            >
              <Icon className="text-5xl" />
              <p className="text-sm">{category.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;