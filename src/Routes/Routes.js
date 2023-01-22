import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import { LogIn } from "../Components/Session/LogIn";
import { Main } from "../Components/Main/Main";
import { SignUp } from "../Components/Session/SignUp";
import { FullCart } from "../Components/Header/cart/FullCart/FullCart";
import { UserAccount } from "../Components/Session/UserAccount";
import { PageNotFound } from "../Components/Main/NotFound/PageNotFound"
import { ProtectedRoute } from "./ProtectedRoute";
import { useSelector } from "react-redux";
import { CheckEmail } from "../Components/Session/UserForms/CheckEmail";
import { ChangePassword } from "../Components/Session/UserForms/ChangePassword";

export const RoutesComp = () => {
  const user = useSelector(state => state.user.user)
  let currentEmail = null
  let currentId = null
  if(user.email != null){
    currentEmail = user.email
    currentId = user.id
  }
 
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Main />} />
      <Route path={"/login"} element={currentEmail ? <UserAccount /> : <LogIn />} />
      <Route path="/signup" element={currentEmail ? <UserAccount /> : <SignUp />} />
      <Route
        path="/fullcart"
        element={
          <ProtectedRoute user={currentEmail} redirectTo="/login">
            <FullCart id={currentId}/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/account"
        element={
          <ProtectedRoute user={currentEmail} redirectTo="/login">
            <UserAccount id={currentId}/>
          </ProtectedRoute>
        }
      />
      <Route 
        path="/check-email"
        element={
          currentEmail?<Main />:<CheckEmail/>
        }
      />
      <Route 
        path="/new-password/:tkn"
        element={
          currentEmail?<Main/>:<ChangePassword/>
        }
      />
      <Route path="*" element={<PageNotFound/>}/>
    </ReactDomRoutes>
  );
};
