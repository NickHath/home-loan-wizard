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
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';

const UPDATE_REAL_ESTATE_AGENT = 'UPDATE_REAL_ESTATE_AGENT';
const UPDATE_COST ='UPDATE_COST';
const UPDATE_DOWNPAYMENT ='UPDATE_DOWNPAYMENT';
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ADDRESS_1 ='UPDATE_ADDRESS_1';
const UPDATE_ADDRESS_2 ='UPDATE_ADDRESS_2';
const UPDATE_ADDRESS_3 ='UPDATE_ADDRESS_3';



function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_LOAN_TYPE :
            return Object.assign({}, state, {loanType: action.payload});

        case UPDATE_PROPERY_TYPE :
            return Object.assign({}, state, {propertyType: action.payload});
        case UPDATE_CITY :
            return Object.assign({}, state, { city: action.payload });
        case UPDATE_PROP:
            return Object.assign({}, state, { propsToBeUsedOn: action.payload })
        case UPDATE_FOUND:
            return Object.assign({}, state, { found: action.payload })

        case UPDATE_REAL_ESTATE_AGENT:
            return Object.assign({},state, { realEstateAgent: action.payload })
        case UPDATE_COST:
            return Object.assign({},state, { cost: action.payload } )
        case UPDATE_DOWNPAYMENT:
            return Object.assign({},state, { downPayment: action.payload } )
        case UPDATE_CREDIT:
            return Object.assign({},state, { credit: action.payload } )
        case UPDATE_HISTORY:
            return Object.assign({},state, { history: action.payload } )
        
        case UPDATE_ADDRESS_1:
            return Object.assign({},state, { addressOne: action.payload } )
        case UPDATE_ADDRESS_2:
            return Object.assign({},state, { addressTwo: action.payload } )
        case UPDATE_ADDRESS_3:
            return Object.assign({},state, { addressThree: action.payload } )
        
        default:
            return state;
    }
}


export function updateLoanType(loan){
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loan
    }
}


export function updatePropertyType(property){
    return {
        type: UPDATE_PROPERY_TYPE,
        payload: property
    }
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  }
}

export function updateProp(prop) {
  return {
    type: UPDATE_PROP,
    payload: prop
  }
}

export function updateFound(found) {
  return {
    type: UPDATE_FOUND,
    payload: found
  }
}

export function updateAgent(agent){
    return{
        type: UPDATE_REAL_ESTATE_AGENT,
        payload: agent
    }
}

export function updateCost(cost){
    return{
        type:UPDATE_COST,
        payload:cost
    }
}

export function updateDownPayment(downpayment){
    return{
        type: UPDATE_DOWNPAYMENT,
        payload: downpayment
    }
}

export function updateCredit(credit){
    return{
        type: UPDATE_CREDIT,
        payload: credit
    }
}

export function updateHistory(history){
    return{
        type: UPDATE_HISTORY,
        payload: history
    }
}

export function updateAddress1(address){
    return{
        type:UPDATE_ADDRESS_1,
        payload:address
    }
}
export function updateAddress2(address){
    return{
        type:UPDATE_ADDRESS_2,
        payload:address
    }
}
export function updateAddress3(address){
    return{
        type:UPDATE_ADDRESS_3,
        payload:address
    }
}

export default reducer;