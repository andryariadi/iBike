import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { connectToDB } from "../database";
import User from "../database/userSchema";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  // console.log({ credentials }, "<-----diauth");
  try {
    connectToDB();

    const user = await User.findOne({ username: credentials.username });
    // console.log(user, "<-----diauth");

    if (!user) throw new Error("User not found!");

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

    if (!isPasswordCorrect) throw new Error("Invalid password!");

    return {
      id: user._id.toString(),
      name: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login!");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log({ user, account, profile }, "diauth");

      if (account?.provider === "github" || account?.provider === "google") {
        connectToDB();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.name,
              email: profile.email,
              imgUrl: profile.avatar_url || profile.picture,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },
  },
});
