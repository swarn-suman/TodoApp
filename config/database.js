const mongoose = require("mongoose");


/*Maine zo DATABASE_URL ki zo v configuration maine .env file m rakhi hui hae, agr usko feed krna hae mere process 
object k andar to wo maen .env library ka use kr k krunga*/

//  npm i dotenv -> To install .env library

require("dotenv").config(); //zo v maine .env m define kiya hoga wo sb load ho zayega process object k andar

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)

    .then(()=>{
    console.log("DB connection success");
    })

    .catch((err) => {
        console.log("Received Error");
        console.error(err);
        process.exit(1);

    })
}
    module.exports = dbConnect;
