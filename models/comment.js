'use strict';
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        fullname: DataTypes.STRING,
        email: DataTypes.STRING,
        comment: DataTypes.TEXT
    }, {});
    Comment.associate = function(models) {
        // associations can be defined here
        Comment.belongsTo(models.Blog, { foreignKey: 'blogId' });
    };
    return Comment;
};