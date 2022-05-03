// Home Page Apenas Para Apresentar a tela ao Usuário, Usários separados pelo componente "Users" ('./Users/Users').

import React from "react";
import Users from './Users/Users'

import Data from '../Model/users.json'

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="header">
                <h1>Photouser</h1>
            </div>
            <div className="title">
                <h1>Clique em um usuário e veja suas fotos. <font color="#6d6d6d">Deslize o mouse para passar as fotos.</font></h1>
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
            <footer>
                <div className="footerDiv">
                    <div className="footerText">
                        <h3>M. Messias</h3>
                        <h4>Dev & UI/UX Designer</h4>
                        <div className="footerInfo">
                            <h4>+55 (77) 9 9105-7040</h4>
                            <h4>mmessiasdev@gmail.com</h4>
                            <p>Todos os direitos reservados®</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage;