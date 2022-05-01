// Home Page Apenas Para Apresentar a tela ao Usuário, Usários separados pelo componente "Users" ('./Users/Users').

import React from "react";
import Users from './Users/Users'

import Data from '../Model/users.json'

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="header">
                <h1>Fotos</h1>
            </div>
            <div className="title">
                <h1>Clique em um usuário e veja suas fotos.</h1>
            </div>
            <div className="divUsers">
                <div className="users">
                    {Data.map((results) => {
                        return <Users avatar={results.perfil} name={results.name} photo1={results.photo1} photo2={results.photo2} photo3={results.photo3} />
                    })}
                </div>  
                <div className="decoration">
                    <h1>Usuários</h1>
                </div>
                
            </div>
    
           
        </div>
    )
}

export default HomePage;