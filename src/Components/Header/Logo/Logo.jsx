import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoStyledContainer } from '../../../StyledComponents/Containers/LogoStyledContainer'
import '../style.css'

export const Logo = () => {
  let navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/')
    window.location.reload()
  }
  return (
    <LogoStyledContainer>
      <h1 onClick={()=>handleClick()} style={{cursor:'pointer'}}>Amasong</h1>
    </LogoStyledContainer>
  )
}
