"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// TODO
const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard", { scroll: false });
  }, []);
  return <div></div>;
};

export default Homepage;
