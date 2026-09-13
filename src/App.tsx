import { Suspense } from "react";
import Banner from "./Banner";
import Nav from "./nav";
import Technologies from "./technologies";
import type { ITech } from "./Types/techtype";
import Footer from "./footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <Footer></Footer>
       <ToastContainer position="bottom-right"
        autoClose={2000}
        theme="light"/>
    </>
  );
}

export default App;