import { AuthProvider } from "../src/hooks/AuthContext";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthProvider>
      <Layout>
        <AnimatePresence initial="false">
          <motion.div
            key={router.route}
            layout
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear" }}
            variants={{
              hidden: { opacity: 0, x: -200, y: 0 },
              enter: { opacity: 1, x: 0, y: 0 },
              exit: { opacity: 0, x: 0, y: -200 },
            }}
          >
            <motion.div layout>
              <Component {...pageProps} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
