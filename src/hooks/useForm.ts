'use client'
import { ChangeEvent, useState } from 'react'

export const useForm = <T extends object>(initialState: T) => {
  const [values, setValues] = useState(initialState)
  const reset = (newFormState = initialState) => setValues(newFormState)
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [event.target.name]: event.target.value })

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })

  return {
    ...values,
    values,
    handleInputChange,
    handleSelectChange,
    reset,
  }
}
