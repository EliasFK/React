import React from 'react'
import ReactDOM  from 'react-dom'
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
//import Multi, { BoaNoite } from './componentes/Multiplos'
//import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome='Edson' sobrenome='Frank'>
        <Filho nome='Elias' />
        <Filho nome='Elizeu' />
        <Filho nome='Nayra' />
        </Pai>
        {/* <Saudacao tipo = "Bom dia" nome = "Elias"/> */}
        {/* <Multi.BoaTarde nome = 'Elias'/>
        <BoaNoite nome = 'Elizeu'/> */}
    </div>
    ,document.getElementById('root'))
//ReactDOM.render(<BomDia nome="Elizeu" idade={25}/>, document.getElementById('root'))