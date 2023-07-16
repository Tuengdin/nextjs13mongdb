import EditCadetForm from "@/components/EditCadetForm";
import { NextResponse } from "next/server";

type CadetType = {
  id: string | number;
  login: string;
  level: string | number;
  firstName: string;
  lastName: string;
  bhIn: string | number;
  poolMonth: string;
  poolYear: string | number;
  email: string;
  blackholedAt: string | number;
};

const getCadetById = async (id: string) => {
  try {
    const res = await fetch(
      `https://nextjs13mongodb.vercel.app/api/cadets/${id}`,
      {
        // const res = await fetch(`http://localhost:3000/api/cadets/${id}`, {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to Fetch Data");
    }
    console.log(res.json());
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default async function EditCadet(params: any) {
  // console.log("params: ", params);
  const id = params.params.id;
  console.log("id: ", id);

  const cadet = await getCadetById(id);

  const {
    login,
    firstName,
    lastName,
    email,
    level,
    bhIn,
    poolMonth,
    poolYear,
    blackholedAt,
  } = cadet;
  console.log(cadet);
  return (
    <>
      <div className="bg-slate-200/75 p-4  my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Login: {cadet.login}</h2>
          <div>Firstname: {cadet.firstName}</div>
          <div>Lastname: {cadet.lastName}</div>
          <div>Email: {cadet.email}</div>
          <div>Level: {cadet.level}</div>
          <div>Blackhole in: {cadet.bhIn}</div>
          <div>Pool Month: {cadet.poolMonth}</div>
          <div>Pool Year: {cadet.poolYear}</div>
          <div>Blackholed at: {cadet.blackholedAt}</div>
        </div>
        <div className="flex gap-2"></div>
      </div>
    </>
  );
}
