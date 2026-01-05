import { createContext, useState } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [notification, setNotification] = useState(null);

  const addMovie = (movie) => {
    setMovies((prev) => [...prev, { ...movie, id: Date.now() }]);
    setNotification("Movie added successfully ✅");
  };

  const updateMovie = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
    );
    setNotification("Movie updated successfully ✏️");
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((m) => m.id !== id));
    setNotification("Movie deleted successfully ❌");
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        addMovie,
        updateMovie,
        deleteMovie,
        notification,
        setNotification,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
