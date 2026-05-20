import { motion } from "framer-motion";

const TechCard = ({
  skill,
  index,
}) => {
  return (
    <motion.div
      className="floating-skill-card"
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
    >
      {skill}
    </motion.div>
  );
};

export default TechCard;