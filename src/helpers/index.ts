export const isEmpty = <T>(array: T[] = []): boolean => {
  return array.length === 0
}

export const isFrontend = () => typeof window !== 'undefined'

export const getItemLocalStorage = <T>(key: string, initialValue: T): T => {
  try {
    if (isFrontend()) {
      const item = window.localStorage.getItem(key)

      if (item) {
        try {
          const parsedItem = JSON.parse(item)
          return parsedItem as T
        } catch (parseError) {
          console.error('Error parsing JSON from localStorage:', parseError)
          return initialValue
        }
      }
    }
  } catch (error) {
    console.error('Error getItemLocalStorage:', error)
  }
  return initialValue
}

export function isPathname(path: string, location: string): boolean {
  return location.toLowerCase() === path.toLowerCase()
}
