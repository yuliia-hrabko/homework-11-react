import React from "react";
import UserButton from "./UserButton";
import UserInfo from "./UserInfo";


const User = () => {
    
    const showInfoAboutUser = () => {
        const infoAboutUser = document.querySelector('.infoAboutUser')
        
        if(infoAboutUser.style.display === 'none'){
            infoAboutUser.style.display = 'block'
        }
    }
    return (
        <div style={{fontSize: '24px', textAlign: 'center'}}> 
            <UserButton clickOnButton={showInfoAboutUser}/>
            <div className="infoAboutUser" style={{display: 'none'}}>
                <UserInfo name={'Иван Иванов'} age={'25'} sex={'мужской'}/>
            </div>
        </div>
    )
}
export default User;
