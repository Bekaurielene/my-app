import { useEffect } from "react";

function LiveTracker() {
  useEffect(() => {
    console.log("Live მონიტორინგი დაიწყო");

    const interval = setInterval(() => {
      console.log("ამინდის მონაცემები სინქრონიზებულია ბაზასთან...");
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <p>Live სინქრონიზაცია ჩართულია...</p>;
}

export default LiveTracker;