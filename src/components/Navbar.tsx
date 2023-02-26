import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Image from 'next/image'

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
   <div className="flex items-center">
        <Link href="/">
            <div className="flex ml-5 p-5 space-x-5 items-center">
                <Image src="/my-face.png" alt="circle picture of me" width={75} height={75}/>
                <div className="text-xl font-bold">
                    Jakob Delossantos
                </div>
            </div>
        </Link>
        <div className="flex space-x-10 ml-auto mr-auto items-center">
            <div className={`text-base  ${
              router.asPath === "/About"
                ? "text-white font-bold dark:text-white"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}>
                <Link href="/About">
                    About
                </Link>
            </div>
            <div className={`text-base  ${
              router.asPath === "/Projects"
                ? "text-white font-bold dark:text-white"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}>
                <Link href="/Projects">
                    Projects
                </Link>
            </div>
            <div className={`text-base  ${
              router.asPath === "/Contact"
                ? "text-white font-bold dark:text-white"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}>
                <Link href="/Contact">
                    Contact
                </Link>
            </div>
            <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
    </div>
  );
}