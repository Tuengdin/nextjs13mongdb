import Link from "next/link";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="font-bold text-white" href={"/"}>
        TdinCoding.
      </Link>
      <Link className="text-black-800  bg-white px-5 py-2" href={"/AddCadet"}>
        Add Cadet
      </Link>
    </nav>
  );
};
export default Navbar;
