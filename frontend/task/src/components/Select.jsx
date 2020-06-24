import React from 'react';
import {FormInput} from "../helpers/Styles";

function Select({onChange, departments}) {
    return (
        <FormInput onChange={onChange}>
            <option value={''}>All Departments</option>
            {
                departments && departments.map(item => <option key={item._id} value={item._id}>{item.name}</option>)
            }
        </FormInput>
    );
}

export default Select;