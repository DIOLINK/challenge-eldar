import useTranslation from '@/hooks/useTranslation'
import { ContentFormsTemplate } from '@/template'
import { FormSignUp } from '../Views/Auth/FormSignUp'

type DialogEditProps = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}
export const DialogEdit = ({ onSubmit }: DialogEditProps) => {
  const { t } = useTranslation()
  return (
    <ContentFormsTemplate
      isIcon={false}
      title={t.pages.auth.signup.title}
      formElement={<FormSignUp />}
      onSubmit={onSubmit}
    />
  )
}
