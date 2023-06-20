import { FC } from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

interface SignInProps {}

const SignIn: FC<SignInProps> = ({}) => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] ">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
        <p className="text-sm max-w-xs mx-auto">
          By Continuing, you are setting up Dev-Community account and agree to
          our Agreement and Privacy Policy.
        </p>
        {/* Sign in form */}
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-zinc-700">
          {" "}
          New to Dev-Community?{" "}
          <Link
            href="/sign-up"
            className="hover:text-zinc-600 text-sm underline underline-offset-4 "
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
