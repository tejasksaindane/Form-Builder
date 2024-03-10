import { authMiddleware } from "@clerk/nextjs";

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  publicRoutes: ["/"],
};


// export default authMiddleware({});
export default authMiddleware({});


