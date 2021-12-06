import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "./AuthContext";

// export function publicRoute(Component) {
//   return function PublicRoute(props) {
//     const auth = useAuth();
//     const router = useRouter();

//     if (auth.currentUser) {
//       router.replace("/");
//       return <h1>"Loading..."</h1>;
//     }
//     return <Component auth={auth} {...props} />;
//   };
// }

export function protectedRoute(Component) {
  return function ProtectedRoute(props) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.currentUser && typeof window !== "undefined") {
      router.replace("/signin");
      return null;
    }
    return <Component auth={auth} {...props} />;
  };
}
