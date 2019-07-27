module.exports = function (sequelize, DataTypes) {

    var users = sequelize.define("users", {
        f_name: {
            type: DataTypes.STRING,
            allownull: false,
        },
        l_name: {
            type: DataTypes.STRING,
            allownull: false,
        },
        email: {
            type: DataTypes.STRING,
            allownull: false,
        },
        passphrase: {
            type: DataTypes.STRING,
            allownull: false,
        },
        age: {
            type: DataTypes.STRING,
            allownull: false,
        },
        sex: {
            type: DataTypes.STRING,
            allownull: false,
        }
    });
    return users;
}