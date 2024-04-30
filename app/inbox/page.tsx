import React from "react";
import Conversation from "../components/inbox/Conversation";

type Props = {};

function InboxPage({}: Props) {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
      <h1 className="mt-6 mb-2 text-2xl">My inbox</h1>

      <Conversation />
      <Conversation />
      <Conversation />
    </main>
  );
}

export default InboxPage;
