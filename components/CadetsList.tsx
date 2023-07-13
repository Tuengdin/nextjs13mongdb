import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

type CadetType = {
  id: String;
  login: String;
  level: String;
  firstName: String;
  lastName: String;
  bhIn: String;
  poolMonth: String;
  poolYear: String;
  email: String;
  blackholedAt: String;
};
const getCadets = async () => {
  try {
    // const res = await fetch("http://localhost:3000/api/cadets", {
    const res = await fetch("https://nextjs13mongodb.vercel.app/api/cadets", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch cadets");
    }
    return res.json();
  } catch (err) {
    console.log("Error loading cadets: ", err);
  }
};

export default async function CadetsList() {
  const { cadets } = await getCadets();

  return (
    <>
      {cadets.map((c: any) => (
        <div className="bg-slate-200/75 p-4  my-3 flex justify-between gap-5 items-start">
          <div key={cadets.id}>
            <h2 className="font-bold text-2xl">{c.login}</h2>
            <div>{c.firstName}</div>
            <div>{c.lastName}</div>
            <div>{c.email}</div>
            <div>{c.level}</div>
            <div>{c.bhIn}</div>
            <div>{c.poolMonth}</div>
            <div>{c.poolYear}</div>
            <div>{c.blackholedAt}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn />
            <Link href={`/editCadet/${c._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
