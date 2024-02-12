export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      console.log({ token, user }, "<----diauthconfig1");
      if (user) {
        token.id = user._id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      console.log();
      ({ session, token }), "<----diauthconfig2";
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      console.log({ auth, request }, "<----diauthconfig3");

      const user = auth?.user;

      const isOnLoginPage = request.nextUrl.pathname === "/login";

      if (user && isOnLoginPage) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
