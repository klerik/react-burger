import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import * as actionTypes from "../../store/actions";

class Checkout extends Component {
	checkOutCancelledHandler = () => {
		this.props.history.goBack();
	};

	checkOutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	};

	render () {
		return (
			<div>
				<CheckoutSummary
					ingredients={this.state.ingredients}
					checkOutCancelled={this.checkOutCancelledHandler}
					checkOutContinued={this.checkOutContinuedHandler}
				/>
				<Route
					path={this.props.match.path + '/contact-data'}
					render={
						(props) => (
							<ContactData
								ingredients={this.state.ingredients}
								price={this.state.totalPrice}
								{...props}
							/>
						)}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		ings: state.ingredients,
		price: state.totalPrice
	}
};

export default connect(mapStateToProps)(Checkout);
