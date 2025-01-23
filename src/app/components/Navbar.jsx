import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const navlink = (
    <>
      <Link
        href="/"
        className=" text-xl font-bold bg-white rounded-lg text-black px-4 py-2 mr-3 lg:mr-5"
      >
        Home
      </Link>
      <Link
        href={`${
          user
            ? "/profile"
            : "https://nextjsdemo001.kinde.com/auth/cx/_:nav&m:login&psid:019494429023176f0e7da992f01a5f88"
        }`}
        className=" text-xl font-bold bg-white rounded-lg px-4 py-2 text-black "
      >
        Profile
      </Link>
    </>
  );

  return (
    <div className="container mx-auto pr-2">
      <div className="flex justify-between items-center py-8">
        <div></div>
        <div>{navlink}</div>
        <div className="">
          {user ? (
            <LogoutLink className="text-xl font-bold bg-red-500 rounded-lg px-4 py-2 text-white">
              LogOut
            </LogoutLink>
          ) : (
            <LoginLink className="text-xl font-bold bg-white rounded-lg px-4 py-2 text-black">
              Login
            </LoginLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
