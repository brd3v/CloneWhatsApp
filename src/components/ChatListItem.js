import React from 'react'
import './ChatListItem.css'

export default () => {
    return(
        <div className='chatListItem'>
            <img clasName='chatListItem--avatar' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt=''/>
            <div className='chatListItem--lines'>
                <div clasName='chatListItem--line'>
                    <div className='socorro'>
                    
                    <div className='chatListItem--name'>
                        Bruno Melo
                    </div>
                    <div className='chatListItem--date'>
                        19:00
                    </div>
                    </div>
                </div>
                <div clasName='chatListItem--line'>
                <div className='socorro'>
                    <div className='chatListItem--lastMsg'>
                        <p>
                            Opa, tudo bem?
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}