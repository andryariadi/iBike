"use server";

import { signIn, signOut } from "@/lib/auth/auth";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleGoogleLogin = async () => {
  await signIn("google");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, passwordRepeat, imgUrl } = Object.fromEntries(formData);

  if (password !== passwordRepeat) return { error: "Passwords do not match" };

  try {
    connectToDB();

    if (!username) return { error: "Username is required!" };
    if (!email) return { error: "Email is required!" };
    if (!password) return { error: "Password is required!" };

    const userByUsername = await User.findOne({ username });
    const userByEmail = await User.findOne({ email });

    if (userByUsername) return { error: "Username already exists" };
    if (userByEmail) return { error: "Email already exists" };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      imgUrl,
    });

    await newUser.save();
    console.log("User created to DB");

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Failed to register!" };
  }
};
