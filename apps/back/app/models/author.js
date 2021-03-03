const sequelize = require('../database');
const { Model, DataTypes } = require('sequelize');

class Author extends Model {
    

    toString() {
        return `L'author s'appelle ${this.pseudonym}, son mail est ${this.email} et son password est ${this.password} et il habite à ${this.address}`
    }
    
    /* ajout author en bdd 
    async save() {
        
        const query = `
        INSERT INTO author(pseudonym, email, password, address)
        VALUES ($1, $2, $3, $4)
        ;`;
        const  { rows } = await db.query(query, [
            this.pseudonym, 
            this.email, 
            this.password,  
            this.address ]);
        }*/



}

Auhtor.init(
    {
        pseudonym: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        address: DataTypes.STRING
    },
    {
        sequelize,
        tableName: 'author'
        
    });

module.exports = Author;