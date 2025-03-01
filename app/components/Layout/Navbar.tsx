"use client";

import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { BiChevronUp } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <WebNav />
      <MobileNav />
      <FloatingButton />
    </>
  );
};

const WebNav = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    // sticky navbar - bg black
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 md:py-2 transition-all duration-300 ease-in-out ${
        sticky
          ? "shadow-xl bg-black/80 backdrop-blur-md"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="max-w-3xl flex flex-wrap items-center justify-between mx-auto">
        {/* logo */}
        <a href="#hero" className="p-4">
          <Image
            src="/images/logo.jpeg"
            alt="logo"
            className="w-48"
            width={74.286}
            height={25}
          />
        </a>

        {/* links */}
        <div className="hidden md:block">
          <Links />
        </div>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  // handle menu
  const [openNav, setOpenNav] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // return if the sidebar is closed
    if (!openNav) return;

    const handleClickOutsideSidebar = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpenNav(false);
      }
    };

    const handleScroll = () => {
      setOpenNav(false);
    };

    document.addEventListener("mousedown", handleClickOutsideSidebar);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSidebar);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openNav]);

  return (
    <>
      {/* menu button */}
      <button
        type="button"
        ref={buttonRef}
        className="fixed top-0 right-0 z-50 inline-flex items-center p-2 m-4 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:outline-none hover:ring-2 hover:ring-gray-200"
        onClick={() => setOpenNav(!openNav)}
      >
        <span className="sr-only">Abrir menu</span>
        {openNav ? <IoMdClose size={24} /> : <CiMenuFries size={24} />}
      </button>

      <aside
        ref={menuRef}
        className={`md:hidden fixed top-0 z-30 w-full transition-transform duration-300 h-[100svh] ${
          openNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Links setOpenNav={setOpenNav} />
      </aside>
    </>
  );
};

const Links = ({
  setOpenNav,
}: {
  setOpenNav?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [anchor, setAnchor] = useState("#");

  const pages = [
    { title: "inicio", path: "#hero" },
    { title: "sobre", path: "#about" },
    { title: "especialidades", path: "#specialties" },
    { title: "consultas", path: "#appointments" },
    { title: "contato", path: "#contact" },
    { title: "depoimentos", path: "#reviews" },
  ];

  return (
    <div className="font-medium flex flex-col text-end p-4 pt-28 border border-gray-100 bg-white h-full md:flex-row md:gap-4 md:px-4 md:py-0 md:bg-transparent md:border-none">
      {pages.map((page, idx) => {
        return (
          <div key={idx}>
            <a
              href={page.path}
              onClick={() => {
                if (setOpenNav) setOpenNav(false);
                setAnchor(page.path);
              }}
              className={`block py-2 pl-3 pr-4 rounded capitalize md:p-0 relative transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
                anchor === page.path ||
                (anchor === "#" && page.path === "#hero")
                  ? "text-red-400 hover:text-red-300 after:bg-red-300"
                  : " text-gray-100 hover:text-gray-200 after:bg-gray-200"
              }`}
            >
              {page.title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

const FloatingButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // display message icon on scrolldown
    function handleScroll() {
      return window.scrollY > 10 ? setShow(true) : setShow(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-[40px] z-[999999] flex flex-col items-end text-end gap-2 ease-in-out duration-500 ${
        show ? "right-[29px]" : "-right-[100%]"
      }`}
    >
      <button
        className="h-[40px] w-[40px] p-2 border-2 border-blue-700 hover:border-white rounded-full hover:bg-blue-700 transition-colors text-blue-700 hover:text-white hover:shadow-lg"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <BiChevronUp size={40} className="-mt-2.5 -ml-2.5" />
      </button>
      <a
        href="https://wa.me/+5521992062217?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+atendimento"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full ease-in-out duration-500 hover:bg-white hover:shadow-lg hover:pl-4 transition text-gray-500 group"
      >
        <p className="text-xl text-gray-400 hidden group-hover:block ease-in-out duration-500">
          Entrar em contato
        </p>
        <Image
          src="/images/whatsapp.svg"
          alt="whatsapp"
          width={40}
          height={40}
        />
      </a>
    </div>
  );
};

export default Navbar;
