import './App.css';
import React,{ useState , useEffect } from 'react';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
// import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import Message from './Message';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
// import IconButton from '@mui/material';





function App() {

  const [input,setInput] = useState("");
  const [messages,setMessages] = useState([
  //   // {username:"Akshay",message:"Hello"},
  //   // {username:"Mahesh",message:"How are you"}
  ]);
  const [username,setUsername] = useState("");

  useEffect(()=>{
    db.collection("messages")
    .orderBy("timestamp","desc")
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id: doc.id, message: doc.data()})))
    });
  },[])

 

  console.log(input)
  console.log(messages)

  const sendMessage = (event) =>{
    event.preventDefault();
    db.collection("messages").add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, {username:username,message:input}])
    setInput("")

  }

  useEffect(()=>{
    setUsername(prompt("Enter user name"))
  },[])

  return (
    <div className="App">
      <img className='Logo' style={{width:"80px", height:"80px", marginTop:"10px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" alt="" />
      <h1 style={{color:"white"}}>Facebook Messenger</h1>
      <h2 style={{color:"white"}}>Welcome {username}</h2>

      <form className='app__form' >
      <FormControl className='app__formControl'>
        {/* <InputLabel>Enter a message...</InputLabel> */}
        <Input className="app__input" placeholder="Enter a message..." value={input} 
          onChange={(event)=>{
            setInput(event.target.value)
          }
        }/>
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color = "primary" type="submit" onClick={sendMessage}>
          <SendIcon />
        </IconButton>

        {/* <Button disabled={!input} variant="contained" color = "primary" type="submit" onClick={sendMessage} ></Button> */}
        

      </FormControl>
        {/* <input 
          value={input} 
          onChange={(event)=>{
            setInput(event.target.value)
          }
        }/>
        <Button disabled={!input} variant="contained" color = "primary" type="submit" onClick={sendMessage}>Send message</Button> */}
      </form>

      <FlipMove>

      {
        messages.map(({id,message})=>( 
          <Message key={id} username = {username} message={message}/>
          // <p> {message} </p>
        ))
      }

      </FlipMove>




    </div>
  );
}

export default App;
