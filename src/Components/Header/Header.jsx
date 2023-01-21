import React, { useEffect, useState } from "react";
import { Cart } from "./cart/Cart";
import { Logo } from "./Logo/Logo";
import { Navbar } from "./navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { setOffUser } from "../../Redux/User/UserActions/userAction";
import { useDispatch, useSelector } from "react-redux";
import './style.css'

export const Header = () => {
  const currentUser = useSelector(state=> state.user)
  console.log(currentUser)
  let [currentEmail, setCurrentEmail] = useState(null)
  let [currentId, setCurrentId] = useState(null)
  useEffect(()=>{
    if(currentUser){
      setCurrentEmail(currentUser.user.email)
      setCurrentId(currentUser.user.id)
    }
  })
  const dispatch = useDispatch()
  const signOut = ()=>{dispatch(setOffUser({email:null, id:null}))}
  const navigate = useNavigate()
  const signOutUser = ()=>{
    signOut()
    navigate('/')
    window.location.reload()
  }
  return (
    <div
      className="headerContainer"
    >
      <Logo />
      <Navbar user={currentEmail} />
      <div className="cartLogoAndSignOutContainer">
      {currentEmail && (
        <div
          className="signOutContainer"
        >
          {currentEmail}
          <button onClick={() => signOutUser()} className="signOutButton">Cerrar sesion</button>
        </div>
      )}
       <Cart id={currentId}/>
      </div>
    </div>
  );
};
