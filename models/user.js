module.exports = function (sequelize, DataTypes) {

    var users = sequelize.define("users", {
        f_name: {
            type: DataTypes.STRING,
            allownull: false,
        },
        l_name: {
            type: DataTypes.BOOLEAN,
            allownull: false,
            defaultValue: false
        },
        email: {
            type: DataTypes.BOOLEAN,
            allownull: false,
            defaultValue: false
        },
        passphrase: {
            type: DataTypes.BOOLEAN,
            allownull: false,
            defaultValue: false
        },
        age: {
            type: DataTypes.BOOLEAN,
            allownull: false,
            defaultValue: false
        },
        sex: {
            type: DataTypes.BOOLEAN,
            allownull: false,
            defaultValue: false
        }
    });
    return users;
}