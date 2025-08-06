import { auth } from "@/auth";
import { redirect } from "next/navigation";

const LayoutPrivate = async ({ children }) => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return children;
};

export default LayoutPrivate;
