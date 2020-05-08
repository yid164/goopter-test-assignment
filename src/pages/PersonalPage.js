import React from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'
import { Form, Input, Button, Radio } from 'antd';
import { useState } from 'react';


const UpdateProfile = (props) => {
    const { auth, nickname, first_name, last_name, phone, phone_country_code, currency, points, is_confirm, isConfirmChange,
        is_password_set, isPasswordSetChange, defaultAddress, defaultAddressChange, has_payment_password, hasPaymentPasswordChange,
        bookmark_store, bookmarkStoreChange, bookmark_group_sale, bookmarkGroupSaleChange,bookmark_product, bookmarkProductChange,
        num_gift_cards, numGiftCardsChange,
        nicknameChange, firstNameChange, lastNameChange, phoneChange, phoneCountryCodeChange, currencyChange, pointsChange,
        handleClick, handleLogOut } = props;

    const [form] = Form.useForm();
    const [formLayout] = useState('horizontal');


    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 4,
                },
            }
            : null;

    if (!auth){
        return <Redirect to='/login'  />
    } else {
        return (
            <div>
                <Form
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    initialValues={{
                        layout: formLayout,
                    }}
                >
                    <Form.Item label="Personal:" name="layout">
                        Hello {nickname}
                    </Form.Item>
                    <Form.Item label="Nick Name">
                        <Input placeholder="input placeholder" value={nickname} onChange={nicknameChange} />
                    </Form.Item>
                    <Form.Item label="First Name">
                        <Input placeholder="input placeholder" value={first_name} onChange={firstNameChange}/>
                    </Form.Item>
                    <Form.Item label="Last Name">
                        <Input placeholder="input placeholder" value={last_name} onChange={lastNameChange}/>
                    </Form.Item>
                    <Form.Item label="Phone Number">
                        <Input placeholder="input placeholder" value={phone} onChange={phoneChange}/>
                    </Form.Item>
                    <Form.Item label="Country Code:">
                        <Input placeholder="input placeholder" value={phone_country_code} onChange={phoneCountryCodeChange}/>
                    </Form.Item>
                    <Form.Item label="Currency">
                        <Input placeholder="input placeholder" value={currency} onChange={currencyChange}/>
                    </Form.Item>
                    <Form.Item label="Points">
                        <Input placeholder="input placeholder" value={points} onChange={pointsChange}/>
                    </Form.Item>
                    <Form.Item label="Confirmed">
                        <Input placeholder="input placeholder" value={is_confirm} onChange={isConfirmChange}/>
                    </Form.Item>
                    <Form.Item label="Password Set">
                        <Input placeholder="input placeholder" value={is_password_set} onChange={isPasswordSetChange}/>
                    </Form.Item>
                    <Form.Item label="Address">
                        <Input placeholder="input placeholder" value={defaultAddress} onChange={defaultAddressChange}/>
                    </Form.Item>
                    <Form.Item label="PaymentPass">
                        <Input placeholder="input placeholder" value={has_payment_password} onChange={hasPaymentPasswordChange}/>
                    </Form.Item>
                    <Form.Item label="Bookmarks:">
                        <Form.Item label="Store">
                            <Input placeholder="input placeholder" value={bookmark_store} onChange={bookmarkStoreChange}/>
                        </Form.Item>
                        <Form.Item label="Group Sale">
                            <Input placeholder="input placeholder" value={bookmark_group_sale} onChange={bookmarkGroupSaleChange}/>
                        </Form.Item>
                        <Form.Item label="Product">
                            <Input placeholder="input placeholder" value={bookmark_product} onChange={bookmarkProductChange}/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item label="Gift Cards">
                        <Input placeholder="input placeholder" value={num_gift_cards} onChange={numGiftCardsChange}/>
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary" onClick={handleClick}>Submit</Button>
                        <Button type="warning" onClick={handleLogOut}>Log Out </Button>
                    </Form.Item>
                </Form>
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
        handleLogOut() {
            const action = {
                type: 'refresh'
            };

            dispatch(action);
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(UpdateProfile);
