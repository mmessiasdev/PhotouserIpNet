// 1 - Criar Json
// 2 - Mapaer Json 

import React from "react";

const Users = ({avatar, name, photo1, photo2, photo3}) => {
    return (
        <div className="contUsers">
            <div className="user">
                <div className="avatar"><img src={avatar} alt="" srcset="" /></div>
                <div className="name">{name}</div>
            </div>
            <img src={photo1} alt="" />
            <img src={photo2} alt="" />
            <img src={photo3} alt="" />
        </div>

    )
}

export default Users;