import { authConfig } from "./api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginPage from "./components/login/Login";

const LoginHomPage = async () => {
  const session = await getServerSession(authConfig);
  if (session?.user) {
    redirect("/dashboard/questions");
  }

  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default LoginHomPage;
