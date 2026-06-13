import mongoose, { mongo } from 'mongoose';

async function conectaNaDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection
}
//mudar o <password> para a senha q tu criou no mongo
//mongodb+srv://danielmaxzika_db_user:<db_password>@cluster0.4vwnymy.mongodb.net/?appName=Cluster0

export default conectaNaDatabase;