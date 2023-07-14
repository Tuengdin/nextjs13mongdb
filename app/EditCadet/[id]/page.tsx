import EditCadetForm from "@/components/EditCadetForm";

export default function EditCadet() {
  return (
    <div>
      <EditCadetForm />
      <form className="bg-slate-200/75 p-4  my-3 flex flex-col justify-between gap-5 items-start">
        <input
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="login"
        />
        <input
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Firstname"
        />
        <input
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Lastname"
        />
        <input
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Email"
        />
        <input
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Level"
        />
        <input
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Blackholed in"
        />
        <input
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Pool Month"
        />
        <input
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Pool Year"
        />
        <input
          className="border border-slate-500  px-8 py-2"
          type="text"
          placeholder="Blackholed at"
        />
        <button className="bg-green-500 font-bold text-white py-3 px-6 w-fit">
          Update Cadet Data
        </button>
      </form>
    </div>
  );
}
