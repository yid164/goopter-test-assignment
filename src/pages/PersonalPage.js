import React from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'

const UpdateProfile = (props) => {
    const { auth, nickname, first_name, last_name, phone, phone_country_code, currency, points, is_confirm, isConfirmChange,
        is_password_set, isPasswordSetChange, defaultAddress, defaultAddressChange, has_payment_password, hasPaymentPasswordChange,
        bookmark_store, bookmarkStoreChange, bookmark_group_sale, bookmarkGroupSaleChange,bookmark_product, bookmarkProductChange,
        num_gift_cards, numGiftCardsChange,
        nicknameChange, firstNameChange, lastNameChange, phoneChange, phoneCountryCodeChange, currencyChange, pointsChange,
        handleClick, handleRefresh } = props;
    if (!auth){
        return <Redirect to='/login'  />
    } else {
        return (
            <div>
                <div>
                    <h3>Welcome, {first_name}, {last_name}</h3>
                </div>
                <div>
                    <label>Nick Name: </label>
                    <input value={nickname} onChange={nicknameChange}/>
                </div>
                <div>
                    <label>First Name: </label>
                    <input value={first_name} onChange={firstNameChange}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input value={last_name} onChange={lastNameChange}/>
                </div>
                <div>
                    <label>Phone Number: </label>
                    <input value={phone} onChange={phoneChange}/>
                </div>

                <div>
                    <label>Phone Country Code: </label>
                    <input value={phone_country_code} onChange={phoneCountryCodeChange}/>
                </div>

                <div>
                    <label>Currency: </label>
                    <input value={currency} onChange={currencyChange}/>
                </div>

                <div>
                    <label>Points: </label>
                    <input value={points} onChange={pointsChange}/>
                </div>

                <div>
                    <label>Confirm: </label>
                    <input value={is_confirm} onChange={isConfirmChange}/>
                </div>

                <div>
                    <label>Password Set: </label>
                    <input value={is_password_set} onChange={isPasswordSetChange}/>
                </div>

                <div>
                    <label>Default Address: </label>
                    <input value={defaultAddress} onChange={defaultAddressChange}/>
                </div>

                <div>
                    <label>Has Payment Password: </label>
                    <input value={has_payment_password} onChange={hasPaymentPasswordChange}/>
                </div>

                <div>
                    <label>Bookmarks: </label>
                    <form>
                        <div>
                            <label>Store</label>
                            <input value={bookmark_store} onChange={bookmarkStoreChange}/>
                        </div>
                        <div>
                            <label>Group Sale</label>
                            <input value={bookmark_group_sale} onChange={bookmarkGroupSaleChange}/>
                        </div>
                        <div>
                            <label>Product</label>
                            <input value={bookmark_product} onChange={bookmarkProductChange}/>
                        </div>
                    </form>
                </div>

                <div>
                    <label>Number of Gift Card: </label>
                    <input value={num_gift_cards} onChange={numGiftCardsChange}/>
                </div>

                <button onClick={handleClick}>Update</button>
                <button onClick={handleRefresh}>Refresh</button>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        nickname: state.nickname,
        first_name: state.first_name,
        last_name: state.last_name,
        phone: state.phone,
        phone_country_code: state.phone_country_code,
        currency: state.currency,
        points: state.points,
        is_confirm: state.is_confirm,
        is_password_set: state.is_password_set,
        defaultAddress: state.defaultAddress,
        has_payment_password: state.has_payment_password,
        bookmark_store: state.bookmark_store,
        bookmark_group_sale: state.bookmark_group_sale,
        bookmark_product : state.bookmark_product,
        num_gift_cards: state.num_gift_cards,
    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        numGiftCardsChange(e){
            const action ={
                type: 'change_num_gift_cards',
                value: e.target.value
            };
            dispatch(action);
        },
        bookmarkStoreChange(e){
            const action ={
                type: 'change_bookmark_store',
                value: e.target.value
            };
            dispatch(action);
        },
        bookmarkGroupSaleChange(e){
            const action ={
                type: 'change_bookmark_group_sale',
                value: e.target.value
            };
            dispatch(action);
        },
        bookmarkProductChange(e){
            const action ={
                type: 'change_bookmark_product',
                value: e.target.value
            };
            dispatch(action);
        },
        hasPaymentPasswordChange(e){
            const action ={
                type: 'change_has_payment_password',
                value: e.target.value
            };
            dispatch(action);
        },
        defaultAddressChange(e){
            const action ={
                type: 'change_default_address',
                value: e.target.value
            };
            dispatch(action);
        },
        isPasswordSetChange(e){
            const action ={
                type: 'change_is_password_set',
                value: e.target.value
            };
            dispatch(action);
        },
        isConfirmChange(e){
            const action ={
                type: 'change_is_confirm',
                value: e.target.value
            };
            dispatch(action);
        },
        pointsChange(e){
            const action ={
                type: 'change_points',
                value: e.target.value
            };
            dispatch(action);
        },
        currencyChange(e){
            const action ={
                type: 'change_currency',
                value: e.target.value
            };
            dispatch(action);
        },
        phoneCountryCodeChange(e){
            const action ={
                type: 'change_phone_country_code',
                value: e.target.value
            };
            dispatch(action);
        },
        phoneChange(e){
            const action ={
                type: 'change_phone',
                value: e.target.value
            };
            dispatch(action);
        },
        nicknameChange(e) {
            const action = {
                type: 'change_nickname',
                value: e.target.value
            };
            dispatch(action)
        },
        firstNameChange(e) {
            const action = {
                type: 'change_first_name',
                value: e.target.value
            };
            dispatch(action)
        },
        lastNameChange(e){
            const action = {
                type: 'change_last_name',
                value: e.target.value
            };
            dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'update'
            };
            dispatch(action)
        },
        handleRefresh() {
            const action = {
                type: 'refresh'
            };
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateProfile);
