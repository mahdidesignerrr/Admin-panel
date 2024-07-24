import { AnimatePresence, motion } from "framer-motion";

function Motion({ children }) {
   return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}

function MotionPage({ children, className = "" }) {
   return (
      <motion.div
         initial={{ scale: 0.95 }}
         animate={{ scale: 1, transition: { ease: "backOut", duration: 0.5 } }}
         exit={{ scale: 0.95, transition: { duration: 0.3, ease: "backIn" } }}
         className={className}
      >
         {children}
      </motion.div>
   );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};


function MotionMenus({ children }) {
   return (
      <motion.div
         initial="hidden"
         animate="visible"
         variants={containerVariants}
      >
         {children}
      </motion.div>
   );
}

function MotionMenuContainer({ children }) {
   return <motion.div variants={itemVariants}>{children}</motion.div>;
}

const AnimatedWrapper = ({ children, initialProps, animateProps, transitionProps }) => {
   return (
       <motion.div
           initial={initialProps || { opacity: 0, scale: 0.8 }}
           animate={animateProps || { opacity: 1, scale: 1 }}
           transition={transitionProps || { duration: 0.5 }}
       >
           {children}
       </motion.div>
   );
};


Motion.page = MotionPage;
Motion.wrapper = AnimatedWrapper;
Motion.menus = MotionMenus;
Motion.menuContainer = MotionMenuContainer;
export default Motion;
