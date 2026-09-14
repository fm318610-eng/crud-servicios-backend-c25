import mongoose from "mongoose";
//nos conecta a la base de datos

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.info("Conexión con la BD exitosa");
    } catch (error) {
        console.error(error);
    }
};

conectarDB() //ejecutamos la conexión de la BD