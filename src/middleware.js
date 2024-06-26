import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api", "/api/(.*)", "/favicon.ico", "/credentials"],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+.[w]+$)", "/dashboard"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
