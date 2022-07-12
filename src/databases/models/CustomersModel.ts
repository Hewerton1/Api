import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../sequelize';

interface CustomersAttributes {
    customer_id: number;
    customerName: string;
    contactLastName: string;
    contactFirstName: string;
    addressLine1: string;
    addresLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    salesRepEmployeeNumber: string;
 
};

export interface CustomersInput extends Optional<CustomersAttributes, 'customer_id'>{};
export interface CustomersOutput extends Required<CustomersAttributes>{};

class Customers extends Model<CustomersAttributes, CustomersInput> {
   declare customer_id: number;
   declare customerName: string;
   declare contactLastName: string;
   declare contactFirstName: string;
   declare addressLine1: string;
   declare addresLine2: string;
   declare city: string;
   declare state: string;
   declare postalCode: string;
   declare country: string;
   declare salesRepEmployeeNumber: string;

};

Customers.init({
    customer_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    customerName: { type: DataTypes.STRING },
    contactLastName: { type: DataTypes.STRING },
    contactFirstName: { type: DataTypes.STRING },
    addressLine1: { type: DataTypes.STRING },
    addresLine2: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    postalCode: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    salesRepEmployeeNumber: { type: DataTypes.STRING },  
}, {
    sequelize,
    modelName: 'customers'
});

export default Customers  