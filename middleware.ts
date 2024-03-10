// import { authMiddleware } from "@clerk/nextjs";

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
//   publicRoutes: ["/"],
// };



// export default authMiddleware({});


import { authMiddleware } from "@clerk/nextjs";


export default authMiddleware({});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  publicRoutes: ["/"]
};