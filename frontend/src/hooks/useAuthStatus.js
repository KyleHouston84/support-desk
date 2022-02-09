import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedin] = useState(false);
  const [loading, setLoading] = useState(true);

  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
    setLoading(false);
  }, [user]);

  return {loggedIn, loading};
}