const { Model, DataTypes, Sequelize } = require('sequelize');
const VOLUNTARY_TABLE = 'voluntaries';

const VoluntarySchema = {
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
    voluntaryType:{
        type: DataTypes.INTEGER(2),
        field: 'voluntary_type',
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class Voluntary extends Model {
    static associate() {
        // associate
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: VOLUNTARY_TABLE,
            modelName: 'Voluntary',
            timestamps: true
        }
    }
}

module.exports = { VOLUNTARY_TABLE, VoluntarySchema, Voluntary };