import {login} from '../api/getData'

let defaultState = {
    auth: false,
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    nickname: '',
    phone: '',
    phone_country_code:'',
    currency: '',
    points:'',
    is_confirm:'',
    is_password_set: '',
    defaultAddress:'',
    has_payment_password:'',
    bookmark_store: '',
    bookmark_group_sale:'',
    bookmark_product :'',
    num_gift_cards: ''
};

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'change_username':
            newState.username = action.value;
            return newState;
        case 'change_password':
            newState.password = action.value;
            return newState;
        case 'change_last_name':
            newState.last_name = action.value;
            return newState;
        case 'login':
            newState.auth = true;//login(newState.username, newState.password);
            //console.log(newState.auth)
            // if(newState.auth){
            //     console.log("GOOD");
            // }else{
            //     console.log("NOOO");
            // }
            //console.log(newState.auth)
            return newState;
        case 'change_first_name':
            newState.first_name = action.value;
            return newState;
        case 'change_nickname':
            newState.nickname = action.value;
            return newState;
        case 'update':
            return newState;
        case 'refresh':
            return newState;
        case 'change_phone':
            newState.phone = action.value;
            return newState;
        case 'change_phone_country_code':
            newState.phone_country_code = action.value;
            return newState;
        case 'change_currency':
            newState.currency = action.value;
            return newState;
        case 'change_points':
            newState.points = action.value;
            return newState;
        case 'change_is_confirm':
            newState.is_confirm = action.value;
            return newState;
        case 'change_is_password_set':
            newState.is_password_set = action.value;
            return newState;
        case 'change_default_address':
            newState.defaultAddress = action.value;
            return newState;
        case 'change_has_payment_password':
            newState.has_payment_password = action.value;
            return newState;
        case 'change_bookmark_store':
            newState.bookmark_store = action.value;
            return newState;
        case 'change_bookmark_group_sale':
            newState.bookmark_group_sale = action.value;
            return newState;
        case 'change_bookmark_product':
            newState.bookmark_product = action.value;
            return newState;
        case 'change_num_gift_cards':
            newState.num_gift_cards = action.value;
            return newState;

        default:
            return state;
    }
}
