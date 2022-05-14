const bcrypt = require('bcryptjs');


const Users = [
    { 
        name: 'AdminPanelSettings', 
        email: 'admin@admin.com', 
        password: bcrypt.hashSync('12356',10),
        isAdmin: true 
    },
    { 
        name: 'shopping', 
        email: 'shopping@shopping.com', 
        password: bcrypt.hashSync('12356',10) 
    },
    {
        name: 'user',
        email: 'user@user.com',
        password: bcrypt.hashSync('123456',10)
    }
]
module.exports = Users;