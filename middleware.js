import withAuth from "next-auth/middleware";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default withAuth({
  jwt: { decode: authOptions.jwt },
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});
