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

const getCadetById = async (id) => {
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
    <EditCadetForm
      login={cadet.login}
      level={cadet.level}
      firstName={cadet.firstName}
      lastName={cadet.lastName}
      bhIn={cadet.bhIn}
      poolMonth={cadet.poolMonth}
      poolYear={cadet.poolYear}
      email={cadet.email}
      blackholedAt={cadet.blackholedAt}
    />
  );
}
