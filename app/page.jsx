import React from "react"
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Toolbar from "./components/toolbar"

async function Home() {
  const session = await getServerSession(options)

  return (
    <div className="w-full flex-center flex-col">
      <p className="text-white text-center text-lg mb-4">
        Ideal Spaces
      </p>

      <div className="mt-20">
        <Toolbar/>
      </div>
    </div>
  );
};

export default Home;