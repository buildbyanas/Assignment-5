import { Suspense } from "react";
import Banner from "./Banner";
import Nav from "./nav";
import Technologies from "./technologies";
import type { ITech } from "./Types/techtype";


const techFetch = async (): Promise<ITech[]> => {
  const res = await fetch("/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data.json");
  }

  return res.json();
};

// Keep the promise outside App
const techPromise = techFetch();

function App() {
  return (
    <>
      <Nav />
      <Banner />

      <Suspense fallback={<p>Loading...</p>}>
        <Technologies techPromise={techPromise} />
      </Suspense>
    </>
  );
}

export default App;