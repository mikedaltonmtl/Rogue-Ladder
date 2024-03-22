'use client';

import { useState } from "react";
import Splash from "./components/Splash";

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {/* <div>HOME</div> */}
      {showModal && <Splash setShowModal={setShowModal} />}
      
    </>
  );
}
