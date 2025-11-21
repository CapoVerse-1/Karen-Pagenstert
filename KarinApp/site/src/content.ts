export type Product = {
  name: string
  price: number
  altPrice?: string
  description: string
  type: 'earring' | 'wristband'
  badge: string
}

export type ContactChannel = {
  id: string
  label: string
  value: string
  href: string
  action: 'tel' | 'mailto' | 'external'
  icon: 'phone' | 'mail' | 'instagram'
}

export const manifestoLine = 'Limited micro-batches, each piece signed.'

export const pulseLine = 'Recycled gold-fill & cruelty-free fibers.'

export const products: Product[] = [
  {
    name: 'TOHO ARMBÄNDER (einfach)',
    price: 12,
    altPrice: 'ohne Plättchen 10€',
    description: 'Fein abgestimmte Perlstränge für tägliche Layering-Looks.',
    type: 'wristband',
    badge: 'Essential',
  },
  {
    name: 'TOHO ARMBÄNDER (mit Gold/Silber)',
    price: 15,
    altPrice: 'ohne Plättchen 12€',
    description: 'Luxuriöse Metallakzente treffen auf milde Farbverläufe.',
    type: 'wristband',
    badge: 'Gilded',
  },
  {
    name: 'SILBER/GOLD ARMBÄNDER',
    price: 23,
    altPrice: 'ohne Plättchen 21€',
    description: 'Edle Bänder mit satiniertem Glanz und langlebiger Beschichtung.',
    type: 'wristband',
    badge: 'Signature',
  },
  {
    name: 'GLITZERPERLEN ARMBÄNDER',
    price: 23,
    altPrice: 'ohne Plättchen 21€',
    description: 'Kristalline Highlights für Abendlooks oder Bridal Moments.',
    type: 'wristband',
    badge: 'Crystal',
  },
  {
    name: 'GLASKRISTALLPERLEN ARMBÄNDER',
    price: 20,
    description: 'Transparente Reflexe erinnern an gefrostete Morgentau Tropfen.',
    type: 'wristband',
    badge: 'Frosted',
  },
  {
    name: 'ARMBÄNDER AUS GEMISCHTEN PERLEN',
    price: 20,
    description: 'Kuratiertes Mischspiel aus TOHO, Kristall & Perlmutt.',
    type: 'wristband',
    badge: 'Atelier',
  },
  {
    name: 'RINGE (dünn & dick)',
    price: 12,
    description: 'Flexibel, stapelbar und farbkorrigiert zu jedem Band.',
    type: 'earring',
    badge: 'Stackable',
  },
]

export const narrativeBlocks = [
  {
    title: 'Material Story',
    bullets: [
      'Recycelte Edelmetalle, nickel- und blei-frei.',
      'TOHO-Perlen in Micro-Batches gefärbt für präzise Farbharmonien.',
    ],
    microcopy: 'Jedes Stück erhält eine Karte mit Mischcodes & Pflegehinweisen.',
  },
  {
    title: 'Making Process',
    bullets: [
      'Von Hand gefädelte Muster mit doppelt versiegelten Knoten.',
      '72-Stunden Ruhezeit nach der Fertigung für maximale Formstabilität.',
    ],
    microcopy: 'Fertigung in Düsseldorf · persönliche Qualitätskontrolle durch Karen.',
  },
]

export const contactChannels: ContactChannel[] = [
  {
    id: 'phone',
    label: 'Phone',
    value: '+49 176 6216 3294',
    href: 'tel:+4917662163294',
    action: 'tel',
    icon: 'phone',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'karen.pagenstert@yahoo.de',
    href: 'mailto:karen.pagenstert@yahoo.de',
    action: 'mailto',
    icon: 'mail',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: '@atelier.karen',
    href: 'https://instagram.com/atelier.karen',
    action: 'external',
    icon: 'instagram',
  },
]

