import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";

export default function MovieForm() {
  const { addMovie } = useContext(MovieContext);

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !genre || !rating) {
      alert("All fields required");
      return;
    }

    addMovie({
      name,
      genre,
      rating: parseFloat(rating),
    });

    // ✅ CLEAR INPUTS AFTER SAVE
    setName("");
    setGenre("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Movie name"
        className="input"
      />

      <input
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
        className="input"
      />

      <input
        type="number"
        step="0.1"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating"
        className="input"
      />

      <button className="btn-primary">Save</button>
    </form>
  );
}
