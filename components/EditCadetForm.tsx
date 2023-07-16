"use client";

import Cadet from "@/models/cadet";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

export default function EditCadetForm(
  cadet: CadetType
  // login,
  // level,
  // firstName,
  // lastName,
  // bhIn,
  // poolMonth,
  // poolYear,
  // email,
  // blackholedAt,
) {
  const [newLogin, setNewLogin] = useState(cadet.login);
  const [newFirstName, setNewFirstName] = useState(cadet.firstName);
  const [newLastName, setNewLastName] = useState(cadet.lastName);
  const [newEmail, setNewEmail] = useState(cadet.email);
  const [newLevel, setNewLevel] = useState(cadet.level);
  const [newBhIn, setNewBhIn] = useState(cadet.bhIn);
  const [newPoolMonth, setNewPoolMonth] = useState(cadet.poolMonth);
  const [newPoolYear, setNewPoolYear] = useState(cadet.poolYear);
  const [newBlackholedAt, setNewBlackholedAt] = useState(cadet.blackholedAt);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://nextjs13mongodb.vercel.app/api/cadets/${cadet.id}`,
        {
          // const res = await fetch(`http://localhost:3000/api/cadets/${cadet.id}`, {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            newLogin,
            newFirstName,
            newLastName,
            newEmail,
            newLevel,
            newBhIn,
            newPoolMonth,
            newPoolYear,
            newBlackholedAt,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to update Cadet");
      }
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-slate-200/75 p-4  my-3 flex flex-col justify-between gap-5 items-start">
      Edit Topic
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200/75 p-4  my-3 flex flex-col justify-between gap-5 items-start"
      >
        <input
          onChange={(e) => setNewLogin(e.target.value)}
          value={cadet.login}
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="login"
        />
        <input
          onChange={(e) => setNewFirstName(e.target.value)}
          value={cadet.firstName}
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Firstname"
        />
        <input
          onChange={(e) => setNewLastName(e.target.value)}
          value={cadet.lastName}
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Lastname"
        />
        <input
          onChange={(e) => setNewEmail(e.target.value)}
          value={cadet.email}
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => setNewLevel(e.target.value)}
          value={cadet.level}
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Level"
        />
        <input
          onChange={(e) => setNewBhIn(e.target.value)}
          value={cadet.bhIn}
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Blackholed in"
        />
        <input
          onChange={(e) => setNewPoolMonth(e.target.value)}
          value={cadet.poolMonth}
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Pool Month"
        />
        <input
          onChange={(e) => setNewPoolYear(e.target.value)}
          value={cadet.poolYear}
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Pool Year"
        />
        <input
          onChange={(e) => setNewBlackholedAt(e.target.value)}
          value={cadet.blackholedAt}
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
    </div>
  );
}
