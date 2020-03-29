import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utilty';

const initialState = {
	orders: [],
	loading: false,
	purchased: false
};

const purchaseInit = (state) => {
	return updateObject(state, { purchased: false });
};

const purchaseStart = (state) => {
	return updateObject(state, { loading: true });
};

const purchaseFail = (state) => {
	return updateObject(state, { loading: false });
};

const purchaseBurgerSuccess = (state, action) => {
	const newOrder = updateObject(action.orderId, { id: action.orderId });
	return updateObject(state, {
		loading: false,
		purchased: true,
		orders: state.orders.concat(newOrder)
	});
};

const fetchOrdersSuccess = (state, action) => {
	return updateObject(state, {
		orders: action.orders,
		loading: false
	});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PURCHASE_INIT:
			return purchaseInit(state);
		case actionTypes.PURCHASE_BURGER_START:
		case actionTypes.FETCH_ORDERS_START:
			return purchaseStart(state);
		case actionTypes.PURCHASE_BURGER_FAIL:
		case actionTypes.FETCH_ORDERS_FAIL:
			return purchaseFail(state);
		case actionTypes.PURCHASE_BURGER_SUCCESS:
			return purchaseBurgerSuccess(state, action);
		case actionTypes.FETCH_ORDERS_SUCCESS:
			return fetchOrdersSuccess(state, action);
		default:
			return state;
	}
};

export default reducer;
