const { Model, DataTypes } = require('sequelize');
const sequelize = require('sequelize');

// create our User Model
class User extends Model {}

// define table and column configs
User.init(
    {
        // TABLE COL DEFS HERE
    },
    {
        // TABLE CONFIG OPTS HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))
        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;