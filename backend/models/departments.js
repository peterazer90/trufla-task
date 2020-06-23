const mongoose = require('mongoose');
const {DepartmentSchema} = require('../schemas/schemas');
const express = require('express');
const router = express.Router();
const Department = mongoose.model('department', DepartmentSchema);


async function createDepartment(name) {

    const department = new Department({
        name: name
    });

    const res = await department.save();
    console.log(res);

}

// createDepartment('Mobiles & Tablets');

router.get('/', async (req, res) => {
    const departments = await Department.find();
    res.send(departments);
});

module.exports = router;

