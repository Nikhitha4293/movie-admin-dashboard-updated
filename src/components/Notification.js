import { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";

export default function Notification() {
  const { notification, setNotification } = useContext(MovieContext);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification, setNotification]);

  if (!notification) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
      {notification}
    </div>
  );
}
