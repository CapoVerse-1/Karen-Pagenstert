import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

import { products } from '../content'

const currency = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

export const FeaturedPieces = () => {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const handler = () => {
      const maxScroll = el.scrollWidth - el.clientWidth
      setProgress(maxScroll === 0 ? 0 : el.scrollLeft / maxScroll)
    }

    handler()
    el.addEventListener('scroll', handler, { passive: true })
    return () => el.removeEventListener('scroll', handler)
  }, [])

  const cards = useMemo(
    () =>
      products.map((product) => ({
        ...product,
        priceLabel: currency.format(product.price),
      })),
    []
  )

  return (
    <section className="section featured" id="pieces">
      <header className="featured__header">
        <p className="label">Featured pieces</p>
        <h2>Soft touch glassy stack</h2>
        <p className="featured__subline">
          Swipe for current highlights · each card reveals availability on tap
        </p>
      </header>

      <div className="featured__track" ref={trackRef}>
        {cards.map((product) => (
          <motion.article
            key={product.name}
            className="featured__card glass"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            whileHover={{ rotateX: -2, rotateY: 2, translateY: -8 }}
            whileTap={{ scale: 0.98 }}
          >
            <header>
              <span className="chip">{product.badge}</span>
              <h3>{product.name}</h3>
            </header>

            <AnimatedPrice amount={product.price} altPrice={product.altPrice} />

            <p className="featured__description">{product.description}</p>

            <button className="link-button" type="button">
              Reserve
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 4H12V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </motion.article>
        ))}
      </div>

      <div className="featured__progress">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
    </section>
  )
}

type AnimatedPriceProps = {
  amount: number
  altPrice?: string
}

const AnimatedPrice = ({ amount, altPrice }: AnimatedPriceProps) => {
  const priceRef = useRef<HTMLDivElement | null>(null)
  const inView = useInView(priceRef, { once: true, margin: '-20%' })
  const motionValue = useMotionValue(0)
  const display = useTransform(motionValue, (latest) => currency.format(Math.round(latest)))

  useEffect(() => {
    if (!inView) return
    motionValue.set(0)
    const controls = animate(motionValue, amount, { duration: 0.5, ease: 'easeOut' })
    return () => controls.stop()
  }, [amount, inView, motionValue])

  return (
    <div className="featured__price" ref={priceRef}>
      <motion.strong>{display}</motion.strong>
      {altPrice && <span>{altPrice}</span>}
    </div>
  )
}

