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
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardsData.length)
  }

  const handleDragNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardsData.length)
  }

  // Only show current card and next card (max 2 cards)
  const visibleCards = [cardsData[currentIndex], cardsData[(currentIndex + 1) % cardsData.length]]

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height + 12, // Only space for 2 cards
        perspective: "none",
      }}
    >
      {visibleCards.map((card, index) => {
        return (
          <CardRotate
            key={`${card.id}-${currentIndex}`} // Key changes to force re-render
            onSendToBack={handleDragNext}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-2xl overflow-hidden"
              onClick={() => sendToBackOnClick && handleNext()}
              animate={{
                rotateZ: 0,
                scale: 1 - index * 0.025,
                x: index * 6,
                y: index * 12,
                zIndex: 2 - index, // Only 2 layers
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
              <TestimonialCard testimonial={card} onNext={handleNext} />
            </motion.div>
          </CardRotate>
        )
      })}
    </div>
  )
}

export default Stack
