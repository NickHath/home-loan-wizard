const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
};

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERY_TYPE = 'UPDATE_PROPERTY_TYPE';

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_LOAN_TYPE :
            return Object.assign({}, state, {loanType: action.payload});

        case UPDATE_PROPERY_TYPE :
            return Object.assign({}, state, {propertType: action.payload});

        default:
            return state;
    }
}


function updateLoan(loan){
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loan
    }
}


function updatePropertyType(property){
    return {
        type: UPDATE_PROPERY_TYPE,
        payload: property
    }
}


export default reducer;