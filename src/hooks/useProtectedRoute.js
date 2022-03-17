import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "./AuthContext";

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
