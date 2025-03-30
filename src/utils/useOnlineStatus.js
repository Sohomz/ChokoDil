import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setStatus(navigator.onLine);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
  });

  return status;
};

export default useOnlineStatus;
