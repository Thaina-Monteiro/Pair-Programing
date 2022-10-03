import React from "react";
import * as S from "./Style"


export default function Header() {
    return (
        <>
        <S.GlobalStyle />
        <S.Header>
            <div className="Menu"> 
            <h2>RC</h2>
            <nav>
                <ul>
                    <li> About</li>
                    <li>Recipes</li>
                    <li>Subscribe</li>
                </ul>
            </nav>
            </div>
            <div className="Receita"> 
                <h1>RECIPES</h1>
            </div>
        </S.Header>
        </>
    )
}