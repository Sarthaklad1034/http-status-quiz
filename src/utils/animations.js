export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export const slideUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

export const popIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
};

export const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export const successAnimation = {
    scale: [1, 1.2, 1],
    rotate: [0, 10, -10, 0],
    transition: {
        duration: 0.5,
    },
};

export const errorAnimation = {
    x: [0, 10, -10, 10, -10, 0],
    transition: {
        duration: 0.5,
    },
};