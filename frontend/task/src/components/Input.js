import React from 'react';
import {FormInput} from "../helpers/Styles";

function Input({type, placeHolder, onChange, alert, isValid}) {
    return (
        <>
            {!isValid && alert}
            <FormInput as={'input'} type={type} placeholder={placeHolder} onChange={onChange}>
            </FormInput>
        </>
    );
}

export default Input;