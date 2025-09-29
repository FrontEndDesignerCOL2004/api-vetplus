"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Plan_1 = __importDefault(require("../models/Plan"));
const MONGO_URI = "mongodb+srv://JohnCordoba2004:zWKNLy2GX8wCgRYT@cluster0.9cam0wd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
async function seedDB() {
    try {
        await mongoose_1.default.connect(MONGO_URI);
        console.log("Conectando a MongoDB...");
        //Limpiar colecicon anterior
        await Plan_1.default.deleteMany({});
        //Insertar datos
        const planes = await Plan_1.default.insertMany([
            {
                type: "dog",
                name: "Plan Diamante",
                benefits: [
                    "Atención médica sin límite de eventos.",
                    "Cobertura para condiciones crónicas y degenerativas desde el primer año de afiliación.",
                    "Atención para el tratamiento de cáncer.(aplica periodo de carencia) Consultas, hospitalización, cirugías, exámenes diagnósticos todo el año sin límites.",
                    "Cobertura para condiciones médicas congénitas.",
                    "Atención de las urgencias ortopédicas más comunes y complejas.",
                    "Escoja la clínica veterinaria o el médico de su preferencia.",
                    "Si su mascota necesita atención médica especializada, contamos con un directorio de médicos en el cual usted podrá escoger el de su preferencia.",
                    "Su mascota nunca se quedara sin atención médica, no importa donde viaje o este de vacaciones VetPlus lo acompaña en todo momento en cualquier parte del país.",
                    "Elija el porcentaje de copago de su preferencia.",
                    "Autorizaciones médicas inmediatas, nuestras líneas de atención están disponibles las 24 hrs todos los días.",
                    "Consulte condiciones, restricciones, exclusiones y periodos de carencia.",
                ],
                price: 131500,
            },
            {
                type: "dog",
                name: "Plan Esmeralda",
                benefits: [
                    "Atención médica sin límite de eventos.",
                    "Consultas, hospitalización, cirugías exámenes diagnósticos todo el año sin límites.",
                    "Escoja la clínica veterinaria o el médico de su preferencia.",
                    "Si su mascota necesita atención médica especializada, contamos con un directorio de médicos en el cual usted podrá escoger el de su preferencia.",
                    "Su mascota nunca se quedara sin atención médica, no importa donde viaje o este de vacaciones VetPlus lo acompaña en todo momento en cualquier parte del país.",
                    "Elija el porcentaje de copago de su preferencia.",
                    "Autorizaciones médicas inmediatas, nuestras líneas de atención están disponibles las 24 hrs todos los días.",
                    "Consulte condiciones, restricciones, exclusiones y periodos de carencia",
                ],
                price: 99500,
            },
            {
                type: "dog",
                name: "Plan Senior +9",
                benefits: [
                    "Atención de urgencias por accidentes sin límite de eventos.",
                    "Sin cobertura para consultas, diagnóstico o tratameinto de enfermedades.",
                    "Consultas, hospitalización, cirugías exámenes diagnósticos todo el año sin límites.",
                    "Escoja la clínica veterinaria o el médico de su preferencia.",
                    "Su mascota nunca se quedara sin atención médica, no importa donde viaje o este de vacaciones VetPlus lo acompaña en  momento en cualquier parte del país.",
                    "Elija el porcentaje de copago de su preferencia.",
                    "Autorizaciones médicas inmediatas, nuestras líneas de atención están disponibles las 24 hrs todos los días.",
                    "Consulte condiciones, restricciones, exclusiones y periodos de carencia.",
                ],
                price: 56400,
            },
        ]);
        console.log("Planes insertados:", planes);
        process.exit();
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}
seedDB();
