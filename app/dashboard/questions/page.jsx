import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import { authConfig } from "@/app/api/auth/[...nextauth]/option";
import Question from "./Question";

const QuestionPage = async () => {
  const session = await getServerSession(authConfig);
  const token = session?.user?.token;

  if (!session) {
    signOut();
    redirect("/");
  }

  return (
    <>
      <Question token={token} />
    </>
  );
};

export default QuestionPage;
