import DropdownNav from "./DropdownNav";

const Navbar = () => {
  return (
    <header className="fixed top-0 flex w-full items-center shadow-lg py-4 px-4 sm:px-10 bg-[#ffffff]/80 font-[sans-serif] min-h-[70px] tracking-wide z-50 sm:rounded-none rounded-b-2xl">
      <div className="container mx-auto flex items-center justify-between w-full">
        {/* Menu Kiri (Hanya di Desktop) */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-5">
          <a
            href="javascript:void(0)"
            className="hover:font-bold hover:underline text-[#19B8ED] font-semibold text-[15px]"
          >
            Career
          </a>
          <a
            href="javascript:void(0)"
            className="hover:font-bold hover:underline text-[#19B8ED] font-semibold text-[15px]"
          >
            About Us
          </a>
        </div>


        {/* Logo Tengah */}
        <a
          href="javascript:void(0)"
          className="absolute left-1/2 transform -translate-x-1/2 max-sm:hidden"
        >
          <img src="assets/image/logo.png" alt="logo" className="w-36" />
        </a>
        <a href="javascript:void(0)" className="hidden max-sm:block">
          <img src="assets/image/logo.png" alt="logo" className="w-15" />
        </a>

        {/* Menu Kanan (Product & Contact Us di Desktop) */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-5 ml-auto">
          <a
            href="javascript:void(0)"
            className="hover:font-bold hover:underline text-[#19B8ED] font-semibold text-[15px]"
          >
            Product
          </a>
          <a
            href="javascript:void(0)"
            className="hover:font-bold hover:underline text-[#19B8ED] font-semibold text-[15px]"
          >
            Contact Us
          </a>
        </div>

        {/* Menu Mobile (Sidebar) */}
        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:fixed max-lg:w-[80%] max-lg:min-w-[280px] max-lg:top-2 max-lg:left-2 max-lg:p-6 max-lg:h-[96%] max-lg:shadow-lg max-lg:overflow-hidden max-lg:bg-white rounded-box max-lg:z-50"
        >
          <ul className="lg:hidden max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)">
                <img src="assets/image/logo.png" alt="logo" className="w-36" />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:font-bold hover:underline text-[#19B8ED] block font-semibold text-[15px]"
              >
                Product
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:font-bold hover:underline text-[#19B8ED] block font-semibold text-[15px]"
              >
                Contact Us
              </a>
            </li>
          </ul>
          
        </div>
      </div>
      <DropdownNav />
    </header>
  );
};

export default Navbar;