import React from 'react'


export default function confirmarCompra({ user, handleSubmit, handleUserInput }) {

    return (
        <div>
            <form className="formDireccion" onSubmit={handleSubmit}>
                ¿A donde te lo enviamos?
            <br></br>
                <input onChange={e => handleUserInput(e.target.value)} type="text" name="direccion"></input>
                <br></br>
                <button type="submit">Aceptar</button>
            </form>

        </div >
    )
}
