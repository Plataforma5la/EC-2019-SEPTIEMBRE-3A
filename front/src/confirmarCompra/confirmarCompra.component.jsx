import React from 'react'


export default function confirmarCompra({ user, handleSubmit, handleUserInput, totalCalculator }) {

    return (
        <div>
            <form className="formDireccion" onSubmit={(e) => handleSubmit(e, totalCalculator())}>
                <h3> ¿A donde te lo enviamos?</h3>
                <br></br>
                <input onChange={e => handleUserInput(e.target.value)} type="text" name="direccion"></input>
                <br></br>
                <br></br>
                <button id="aceptar" type="submit">Aceptar</button>
                <br></br>
                <br></br>
            </form>

        </div >
    )
}
