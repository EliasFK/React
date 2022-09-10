import React from "react";

export default props => [
    <h1 key='h1'>Bom dia {props.nome}, você tem {props.idade}!</h1>,
    <h2 key='h2'>Ola Elias</h2>
    ]


// export default props => 
//     <React.Fragment> 
//     <h1>Bom dia {props.nome}, você tem {props.idade}!</h1>
//     <h2>Ola Elias</h2>
//     </React.Fragment>

// export default props => 
//     <div> 
//     <h1>Bom dia {props.nome}, você tem {props.idade}!</h1>
//     <h2>Ola Elias</h2>
//     <div/>