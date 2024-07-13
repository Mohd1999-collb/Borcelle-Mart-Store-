import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={130} height={100} />
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Discover great deals and a vast selection at our Borcelle mart. Enjoy
          quick shipping, secure payments, and hassle-free returns.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              href="/"
            >
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              href="/wishlist"
            >
              {" "}
              Wishlist{" "}
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              href="/orders"
            >
              {" "}
              Orders{" "}
            </Link>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <Facebook />
            </Link>
          </li>

          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <Instagram />
            </Link>
          </li>

          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Twitter</span>
              <Twitter />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
