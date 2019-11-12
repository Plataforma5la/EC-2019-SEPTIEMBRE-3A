import React, { Component } from 'react'
import { connect } from "react-redux";
import Alert from 'react-bootstrap/Alert'

class confirmarCompra extends Component {
    render() {
        return (
            <div className="confirmarCompra">
                {this.props.user.username ?
                    (
                        "Por favor coloca tu direccion"
                    ) :
                    (
                        <Alert variant="danger"> Por favor inicia sesion para poder confirmar tu compra</Alert>
                    )}
            </div>
        )
    }
}

const mapStateToProps = ({ logged }) => ({
    user: logged.user
});

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUser()),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(confirmarCompra);