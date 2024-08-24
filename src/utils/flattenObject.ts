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

export const ATTRIBUTES_TO_REMOVE: string[] = ['id', 'Login.uuid']

export function removeAttributes(
  obj: FlattenedObject,
  attributesToRemove: string[]
): FlattenedObject {
  const result: FlattenedObject = { ...obj }

  attributesToRemove.forEach((attr) => {
    delete result[attr]
  })

  return result
}
