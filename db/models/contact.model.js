const { Model, DataTypes, Sequelize } = require('sequelize');
const CONTACT_TABLE = 'contacts';

const ContactSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    fullName: {
        allowNull: false,
        type: DataTypes.STRING(100),
        field: 'full_name'
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING(64),
        isEmail: true
    },
    message: {
        allowNull: false,
        type: DataTypes.STRING(400)
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};


class Contact extends Model {
    static associate() {
        // associate
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CONTACT_TABLE,
            modelName: 'Contact',
            timestamps: true
        }
    }
}

module.exports = { CONTACT_TABLE, ContactSchema, Contact };