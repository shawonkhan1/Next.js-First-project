"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="text-gray-500">লোডিং...</div>;
  }

  if (session) {
    return (
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="px-4 py-2 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition-colors"
      >
        লগআউট করুন
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
    >
      গুগল দিয়ে লগইন করুন
    </button>
  );
}
