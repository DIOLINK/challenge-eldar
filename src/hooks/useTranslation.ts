import en from '@/translations/en'
import es from '@/translations/es'
import { useRouter } from 'next/router'

const useTranslation = () => {
  const { locale } = useRouter()

  const t = locale === 'en' ? en : es

  return { t, locale }
}

export default useTranslation
