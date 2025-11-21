import { motion } from 'framer-motion'

import { contactChannels } from '../content'
import { useClipboardFeedback } from '../hooks/useClipboardFeedback'
import { useScrollDepth } from '../hooks/useScrollDepth'

const icons = {
  phone: (
    <path
      d="M6 3L5 5C5 5 5.5 6.5 7 8C8.5 9.5 10 10 10 10L12 9L13 12C13 12 10.5 13 10 13C9.5 13 5 11.5 3 9C0.5 6.5 0 2 0 2L3 3Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      fill="none"
    />
  ),
  mail: (
    <>
      <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.25" fill="none" />
      <path d="M1 5L8 9L15 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" fill="none" />
    </>
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="12" height="12" rx="4" stroke="currentColor" strokeWidth="1.25" fill="none" />
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.25" fill="none" />
      <circle cx="11.5" cy="4.5" r="0.8" fill="currentColor" />
    </>
  ),
}

export const ContactPanel = () => {
  const showSticky = useScrollDepth(0.55)
  const { copiedId, copy } = useClipboardFeedback()

  return (
    <section className="section contact" id="contact">
      <header className="contact__header">
        <p className="label">Contact & order</p>
        <h2>Text, call or request a bespoke arm party</h2>
        <p>Copy tap-enabled. Long-press on mobile triggers haptic feedback for quick saves.</p>
      </header>

      <div className="contact__cards">
        {contactChannels.map((channel, index) => (
          <motion.div
            key={channel.id}
            className={`contact__card glass ${copiedId === channel.id ? 'contact__card--active' : ''}`}
            onClick={() => copy(channel.id, channel.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                copy(channel.id, channel.value)
              }
            }}
            role="button"
            tabIndex={0}
            style={{ transitionDelay: `${index * 0.08}s` }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="contact__card-content">
              <span className="contact__icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 16 16">
                  {icons[channel.icon]}
                </svg>
              </span>
              <div>
                <p className="contact__label">{channel.label}</p>
                <p className="contact__value">{channel.value}</p>
              </div>
            </div>

            <div className="contact__actions">
              <span className="contact__action">Tap to copy</span>
              <a href={channel.href} target={channel.action === 'external' ? '_blank' : undefined} rel="noreferrer">
                Open
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={`contact__cta glass ${showSticky ? 'contact__cta--visible' : ''}`}>
        <div>
          <p className="label">Ready when you are</p>
          <p className="contact__cta-title">Book a private showing</p>
        </div>
        <div className="contact__cta-buttons">
          <a className="cta cta--primary" href="mailto:karen.pagenstert@yahoo.de">
            Email Karen
          </a>
          <a className="cta cta--ghost" href="tel:+4917662163294">
            Call now
          </a>
        </div>
      </div>

      <div className={`contact__toast ${copiedId ? 'contact__toast--visible' : ''}`}>
        Copied {copiedId === 'phone' ? 'phone number' : 'contact'} ✨
      </div>
    </section>
  )
}

