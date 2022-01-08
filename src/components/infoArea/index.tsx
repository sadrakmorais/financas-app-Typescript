import React from 'react'
import * as S from './styles'
import {formatCurrentMonth} from '../../helpers/dateFilter'
import ResumeItem from '../resumeItem'

type Props ={
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense:number;
}

const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {


const handlePrevMonth = () =>{
  
  let [year, month] = currentMonth.split('-');
  let currentDate = new Date(parseInt(year), parseInt(month)-1 , 1)
  currentDate.setMonth(currentDate.getMonth()-1)
  onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)

}
const handleNextMonth = () =>{
  let [year, month] = currentMonth.split('-');
  let currentDate = new Date(parseInt(year), parseInt(month)-1 , 1)
  currentDate.setMonth(currentDate.getMonth()+1)
  onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)

  }

  return (
    <S.Container>

      <S.MonthArea>

        <S.MonthArrow onClick={handlePrevMonth}>❮</S.MonthArrow>
        <S.MonthTittle>{formatCurrentMonth(currentMonth)}</S.MonthTittle>
        <S.MonthArrow onClick={handleNextMonth}>❯</S.MonthArrow>

      </S.MonthArea>

      <S.ResumeArea>
        <ResumeItem tittle="Receitas" value={income}/>
        <ResumeItem tittle="Despesas" value={expense}/>
        <ResumeItem 
        tittle="Balanço" 
        value={income-expense}
        color={(income-expense) < 0 ? 'red' : 'green'}
        />  
      </S.ResumeArea>
      
    </S.Container>
  )
}

export default InfoArea
