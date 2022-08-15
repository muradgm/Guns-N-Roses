const pageVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
};

const pTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const textAnimation = {
  init: {
    opacity: 0,
    y: "100%",
  },
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: "100%",
  },
};
const transition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

export { pageVariants, pTransition, textAnimation, transition };
