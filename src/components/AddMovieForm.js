import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";

export default function AddMovieForm() {
  const { addMovie } = useContext(MovieContext);

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !genre.trim() || !rating) return;

    addMovie({
      id: Date.now(),
      name,
      genre,
      rating
    });

    // ✅ CLEAR INPUTS (THIS WAS NOT WORKING BEFORE)
    setName("");
    setGenre("");
    setRating("");
  };

  const handleCancel = () => {
    setName("");
    setGenre("");
    setRating("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow space-y-4"
    >
      <h3 className="text-lg font-semibold">Add Movie</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Movie name"
        className="w-full px-4 py-2 border rounded"
      />

      <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
        className="w-full px-4 py-2 border rounded"
      />

      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating"
        className="w-full px-4 py-2 border rounded"
      />

      <div className="flex gap-3">
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Save
        </button>

        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 bg-gray-400 text-black rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
