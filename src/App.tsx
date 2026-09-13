import { Suspense, useState } from "react";
import Banner from "./Banner";
import Nav from "./nav";
import Technologies from "./Technologies";
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



function App() {
  const [techPromise] = useState(()=> techFetch());
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<p>Loading...</p>}>
        <Technologies techPromise={techPromise} isSelected={false} />
      </Suspense>
      <Footer></Footer>
       <ToastContainer position="bottom-right"
        autoClose={2000}
        theme="light"/>
    </>
  );
}

export default App;