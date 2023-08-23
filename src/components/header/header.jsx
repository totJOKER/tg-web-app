import React from "react";
import Button from "../button/button";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
    const {user, onClose} = useTelegram();


    return (
        <div>
            <button onClick={onClose} >Close</button>
            <span className={'username'}>{user?.username}</span>
        </div>
    )
}

export default Header;