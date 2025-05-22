import React from 'react'
import { useState } from 'react'

const solutions = [
  {
    title: "jansdksnd Support",
    description:
      "24/7 AI-augmented agents deliver fast, empathetic support across every channel.",

    link: "/hire",
  },
  {
    title: "Resdsp adaaleasdas",
    description:
      "Live repsads, guided by I insights, drive high-value purchases in real time.",

    link: "/hire",
  },
  {
    title: "as sdad",
    description:
      "AI-powered nudges to recover abandoned carts and convert lost checkouts into revenue.",

    link: "/hire",
  },
];

const products = [
  {
    title: "o as",
    description:
      "Your sdAI teammate that learns, assists, and evolves with effortless training",
    image: "/as.png",
    link: "/asd",
  },
  {
    title: "Pulse",
    description:
      "Track agent's performance with AI-driven analysis and leaderboards.",
    image: "/asd.png",
    link: "/dasd",
  },
  {
    title: "sdsa",
    description:
      "Bring all your customer queries into one place, with seamless multi-channel integration.",
    image: "/sd.png",
    link: "/sd",
  },
  {
    title: "Lsdat",
    description:
      "Your AI-pfeowered cefhatbot that instantly answers FAQs and engages with customers in real-time.",
    image: "/ldhat.png",
    link: "/lifdchat",
  },
  {
    title: "Tf
    description: "Tracks and optimizes your agents' productivity in real-time.",
    image: "/timeefeary.png",
    link: "/timefry",
  },
];

const resources = [
  {
    title: "Blogs",
  },
  {
    title: "Webinar",
  },
  {
    title: "E-Books",
  },
  {
    title: "Case Studies",
  },
];

const ResourceBtn = ({ title, idx, onMouseEnter, onMouseLeave }) => {
  return (
    <button
      className="flex items-center justify-between w-full border border-transparent hover:border-greyThirty rounded-lg hover:bg-greyTen p-2"
      onMouseEnter={() => onMouseEnter(idx)}
      onMouseLeave={onMouseLeave}
    >
      {title}

    </button>
  );
};

const ProductCard = ({  
  title,
  description,
  image,
}) => {
  return (
    <div 

      className="flex flex-col gap-3 text-blackFifty cursor-pointer w-[200px] hover:bg-greyTen hover:shadow-sm p-3 rounded-xl transition-all duration-200"

    >
      <div className="relative w-ful h-[120px] rounded-lg overflow-hidden border border-greyFifty">
        <img 
          src={image} 
          alt={title} 
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="space-y-1">
       <div className="flex items-center justify-between">
        <h3 className="text-base font-medium">{title}</h3>
        {/* {isHovered && <MoveRight className="w-4 h-4" />} */}
       </div>
        <p className="text-xs leading-tight">{description}</p>
      </div>
    </div>
  );
};


