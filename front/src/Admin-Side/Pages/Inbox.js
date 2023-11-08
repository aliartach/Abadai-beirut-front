import Message from "../Components/Message";
import '../Styles/Inbox.css'
import HeaderAdmin from "../Components/HeaderAdmin";
import { useState, useEffect } from "react";
import axios from "axios";
const Inbox = ()=>{

   const [data, setData] = useState([]);// initializing data state

useEffect(() => {
  axios.get('http://localhost:4000/api/inbox/')
    .then((response) => {
      console.log('Fetched existing category data:', response.data);
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

    const messages = [
        {
          "id":123,
          "firstName":"Mashawi",
          "lastName":"mashawi.png",
          "email":"email@jhdbckad.com",
          "status":false,
          "message":"hello how are you"
        },
        {
            "id":123,
            "firstName":"Mashawi",
            "lastName":"mashawi.png",
            "email":"email@jhdbckad.com",
            "status":true,
            "message":"hello how are you"
          },
          {
            "id":123,
            "firstName":"Mashawi",
            "lastName":"mashawi.png",
            "email":"email@jhdbckad.com",
            "status":false,
            "message":"hello how are you"
          },
          {
            "id":123,
            "firstName":"Mashawi",
            "lastName":"mashawi.png",
            "email":"email@jhdbckad.com",
            "status":true,
            "message":"hello how are you"
          },
        ,
        {
            "id":123,
            "firstName":"Mashawi",
            "lastName":"mashawi.png",
            "email":"email@jhdbckad.com",
            "status":false,
            "message":"hello how are you"
          },
        
        
      ]

    return(
        <div className="big-big-admin-container">
            <HeaderAdmin>Inbox</HeaderAdmin>
        
        <div className="Inbox-Container">
           
            
            {messages.map((message) => (
           
                <Message 
                firstName={message.firstName} 
                lastName={message.lastName} 
                email = {message.email}
                status = {message.status}
                message = {message.message}
                />
              ))}
              
          </div>
        </div>
    )
}

export default Inbox