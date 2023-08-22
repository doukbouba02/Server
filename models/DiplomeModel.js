import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Diplome = db.define('diplomes', {
    nom: DataTypes.STRING,
    date_nais: DataTypes.STRING,
    lieu: DataTypes.STRING,
    matricule: DataTypes.STRING,
    dp: DataTypes.STRING,
    session: DataTypes.STRING,
    filiere: DataTypes.STRING,
    mention: DataTypes.STRING,
    date_deliv: DataTypes.STRING,
    qr_code: DataTypes.STRING,
},{
    freezeTableName: true
});

export default Diplome;

(async()=>{
     await db.sync();
})();