import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from 'components/core/Button'
import Input from 'components/core/Input'
import SelectColors from 'components/core/SelectColors'
import * as S from './FormNewGroupColors.styles'

export type SubmitData = {
  name: string
  colors: string[]
}

type NewGroupColorForm = {
  name: string
}

type FormNewGroupColorsProps = {
  onSubmit: (data: SubmitData) => void
  isPending?: boolean
}

function FormNewGroupColors({
  onSubmit,
  isPending,
}: FormNewGroupColorsProps): JSX.Element {
  const [colors, setColors] = useState<string[]>([])
  const { register, handleSubmit } = useForm<NewGroupColorForm>({
    defaultValues: { name: '' },
  })

  const handleNewGroupColorsSubmit = handleSubmit((data) =>
    onSubmit({ ...data, colors })
  )

  return (
    <S.Form onSubmit={handleNewGroupColorsSubmit}>
      <Input {...register('name')} placeholder="Nome grupo de cores" />
      <SelectColors onSelected={(colrs) => setColors(colrs)} />
      <Button
        disabled={!!isPending}
        themeColor="primary"
        type="submit"
        label="Cadastrar"
      />
    </S.Form>
  )
}

export default FormNewGroupColors
