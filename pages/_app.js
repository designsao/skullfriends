import { useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import "../styles/globals.css";

const noAuthRequired = [
  "/login",
  "/signup",
  "/request",
  "/u/*",
  "/",
  "/u/[username]",
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log("APP, ", router);

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
