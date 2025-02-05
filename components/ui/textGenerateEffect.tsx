// @NOTE: in case you are using Next.js
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type TextGenerateEffectExampleProps = {
  text: string;
  duration?: number;
};

export function TextGenerateEffectExample({
  text,
  duration,
}: TextGenerateEffectExampleProps) {
  //   const text = `This is a text generate effect component.`
  return <TextGenerateEffect text={text} preset="char" duration={duration} />;
}

type TextGenerateEffectProps = {
  text: string;
  duration?: number;
  preset?: "char" | "word";
} & React.ComponentProps<"span">;

export function TextGenerateEffect({
  text,
  duration = 0.3,
  className,
  preset = "char",
}: TextGenerateEffectProps) {
  return (
    <motion.div className="inline whitespace-normal break-words">
      {preset === "char"
        ? text.split("").map((char, index) => (
            <motion.span
              key={char + index}
              className={cn("whitespace-normal inline", className)}
              initial={{ opacity: 0, filter: "blur(4px)", rotateX: 90, y: 5 }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                rotateX: 0,
                y: 0,
              }}
              transition={{
                ease: "easeOut",
                duration: duration,
                delay: index * 0.015,
              }}
              viewport={{ once: true }}
            >
              {char}
            </motion.span>
          ))
        : text.split(" ").map((word, index) => (
            <motion.span
              key={word + index}
              className={cn(
                "whitespace-normal inline text-neutral-400",
                className
              )}
              initial={{ opacity: 0, filter: "blur(4px)", rotateX: 90, y: 5 }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                rotateX: 0,
                y: 0,
              }}
              transition={{
                ease: "easeOut",
                duration: duration,
                delay: index * 0.015,
              }}
              viewport={{ once: true }}
            >
              {word}{" "}
            </motion.span>
          ))}
    </motion.div>
  );
}
