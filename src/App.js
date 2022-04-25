import React, {useState, useEffect}from 'react';
import './App.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ChatListItem from './components/ChatListItem';
export default () =>{
  const [chatlist, setChatList] = useState([{},{},{}])

  return(
    <div className='app-window'>
      <div className='sidebar'>
        <header>
          <img className='header--avatar' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt='' />
          <div className='header--buttons'>
            <div className='header--btn'>
            <DonutLargeIcon style={{color : '#919191'}}/>
            </div>
            <div className='header--btn'>
            <ChatIcon style={{color : '#919191'}}/>
            </div>
            <div className='header--btn'>
            <MoreVertIcon style={{color : '#919191'}}/>
            </div>
          </div>
        </header>
        <div className='search'>
          <div className='search--input'>
            <SearchIcon fontSize='small' style={{color:'#919191'}}/>
            <input type='search' placeholder='Preocurar ou começar uma nova conversa' />
          </div>
        </div>
        <div className='chatlist'>
        {chatlist.map((item, key)=>(
          <ChatListItem />
        ))}
        </div>
      </div>
    
      <div className='contentarea'>

      </div>
    
    
    
    
    </div>
  )
}