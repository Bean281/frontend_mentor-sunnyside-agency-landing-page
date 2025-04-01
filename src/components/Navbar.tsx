"use client";

import Link from "next/link";

interface IHandleMenuProps {
  openModal: boolean;
}

export default function Navbar(props: IHandleMenuProps) {
  const { openModal } = props;

  return (
    <>
      {openModal && (
        <div className="container-navbar">
          <ul className="nav-ctn bg-neutral-white font-barlow text-neutral-grayish mx-10 flex h-70 flex-col items-center justify-between p-10 text-xl font-semibold">
            <li className="hover:bg-primary-yellow hover:text-neutral-desaturated relative ml-5 px-4 py-1 hover:rounded-4xl hover:px-2.25 hover:font-bold hover:uppercase">
              <Link href="/">About</Link>
            </li>
            <li className="hover:bg-primary-yellow hover:text-neutral-desaturated relative ml-5 px-4 py-1 hover:rounded-4xl hover:px-2.25 hover:font-bold hover:uppercase">
              <Link href="/">Services</Link>
            </li>
            <li className="hover:bg-primary-yellow hover:text-neutral-desaturated relative ml-5 px-4 py-1 hover:rounded-4xl hover:px-2.25 hover:font-bold hover:uppercase">
              <Link href="/">Projects</Link>
            </li>
            <li className="hover:bg-primary-yellow hover:text-neutral-desaturated relative ml-5 px-4 py-1 hover:rounded-4xl hover:px-2.25 hover:font-bold hover:uppercase">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
