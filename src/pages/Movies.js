import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieTable from "../components/MovieTable";

export default function Movies() {
  const { addMovie, updateMovie } = useContext(MovieContext);

  const [form, setForm] = useState({ name: "", genre: "", rating: "" });
  const [errors, setErrors] = useState({});
  const [editingId, setEditingId] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Movie name is required";
    } else if (form.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.genre.trim()) {
      newErrors.genre = "Genre is required";
    } else if (!/^[a-zA-Z ]+$/.test(form.genre)) {
      newErrors.genre = "Genre must contain only letters";
    }

    if (!form.rating) {
      newErrors.rating = "Rating is required";
    } else if (isNaN(form.rating)) {
      newErrors.rating = "Rating must be a number";
    } else if (form.rating < 0 || form.rating > 10) {
      newErrors.rating = "Rating must be between 0 and 10";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (editingId) {
      updateMovie({ ...form, id: editingId });
    } else {
      addMovie(form);
    }

    // reset form
    setForm({ name: "", genre: "", rating: "" });
    setEditingId(null);
    setErrors({});
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Movies</h2>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow"
      >
        <h3 className="font-semibold mb-4">
          {editingId ? "Edit Movie" : "Add Movie"}
        </h3>

        <input
          type="text"
          placeholder="Movie Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded mb-1"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="text"
          placeholder="Genre"
          value={form.genre}
          onChange={(e) => setForm({ ...form, genre: e.target.value })}
          className="w-full p-2 border rounded mt-3 mb-1"
        />
        {errors.genre && <p className="text-red-500 text-sm">{errors.genre}</p>}

        <input
          type="number"
          placeholder="Rating (0-10)"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          className="w-full p-2 border rounded mt-3 mb-1"
        />
        {errors.rating && (
          <p className="text-red-500 text-sm">{errors.rating}</p>
        )}

        <button
          type="submit"
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update" : "Save"}
        </button>
      </form>

      {/* TABLE */}
      <MovieTable setEditingId={setEditingId} setForm={setForm} />
    </div>
  );
}
