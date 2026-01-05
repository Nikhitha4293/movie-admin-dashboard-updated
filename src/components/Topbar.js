import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Topbar() {
  const theme = useContext(ThemeContext);

  // 🛡️ SAFETY GUARD
  if (!theme) return null;

  const { dark, setDark } = theme;

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-slate-900 text-white">
      <h1 className="text-lg font-bold">Admin Dashboard</h1>

      <button
        onClick={() => setDark(!dark)}
        className="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600"
      >
        {dark ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}
