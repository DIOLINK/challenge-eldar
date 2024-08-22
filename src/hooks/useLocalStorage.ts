import { getItemLocalStorage, isFrontend } from '@/helpers'
import { useState } from 'react'

export const useLocalState = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() =>
    getItemLocalStorage(key, initialValue),
  )

  const setValue = (value: T) => {
    try {
      if (isFrontend()) {
        const valueToStore: T =
          value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error('Error useLocalState:', error)
    }
  }

  return [storedValue, setValue]
}
