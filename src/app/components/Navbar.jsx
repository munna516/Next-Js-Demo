"use client";
import Link from "next/link";

const Navbar = () => {
  const navlink = (
    <>
      <Link href="/" className="btn text-xl mr-5">
        Home
      </Link>
      <Link href="/profile" className="btn text-xl ">
        Profile
      </Link>
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-8">
        <div></div>
        <div>{navlink}</div>
        <div>{
          
          }</div>
      </div>
    </div>
  );
};

export default Navbar;
