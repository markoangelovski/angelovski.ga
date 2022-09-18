import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import { HeaderProps } from "./Header.types";
import { imgLoader } from "@global/helpers/image/image";

const Header = (props: HeaderProps) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { heroTitle, heroImage, dropdownTitle, projectsDropdownCollection } =
    props;

  const navDropdown = projectsDropdownCollection.items;

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    // To prevent layout shift. https://www.npmjs.com/package/next-themes
    if (!mounted)
      return (
        <Image
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          alt=""
          width={36}
          height={46}
        />
      );

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button className="p-2" onClick={() => setTheme("light")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button className="p-2" onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      );
    }
  };

  return (
    <header className="border-b-[1px] border-gray-300 dark:border-gray-700 dark:bg-neutral-800">
      <div className="mx-auto flex max-w-7xl justify-between">
        <Link href="/">
          <a title={heroImage.imageTitle} className="flex">
            <div className="flex p-2">
              <Image
                priority
                src={heroImage.image.src}
                alt={heroImage.imageAltText}
                width={30}
                height={30}
                loader={imgLoader}
              />
            </div>
            <span className="self-center ">{heroTitle}</span>
          </a>
        </Link>

        <div className="flex">
          <div className="relative flex text-left">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center px-4 py-2 text-sm font-medium  shadow-sm"
              id="menu-button"
              aria-expanded={menuOpen}
              aria-haspopup="true"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {dropdownTitle}
              <svg
                className={`-mr-1 ml-2 h-5 w-5 ${menuOpen && "rotate-180"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div
              className={`${
                !menuOpen && "hidden"
              } absolute right-0 z-10 mt-11 w-40 origin-top-right border bg-white focus:outline-none dark:border-gray-700 dark:bg-neutral-800`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              {navDropdown.map((item, i) => (
                <div
                  className="py-1 hover:bg-neutral-100 hover:dark:bg-neutral-700"
                  role="none"
                  key={i}
                >
                  <Link href={item.destination}>
                    <a
                      onClick={() => setMenuOpen(false)}
                      className={`${item.eventClass} block px-4 py-2 text-sm `}
                      role="menuitem"
                      tabIndex={-1}
                      id={"menu-item-" + i}
                      title={item.altText}
                      data-action-detail={item.eventLabel}
                    >
                      {item.label}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {renderThemeChanger()}
        </div>
      </div>
      {menuOpen && (
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 h-full w-full cursor-default outline-none"
        ></button>
      )}
    </header>
  );
};

export default Header;
