"use client";

import { useState } from "react";
import { POST } from "../api/cadets/route";
import { useRouter } from "next/navigation";

type Props = {};
const EditCadet = (props: Props) => {
  const [login, setLogin] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("");
  const [bhIn, setBhIn] = useState("");
  const [poolMonth, setPoolMonth] = useState("");
  const [poolYear, setPoolYear] = useState("");
  const [blackholedAt, setBlackholedAt] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      !login ||
      !firstName ||
      !lastName ||
      !email ||
      !level ||
      !bhIn ||
      !poolMonth ||
      !poolYear ||
      !blackholedAt
    ) {
      alert("All Data are required.");
      return;
    }
    try {
      // const res = await fetch("http://localhost:3000/api/cadets", {
      const res = await fetch("https://nextjs13mongodb.vercel.app/api/cadets", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          login,
          firstName,
          lastName,
          email,
          level,
          bhIn,
          poolMonth,
          poolYear,
          blackholedAt,
        }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a Cadet");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-200/75 p-4  my-3 flex flex-col justify-between gap-5 items-start"
    >
      <input
        onChange={(e) => setLogin(e.target.value)}
        value={login}
        className="border border-slate-500  px-8 py-2"
        type="text"
        placeholder="login"
      />
      <input
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        className="border border-slate-500  px-8 py-2"
        type="text"
        placeholder="Firstname"
      />
      <input
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        className="border border-slate-500  px-8 py-2"
        type="text"
        placeholder="Lastname"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="border border-slate-500  px-8 py-2"
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setLevel(e.target.value)}
        value={level}
        className="border border-slate-500  px-8 py-2"
        type="text"
        placeholder="Level"
      />
      <input
        onChange={(e) => setBhIn(e.target.value)}
        value={bhIn}
        className="border border-slate-500  px-8 py-2"
        type="text"
        placeholder="Blackholed in"
      />
      <input
        onChange={(e) => setPoolMonth(e.target.value)}
        value={poolMonth}
        className="border border-slate-500  px-8 py-2"
        type="text"
        placeholder="Pool Month"
      />
      <input
        onChange={(e) => setPoolYear(e.target.value)}
        value={poolYear}
        className="border border-slate-500  px-8 py-2"
        type="text"
        placeholder="Pool Year"
      />
      <input
        onChange={(e) => setBlackholedAt(e.target.value)}
        value={blackholedAt}
        className="border border-slate-500  px-8 py-2"
        type="text"
        placeholder="Blackholed at"
      />
      <button
        type="submit"
        className="bg-green-500 font-bold text-white py-3 px-6 w-fit"
      >
        Update Cadet Data
      </button>
    </form>
  );
};
export default EditCadet;
