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
        perspective: 'none', // Remove 3D perspective
      }}
    >
      {cards.map((card, index) => {
        // Much smaller rotation for cleaner look
        const randomRotate = randomRotation ? Math.random() * 3 - 1.5 : 0;
        
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
                // Much smaller rotation (1-2 degrees instead of 4)
                rotateZ: (cards.length - index - 1) * 1.5 + randomRotate,
                // Smaller scale difference
                scale: 1 + index * 0.02 - cards.length * 0.02,
                // Change transform origin for flatter look
                transformOrigin: "center center",
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