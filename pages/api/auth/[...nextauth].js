import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

// https://next-auth.js.org/configuration/options
export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "dev-email@flywheel.local",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        credentials['grant_type'] = "password";
        const res = await fetch(
          "http://server.local/oauth/token",
          {
            method: "POST",
            body: new URLSearchParams(credentials),
            headers: { "Content-Type": "application/x-www-form-urlencoded", "Authorization": "Basic amU3dHBSazV4RmRBNVJNRTFuZ21jSDdhQXdqUVcyTVhaWHRnT2o1WDpQVXR5bktid0huejRqWG9rT0hEeHdYODNyajFXU2Z0dWRCajVCaWRq" },
          }
        );
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          try {
            // let a = jwt.verify(user.data.jwt, process.env.NEXTAUTH_SECRET, {
            //   algorithms: ["HS256"],
            // });
            return user;
          } catch (err) {
            return null;
          }
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  secret: "7d5bed9844bf7a295130ae937abe790b726c5ddc9d4aa2ceb762114ac0471cd0",
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 1 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: "/member/login",
    //signOut: "/auth/signout",
    //error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async session({ session, user, token }) {
      // const encodedToken = jwt.sign(token, process.env.NEXTAUTH_SECRET, {
      //   algorithm: "HS256",
      // });
      // session.id = token.id;
      // session.token = encodedToken;
      // return Promise.resolve(session);
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      session.refresh = token.refresh
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {

      // Persist the OAuth access_token to the token right after signin
      if (user) {
        token.accessToken = user.access_token
        token.refresh = user.refresh_token
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
