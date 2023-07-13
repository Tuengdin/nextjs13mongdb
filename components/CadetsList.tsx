import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const CadetsList = () => {
  return (
    <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
      <div>
        <h2 className="font-bold text-2xl">Cadets Login</h2>
        <div>Firstname</div>
        <div>Lastname</div>
        <div>Email</div>
        <div>Level</div>
        <div>BH in</div>
        <div>Pool Month</div>
        <div>Pool Year</div>
        <div>Blackholed at</div>
      </div>
      <div className="flex gap-2">
        <RemoveBtn />
        <Link href={"/editCadet/123"}>
          <HiPencilAlt size={20} />
        </Link>
      </div>
    </div>
  );
};
export default CadetsList;
