import Image from "next/image";
import logo from "../../public/logo.webp";
import * as motion from "framer-motion/client";
import {
  containerVariantsWelcomeCard,
  dotVariantsWelcomeCard,
  itemVariantsWelcomeCard,
} from "./animationVariants";

interface Props {
  title?: string;
  subTitle?: string;
}

export default function WelcomeCard({ title, subTitle }: Props) {
  return (
    <motion.div
      className="relative p-8 bg-[#9667E0] text-white rounded-xl flex flex-col justify-center items-center m-10"
      variants={containerVariantsWelcomeCard}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariantsWelcomeCard}>
        <Image
          className="mb-3"
          src={logo}
          alt="Logo Cineflix"
          width={100}
          height={100}
        />
      </motion.div>

      <motion.h1
        className="text-4xl font-medium mb-4"
        variants={itemVariantsWelcomeCard}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-xl text-white/80 text-center max-w-md"
        variants={itemVariantsWelcomeCard}
      >
        {subTitle}
      </motion.p>
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center gap-2"
        variants={containerVariantsWelcomeCard}
      >
        {[1, 2, 3, 4, 5].map((step) => (
          <motion.div
            key={step}
            variants={dotVariantsWelcomeCard}
            className={`w-2 h-2 rounded-full ${
              step === 1 ? "bg-white" : "bg-white/50"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
