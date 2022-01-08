import React from 'react'
import * as S from './styles'

type Props = {
  tittle: string;
  value: number;
  color?: string;
}

const ResumeItem = ({tittle,value,color}: Props) => {
  return (
    <S.Container>
      <S.Tittle>{tittle}</S.Tittle>
      <S.Info color={color}>R$ {value}</S.Info>
    </S.Container>
  )
}

export default ResumeItem
