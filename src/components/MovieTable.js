import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export default function MovieTable({ setEditingId, setForm }) {
  const { movies, deleteMovie } = useContext(MovieContext);

  return (
    <table className="w-full bg-white dark:bg-slate-800 rounded-xl shadow">
      <thead>
        <tr className="border-b">
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Genre</th>
          <th className="p-3 text-left">Rating</th>
          <th className="p-3 text-left">Action</th>
        </tr>
      </thead>

      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id} className="border-b">
            <td className="p-3">{movie.name}</td>
            <td className="p-3">{movie.genre}</td>
            <td className="p-3">{movie.rating}</td>
            <td className="p-3 flex gap-4">
              <button
                className="text-blue-600"
                onClick={() => {
                  setEditingId(movie.id);
                  setForm(movie);
                }}
              >
                Edit
              </button>

              <button
                className="text-red-600"
                onClick={() => deleteMovie(movie.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
