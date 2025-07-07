// src/components/Stack.tsx
import React, { useState } from 'react';
import { motion } from "framer-motion";
import CardRotate from "./CardRotate";
import TestimonialCard from "./TestimonialCard";
import { Testimonial } from '../testimonials';

interface StackProps {
    randomRotation?: boolean;
    sensitivity?: number;
    cardDimensions?: { width: number; height: number };
    cardsData: Testimonial[];
    animationConfig?: { stiffness: number; damping: number };
    sendToBackOnClick?: boolean;
}

const Stack: React.FC<StackProps> = ({
    randomRotation = false,
    sensitivity = 200,
    cardDimensions = { width: 400, height: 180 },
    cardsData = [],
    animationConfig = { stiffness: 260, damping: 20 },
    sendToBackOnClick = false
}) => {
    const [cards, setCards] = useState<Testimonial[]>(cardsData);

    const sendToBack = (id: number) => {
        setCards((prev) => {
            const newCards = [...prev];
            const index = newCards.findIndex((card) => card.id === id);
            const [card] = newCards.splice(index, 1);
            newCards.unshift(card);
            return newCards;
        });
    };

    return (
        <div
            className="relative"
            style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
                perspective: 600,
            }}
        >
            {cards.map((card, index) => {
                const randomRotate = randomRotation
                    ? Math.random() * 10 - 5
                    : 0;

                return (
                    <CardRotate
                        key={card.id}
                        onSendToBack={() => sendToBack(card.id)}
                        sensitivity={sensitivity}
                    >
                        <motion.div
                            className="rounded-2xl overflow-hidden"
                            onClick={() => sendToBackOnClick && sendToBack(card.id)}
                            animate={{
                                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                                scale: 1 + index * 0.06 - cards.length * 0.06,
                                transformOrigin: "90% 90%",
                            }}
                            initial={false}
                            transition={{
                                type: "spring",
                                stiffness: animationConfig.stiffness,
                                damping: animationConfig.damping,
                            }}
                            style={{
                                width: cardDimensions.width,
                                height: cardDimensions.height,
                            }}
                        >
                            <TestimonialCard testimonial={card} />
                        </motion.div>
                    </CardRotate>
                );
            })}
        </div>
    );
};

export default Stack;