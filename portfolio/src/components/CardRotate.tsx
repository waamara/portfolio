// src/components/CardRotate.tsx
import React from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";

interface CardRotateProps {
    children: React.ReactNode;
    onSendToBack: () => void;
    sensitivity: number;
}

const CardRotate: React.FC<CardRotateProps> = ({ children, onSendToBack, sensitivity }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Reduce the 3D rotation effect
    const rotateX = useTransform(y, [-100, 100], [10, -10]); // Reduced from 60 to 10
    const rotateY = useTransform(x, [-100, 100], [-10, 10]); // Reduced from 60 to 10

    function handleDragEnd(_: any, info: PanInfo) {
        if (
            Math.abs(info.offset.x) > sensitivity ||
            Math.abs(info.offset.y) > sensitivity
        ) {
            onSendToBack();
        } else {
            x.set(0);
            y.set(0);
        }
    }

    return (
        <motion.div
            className="absolute cursor-grab"
            style={{ x, y, rotateX, rotateY }}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={0.6}
            whileTap={{ cursor: "grabbing" }}
            onDragEnd={handleDragEnd}
        >
            {children}
        </motion.div>
    );
};

export default CardRotate;