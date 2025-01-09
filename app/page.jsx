import React from "react"
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Toolbar from "./components/toolbar"

async function Home() {
  const session = await getServerSession(options)

  return (
    <div className="w-full flex-center flex-col">
      <Toolbar/>
    </div>
  );
};

export default Home;