'use strict';
module.exports = (sequelize, DataTypes) => {
    const Sequelize = sequelize.Sequelize
    const Model = Sequelize.Model

    class User extends Model {

    }

    User.init({
        username: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'username tidak boleh kosong'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'password tidak boleh kosong'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'email tidak boleh kosong'
                },
                isEmail: {
                    msg: 'format email salah'
                }
            }
        }
    })

    const User = sequelize.define('User', {}, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};