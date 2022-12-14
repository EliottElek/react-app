import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 100);
  }, []);
  return <div style={{ fontSize: "30px" }}>{clockState}</div>;
}
export default Clock;
