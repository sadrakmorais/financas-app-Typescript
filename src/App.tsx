import React,{useState,useEffect} from 'react'
import * as S from './App.styled'
import {GlobalStyle} from './globalStyles'
import {Item} from './types/Item'
import {Category} from './types/Category'
import {categories} from './data/categories'
import {items} from './data/items'
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter'
import TableArea from './components/table-area'
import InfoArea from './components/infoArea'
import InputArea from './components/inputArea'

const App = () => {

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)



  useEffect(() => {
    setFilteredList(filterListByMonth(list,currentMonth))

  }, [list,currentMonth])

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList){
      categories[filteredList[i].category].expense ? 
      expenseCount += filteredList[i].value : incomeCount += filteredList[i].value 
    }

    setIncome(incomeCount)
    setExpense(expenseCount)
  },[filteredList])


  const handleMonthChange = (newMonth: string) => {
   setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <>
    <GlobalStyle/>
    <S.Container>
      <S.Header>
        <S.HeaderTittle>Sistema Financeiro</S.HeaderTittle>
      </S.Header>
      <S.Body>
        <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
        />
        <TableArea list={filteredList}/>
        <InputArea onAdd={handleAddItem}/>
      </S.Body>

    </S.Container>
    </>
  )
}

export default App
