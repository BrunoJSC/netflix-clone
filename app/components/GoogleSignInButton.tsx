"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import GooogleIcon from "../../public/google.svg";
import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size="icon">
      <Image src={GooogleIcon} alt="Google icon" className="h-6 w-6" />
    </Button>
  );
}
