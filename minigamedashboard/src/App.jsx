// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
//       <Navbar />
//       <main className="flex-1">
//         <Home />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { motion } from "framer-motion";
function App() {
  return (
    // <div className="min-h-screen flex flex-col
    //   bg-gray-100 text-gray-900
    //   dark:bg-gray-900 dark:text-gray-100
    //   transition-colors duration-300"
    // >
    //   <Navbar />

    //   <main className="flex-1">
    //     <Home />
    //   </main>

    //   <Footer />
    // </div>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col
        bg-gray-100 text-gray-900
        dark:bg-gray-900 dark:text-gray-100
        transition-colors duration-300"
    >
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;