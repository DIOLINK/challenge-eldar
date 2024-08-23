import { FlattenedObject } from '@/types'

export function flattenObject<T extends object>(
  obj: T,
  parentKey: string = '',
  result: FlattenedObject = {}
): FlattenedObject {
  Object.keys(obj).forEach((key) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key
    const value = obj[key as keyof T]

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObject(value as T, newKey, result)
    } else {
      result[newKey] = value as string | number | boolean | null | undefined
    }
  })
  return result
}
