import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route"; // path ঠিক আছে কিনা চেক করো
import DashboardContent from "./DashboardContent"; // এই component টি client-side

export default async function DashboardPage() {
  // session check
  const session = await getServerSession(authOptions);

  if (!session) {
    // login না থাকলে home page-এ redirect
    redirect("/");
  }

  // session আছে → dashboard content দেখাবে
  return <DashboardContent />;
}
