import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubSignInButton from "@/app/components/GithubSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }

  return (
    <div className="mt-24 rounded bg-black/80 px-6 py-10 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signin">
        <h1 className="text-3xl font-semibold text-white">Login</h1>
        <div className="mt-5 space-y-4">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="inline-block w-full bg-[#333] placeholder:text-xs placeholder:text-gray-400"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Login
          </Button>
        </div>
      </form>

      <div className="mt-2 text-sm text-gray-500">
        New to Netflix ?{" "}
        <Link href="/sign-up" className="text-white hover:underline">
          Login now!
        </Link>
      </div>

      <div className="mt-6 flex w-full items-center justify-center gap-x-3">
        <GithubSignInButton />

        <GoogleSignInButton />
      </div>
    </div>
  );
}
