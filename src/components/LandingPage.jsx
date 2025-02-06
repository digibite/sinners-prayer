import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../App.css"; // Import the CSS file

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 1 }}
      >
        The Sinner’s Prayer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        &quot;Dear Lord Jesus, I know that I am a sinner, and I ask for Your
        forgiveness. I believe You died for my sins and rose from the dead. I
        turn from my sins and invite You to come into my heart and life. I want
        to trust and follow You as my Lord and Savior. Amen.&quot;
      </motion.p>
      {/* <motion.a
        href="#"
        className="button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Learn More
      </motion.a> */}
    </div>
  );
}
