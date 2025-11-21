import { cubicBezier, motion, type Variants } from 'framer-motion'
import type { CSSProperties } from 'react'

import { manifestoLine, pulseLine } from '../content'

const heroEase = cubicBezier(0.19, 1, 0.22, 1)

const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + index * 0.08,
      duration: 0.8,
      ease: heroEase,
    },
  }),
}

export const Hero = () => {
  return (
    <section className="section hero" id="top">
      <div className="hero__background">
        <div className="hero__gradient" />
        <div className="hero__particles">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              style={
                {
                  animationDelay: `${index * 0.35}s`,
                  '--i': index,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <div className="hero__content">
        <motion.p
          className="hero__label label"
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Handcrafted adornments · Germany
        </motion.p>

        <motion.h1
          className="hero__name"
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Karen Pagenstert
        </motion.h1>

        <motion.p
          className="hero__descriptor"
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Handcrafted adornments. Modern ritual.
        </motion.p>

        <motion.p
          className="hero__mantra"
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          {manifestoLine}
        </motion.p>

        <div className="hero__cta-row">
          <motion.a
            href="mailto:karen.pagenstert@yahoo.de"
            className="cta cta--primary"
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            Book a private showing
          </motion.a>

          <motion.a
            href="https://instagram.com/atelier.karen"
            target="_blank"
            rel="noreferrer"
            className="cta cta--ghost"
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            Request bespoke set
          </motion.a>
        </div>

        <motion.div
          className="hero__pulse"
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          <span className="pulse-dot" />
          <p>{pulseLine}</p>
        </motion.div>
      </div>
    </section>
  )
}

