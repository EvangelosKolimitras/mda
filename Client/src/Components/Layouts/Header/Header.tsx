import React, { useState, useEffect } from "react";
import HeaderStyles from "./assets/styles/Header.module.scss";
import HeaderProps from './assets/ts/interfaces/Header.interface';
import Axios from "axios";

const Header: React.FC<HeaderProps> = (props) => {

  interface User{
    title:string,
    last: string,
    image:string,
    email: string
  }
  const user:User = {
    title:"No title",
    last:"No last name",
    image:"https://simpleicon.com/wp-content/uploads/user1.svg",
    email:"none"
  }

  const [userImage, setUserImage] = useState(user.image)
  const [userTitle, setUserTitle] = useState(user.title)
  const [userLast, setUserLast] = useState(user.last)
  const [userEmail, setUserEmail] = useState(user.email)

  useEffect(()=>{
    const getUserImage = async () =>{
      const response = await Axios.get("https://randomuser.me/api/")
      const data = await response.data.results[0];
      const last = data.name.last
      const title = data.name.title
      const image = data.picture.large
      const email = data.email

      setUserImage(image)
      setUserTitle(title)
      setUserLast(last)
      setUserEmail(email)
    }
    getUserImage()
  },[])

  return (
    <header className={HeaderStyles.Header}>
      <div className={HeaderStyles.Header__userImage}>
        <img src={userImage && userImage || "https://img.icons8.com/officel/2x/user.png" } alt=""/>
      </div>
      <div className={HeaderStyles.Header__title}>
      <h1>{`${userTitle} ${userLast}`}</h1>
      <small>{userEmail}</small>
      </div>
      {props.children}
    </header>
  );
};

export default Header;
