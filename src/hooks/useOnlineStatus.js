import { useState, useEffect } from "react";
/**
A custom React hook that returns a boolean indicating whether the user is currently online or not.
@returns {boolean} - A boolean indicating whether the user is currently online or not.
*/
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]);
  return isOnline;
}
