import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getProductsFromUser } from "../../Utils/getProductsFromUser";
import { server } from "../../Utils/vars";
import "./style.css";

export const UserAccount = () => {
  const user = useSelector((state) => state.user);
  const currentId = user.user.id;
  const currentToken = user.user.token;
  const [sellsUser, setSellsUser] = useState([]);
  const [purchasedItems, setPurchItems] = useState([]);
  useEffect(() => {
    async function data() {
      await axios
        .get(`${server}/sell/${currentId}`, {
          headers: {
            "x-access-token": `${currentToken}`,
          },
        })
        .then((res) => setSellsUser(res.data));
    }
    data();
  }, []);
  useEffect(() => {
    getProductsFromUser(sellsUser, currentToken).then((res) => {
      setPurchItems(res);
    });
  }, [sellsUser]);
  let date = new Date();
  let output =
    String(date.getDate()).padStart(2, "0") +
    "/" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "/" +
    date.getFullYear();
  return (
    <div className="shopsContainer">
      {purchasedItems.length > 0 ? (
        purchasedItems.map((c) => (
          <div key={Math.random()} className="shopContainer">
            <div style={{ width: "90%" }}>Pedido Realizado el: {output}</div>
            <div>
              {
                <div key={Math.random()} className="prodInShopContainer">
                  <div>{c.name}</div>
                  <div>
                    <img src={c.imgUrl} className="prodImg" />
                  </div>
                </div>
              }
            </div>
          </div>
        ))
      ) : (
        <div className="emptyShops">No has comprado ningun producto</div>
      )}
    </div>
  );
};
