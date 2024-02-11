import { signIn, signOut } from "@/lib/auth/auth";

export const handleGoogleLogin = async () => {
  await signIn("google");
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};
