const mongoose = require("../../lib/mongoose");
const schema = new mongoose.Schema(
    {
        instrucciones: {
            desc: "The exercise's text",
            trim: true,
            type: String,
            required: true,
        },
        pregunta_ej: {
            desc: "The exercise's example question text",
            trim: true,
            type: (String, String),
            required: false,
        },
        respuesta_ej: {
            desc: "The exercise's example answer text",
            trim: true,
            type: String,
            required: false,
        },
        preguntas: {
            desc: "The exercises' questions",
            type: [String],
            required: true,
        },
        draft: {
            desc: "Wether the exercise is ready",
            type: Boolean,
            required:true,
            default: false,
        }
    },
    
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

module.exports = mongoose.model("EjercicioWritingWord", schema);
