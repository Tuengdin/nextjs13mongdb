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
        <div
          key={c.id}
          className="bg-slate-200/75 p-4  my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">Login: {c.login}</h2>
            <div>Firstname: {c.firstName}</div>
            <div>Lastname: {c.lastName}</div>
            <div>Email: {c.email}</div>
            <div>Level: {c.level}</div>
            <div>Blackhole in: {c.bhIn}</div>
            <div>Pool Month: {c.poolMonth}</div>
            <div>Pool Year: {c.poolYear}</div>
            <div>Blackholed at: {c.blackholedAt}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn />
            <Link href={`/EditCadet/123`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
