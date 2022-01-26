import React from 'react'
import { NavLink } from "react-router-dom";

const BtnAdicionar = ({ classe, nome }) => {
    return (<NavLink
        to="/produto/cadastrar"
        className={`${classe} flex items-center p-4 text-gray-900 bg-indigo-400 rounded-lg shadow-md cursor-pointer hover:bg-indigo-800 hover:text-gray-100`}
    >
        Adicionar{nome}
    </NavLink>
    )
}

export default BtnAdicionar
