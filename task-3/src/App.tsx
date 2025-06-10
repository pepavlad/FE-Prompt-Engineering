import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL("./worker.ts", import.meta.url));

    worker.onmessage = (e) => {
      setD(e.data);
      worker.terminate();
    };

    worker.postMessage("start");

    return () => worker.terminate();
  }, []);

  return <div>{d}</div>;
}

export default App;
