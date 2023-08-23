import React from "react";
import Button from "../button/button";

const Header = () => {
    const tg = window.Telegram.WebApp;

    const onClose = () => {
        tg.close();
    }

    return (
        <div>
            <button onClick={onClose} >Close</button>
            <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
        </div>
    )
}

export default Header;