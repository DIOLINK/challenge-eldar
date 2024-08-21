import { Alegreya, Lato } from 'next/font/google'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})
const alegreya = Alegreya({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export { alegreya, lato }
