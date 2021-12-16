import { AuthProvider } from "../src/hooks/AuthContext";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthProvider>
      <Layout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            key={router.route}
            initial={{ opacity: 0, x: "-100vw", scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: "100vw", scale: 1.2 }}
            transition={{ type: "linear", damping: 20, stiffness: 100 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
