// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { usePathname } from "next/navigation"; // Import usePathname

// const Navbar: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const pathname = usePathname(); // Use the usePathname hook

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Function to determine if a link is active
//   const isActive = (path: string) => pathname === path;

//   return (
//     <nav className="py-6 bg-white">
//       <div className="container flex justify-between items-center">
//         <a href="/">
//           <Image
//             src="/tundas_logo.png"
//             alt="Tundas Logo"
//             width={145}
//             height={39}
//           />
//         </a>
//         <div className="hidden md:flex space-x-8">
//           <a
//             href="/services"
//             className={`text-custom-grey hover:text-custom-purple font-normal ${
//               isActive("/services") ? "text-custom-purple" : ""
//             }`}
//           >
//             Services
//           </a>
//           <a
//             href="/company"
//             className={`text-custom-grey hover:text-custom-purple font-normal ${
//               isActive("/company") ? "text-custom-purple" : ""
//             }`}
//           >
//             About Us
//           </a>
//           <a
//             href="/faq"
//             className={`text-custom-grey hover:text-custom-purple font-normal ${
//               isActive("/faq") ? "text-custom-purple" : ""
//             }`}
//           >
//             FAQs
//           </a>
//         </div>

//         <div className="hidden md:block">
//           <a
//             href="/contact-sales"
//             className="text-custom-grey text-custom-16 font-medium bg-custom-lavender hover:bg-custom-lavender rounded-custom-30.4"
//             style={{ padding: "10px 20px" }}
//           >
//             Contact Sales
//           </a>
//         </div>

//         <div className="md:hidden">
//           <button
//             onClick={toggleMobileMenu}
//             className="text-gray-300 focus:outline-none"
//             aria-label="Toggle mobile menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu implementation */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden">
//           <a
//             href="/services"
//             className={`block py-2 text-custom-grey hover:text-custom-purple ${
//               isActive("/services") ? "text-custom-purple" : ""
//             }`}
//           >
//             Services
//           </a>
//           <a
//             href="/company"
//             className={`block py-2 text-custom-grey hover:text-custom-purple ${
//               isActive("/company") ? "text-custom-purple" : ""
//             }`}
//           >
//             About Us
//           </a>
//           <a
//             href="/faq"
//             className={`block py-2 text-custom-grey hover:text-custom-purple ${
//               isActive("/faq") ? "text-custom-purple" : ""
//             }`}
//           >
//             FAQs
//           </a>
//           <a
//             href="/contact-sales"
//             className="block py-2 text-custom-grey hover:text-custom-purple"
//           >
//             Contact Sales
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Use the usePathname hook

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to determine if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="py-6 bg-white fixed top-0 left-0 w-full z-50">
      <div className="container flex justify-between items-center">
        <a href="/">
          <Image
            src="/tundas_logo.png"
            alt="Tundas Logo"
            width={145}
            height={39}
          />
        </a>
        <div className="hidden md:flex space-x-8">
          <a
            href="/services"
            className={`text-custom-grey hover:text-custom-purple font-normal ${
              isActive("/services") ? "text-custom-purple" : ""
            }`}
          >
            Services
          </a>
          <a
            href="/company"
            className={`text-custom-grey hover:text-custom-purple font-normal ${
              isActive("/company") ? "text-custom-purple" : ""
            }`}
          >
            About Us
          </a>
          <a
            href="/faq"
            className={`text-custom-grey hover:text-custom-purple font-normal ${
              isActive("/faq") ? "text-custom-purple" : ""
            }`}
          >
            FAQs
          </a>
        </div>

        <div className="hidden md:block">
          <a
            href="/contact-sales"
            className="text-custom-grey text-custom-16 font-medium bg-custom-lavender hover:bg-custom-lavender rounded-custom-30.4"
            style={{ padding: "10px 20px" }}
          >
            Contact Sales
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu implementation */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white shadow-lg z-40 flex flex-col items-center pt-16"
          style={{ height: "100vh" }}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-gray-600"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <a
            href="/services"
            className={`block py-4 text-custom-grey hover:text-custom-purple ${
              isActive("/services") ? "text-custom-purple" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="/company"
            className={`block py-4 text-custom-grey hover:text-custom-purple ${
              isActive("/company") ? "text-custom-purple" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="/faq"
            className={`block py-4 text-custom-grey hover:text-custom-purple ${
              isActive("/faq") ? "text-custom-purple" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQs
          </a>
          <a
            href="/contact-sales"
            className="block py-4 text-custom-grey hover:text-custom-purple"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Sales
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// {isMobileMenuOpen && (
//   <div className="md:hidden mt-4">
//     <a
//       href="#"
//       className="block text-custom-grey hover:text-custom-purple mb-2"
//     >
//       Services
//     </a>
//     <a
//       href="company"
//       className="block text-custom-grey hover:text-custom-purple mb-2"
//     >
//       About Us
//     </a>
//     <a
//       href="#"
//       className="block text-custom-grey hover:text-custom-purple mb-4"
//     >
//       FAQs
//     </a>
//     <a
//       href="#"
//       className="inline-block text-custom-grey text-custom-16 font-medium font-semibold bg-custom-lavender hover:bg-custom-lavender rounded-custom-30.4"
//       style={{ padding: "10px 20px" }}
//     >
//       Contact Sales
//     </a>
//   </div>
// )}
