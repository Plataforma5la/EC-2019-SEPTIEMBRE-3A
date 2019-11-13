import React from "react";
import { createProduct } from "../store/actions/productList";
import { connect } from "react-redux";
import EditProductComponent from "./EditProduct.component";
import { fetchSingleProductData, editSingleProduct } from "./../store/actions/singleProductData";


class EditProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: "",
            stock: "",
            img1Url: "",
            img2Url: "",
            product: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
    }

    componentDidMount() {
        this.props.fetchSingleProductData(this.props.match.params.productID)
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleDescription(event) {
        event.preventDefault()
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.description.length < 30) {
            alert("Mas de 30 caracteres por fa");
        }
        else {
            let newProduct = { ...this.state, id: this.props.match.params.productID }
            this.props.editSingleProduct(newProduct)
            this.props.history.push('/')
        }
    }



    render() {
        return (
            <EditProductComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                product={this.props.product}
                handleDescription={this.handleDescription}
            />
        );
    }
}


const mapDispatchToProps = dispatch => ({
    createProduct: product => dispatch(createProduct(product)),
    fetchSingleProductData: productId => dispatch(fetchSingleProductData(productId)),
    editSingleProduct: product => dispatch(editSingleProduct(product))
});

const mapStateToProps = state => (
    {
        product: state.singleProductData.singleProductData,
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProductContainer);