const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [leaveTimeoutId, setLeaveTimeoutId] = useState(null);

  const DROPDOWN_LEAVE_DELAY = 200;

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleDropdownEnter = (dropdown) => {
    if (leaveTimeoutId) {
      clearTimeout(leaveTimeoutId);
      setLeaveTimeoutId(null);
    }
    setOpenDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    const timeoutId = setTimeout(() => {
      setOpenDropdown(null);
    }, DROPDOWN_LEAVE_DELAY);
    setLeaveTimeoutId(timeoutId);
  };

  const handleMouseEnter = (idx) => {
    setIsHovered(idx);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
       <header className="fixed w-[96%] left-1/2 -translate-x-1/2 md:max-w-3xl lg:max-w-6xl mt-4 rounded-2xl bg-white/80 backdrop-blur-lg border border-greyThirty shadow-sm h-14 pl-3 pr-[0.675rem] z-50">
        <div className="flex justify-between items-center text-sm h-full w-full">
          <div
            className="flex items-center cursor-pointer"
        
          >
            <img src="/weflogo.svg" width={40} height={40} alt="Logo" />
            <div className="text-2xl text-blackThirty font-semibold">wefe</div>
          </div>
          <nav className="hidden md:flex items-center justify-between flex-1 text-sm font-semibold font-inter h-[1.625rem] text-blackFourty">
            <div className="flex-1" />
            <div className="flex items-center gap-4 flex-[2]">
              <div
                onMouseEnter={() => handleDropdownEnter("solutions")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className='flex items-center gap-1 py-2 px-[0.625rem] hover:bg-greyFourty rounded-md'
                >
                  Solutions

                </button>
                {openDropdown === "solutions" && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col gap-1 bg-white/80 backdrop-blur-md shadowm-sm border border-greyThirty shadow-sm rounded-xl p-3 w-[450px]">
                    {solutions.map((solution, idx) => (
                      <div
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={handleMouseLeave}
                        key={solution.title}
                        className="flex gap-4 text-blackFifty border border-red-400 cursor-pointer hover:bg-greyTen rounded-lg p-4 min-h-[90px] transition-all duration-200"
                      >
            
                        <div className="flex flex-col gap-1 justify-center">
                          <div className="flex items-center justify-between">
                            <h3 className="text-base font-medium">
                              {solution.title}
                            </h3>
                          </div>
                          <p className="text-xxs leading-snug">
                            {solution.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => handleDropdownEnter("products")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className='flex items-center gap-1 py-2 px-[0.625rem] hover:bg-greyFourty rounded-md'

                >
                  Products
  
                </button>
                {openDropdown === "products" && (
                  <div className="absolute top-16 left-0 flex items-start gap-4 shadow-lg bg-white border border-greyThirty rounded-2xl pt-4 px-3 pb-3 w-full max-h-72 md:max-w-2xl xl:max-w-6xl mx-auto">
                    {products.map((product, index) => (
                      <React.Fragment key={product.title}>
                        <ProductCard {...product} />
                        {index < products.length - 1 && (
                          <div className="h-60 w-[1px] bg-greyFourty self-center" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => handleDropdownEnter("resources")}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center gap-1 py-2 px-[0.625rem] hover:bg-greyFourty rounded-md">
                  Resources
       
                </button>
                {openDropdown === "resources" && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 flex gap-4 bg-white border border-greyThirty shadow-lg rounded-2xl p-4 w-[680px] h-80">
                    <div className="flex flex-col items-start gap-1 text-base font-medium text-blackFifty min-w-[160px]">
                      {resources.map((resource, idx) => (
                        <ResourceBtn
                          key={idx}
                          idx={idx}
                          isHovered={isHovered}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          {...resource}
                        />
                      ))}
                    </div>
                    <div className="flex-1">
                      <div className="border-l border-greyTwenty h-full pl-4">
                        <h3 className="text-xs text-greyHundred mb-3">
                          Featured
                        </h3>
                        <div className="grid grid-cols-2 gap-3 h-full">
                          <div className="hover:bg-greyTen rounded-2xl p-2 hover:shadow-sm flex flex-col gap-4 max-h-64 max-w-[230px] cursor-pointer">
                            <div className="bg-gray-100 rounded-xl overflow-hidden h-full">
                              <img
                                src="/wef.png"
                                alt="Blog"
                                width={210}
                                height={172}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold leading-tight">
                                How Kahawa 1893 Solved Growing Support
                                Challenges with kim.cc ?
                              </h4>
                              <p className="text-xxs text-blackTen mt-2">
                                2 Minute Read
                              </p>
                            </div>
                          </div>
                          <div className="hover:bg-greyTen rounded-2xl p-2 hover:shadow-sm flex flex-col gap-4 max-h-64 max-w-[230px] cursor-pointer">
                            <div className="bg-gray-100 rounded-xl overflow-hidden h-full">
                              <img
                                src="/wfwf.png"
                                alt="Blog"
                                width={210}
                                height={172}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold leading-tight">
                                How Kahawa 1893 Solved Growing Support
                                Challenges with kim.cc ?
                              </h4>
                              <p className="text-xxs text-blackTen mt-2">
                                2 Minute Read
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a
       
                className="hover:bg-greyFourty rounded-md py-2 px-[0.625rem]"
              >
                Pricing
              </a>
            </div>
            <div className="flex-1 flex justify-end">
            <button>Book a Demo</button>
            </div>
          </nav>
          <div className="flex md:hidden items-center">
            <button
              className="h-8 w-8 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000000"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}
export default Header
