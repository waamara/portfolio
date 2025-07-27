"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import CardRotate from "./CardRotate"
import TestimonialCard from "./TestimonialCard"
import type { Testimonial } from "../testemonial"

interface StackProps {
  randomRotation?: boolean
  sensitivity?: number
  cardDimensions?: { width: number; height: number }
  cardsData: Testimonial[]
  animationConfig?: { stiffness: number; damping: number }
  sendToBackOnClick?: boolean
}

const Stack: React.FC<StackProps> = ({
  randomRotation = false,
  sensitivity = 50,
  cardDimensions = { width: 400, height: 180 },
  cardsData = [],
  animationConfig = { stiffness: 560, damping: 50 },
  sendToBackOnClick = false,
}) => {
  const [cards, setCards] = useState<Testimonial[]>(cardsData)

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev]
      const index = newCards.findIndex((card) => card.id === id)
      const [card] = newCards.splice(index, 1)
      newCards.unshift(card)
      return newCards
    })
  }

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height + cards.length * 8, // Add extra height for stacking
        perspective: "none",
      }}
    >
      {cards.map((card, index) => {
        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              className="rounded-2xl overflow-hidden"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                // No rotation at all
                rotateZ: 0,
                // Slight scale difference to show depth
                scale: 1 - index * 0.02,
                // Offset each card slightly to show the ones underneath
                x: index * 4,
                y: index * 8,
                // Z-index to ensure proper stacking
                zIndex: cards.length - index,
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
                position: "absolute",
              }}
            >
              <TestimonialCard testimonial={card} />
            </motion.div>
          </CardRotate>
        )
      })}
    </div>
  )
}

export default Stack
