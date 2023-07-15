import Link from "next/link";
import { useParams } from "next/navigation";

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

const default function CadetData { params: any; }) => typeof CadetData{
    return CadetData
}
// export default async function CadetsList({ params }) {
//   const id = params;
//   console.log("id: ", id);
//   return (
//     <>
//       Cadet Data
//       {/* {cadet.map((c: any) => (
//         <div
//           key={c.id}
//           className="bg-slate-200/75 p-4  my-3 flex justify-between gap-5 items-start"
//         >
//           <div>
//             <h2 className="font-bold text-2xl">Login: {c.login}</h2>
//             <div>Firstname: {c.firstName}</div>
//             <div>Lastname: {c.lastName}</div>
//             <div>Email: {c.email}</div>
//             <div>Level: {c.level}</div>
//             <div>Blackhole in: {c.bhIn}</div>
//             <div>Pool Month: {c.poolMonth}</div>
//             <div>Pool Year: {c.poolYear}</div>
//             <div>Blackholed at: {c.blackholedAt}</div>
//           </div>
//         </div>
//       ))} */}
//     </>
//   );
// }
