import Head from "next/head";
import App from "./App";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sky Scanner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <App />
      </main>
    </div>
  );
}
