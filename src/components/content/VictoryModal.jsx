import { motion, AnimatePresence } from "framer-motion";
import "../../styles/content/VictoryModal.css"

export default function VictoryModal({ isOpen, onClose, score, highScore }) {

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 0.2, type: "spring", stiffness: 120 } },
    exit: { scale: 0.8, opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>🏆 You Win!</h2>
            <p>Final Score: {score}</p>
            <p>High Score: {highScore}</p>
            <button onClick={onClose}>Play Again</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}