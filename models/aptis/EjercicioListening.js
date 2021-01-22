const mongoose = require("../../lib/mongoose");
const { ObjectID } = require("mongodb");
const schema = new mongoose.Schema(
    {
        documento: {
            desc: "The document this exercise belongs to",
            type: ObjectID,
            required: true,
        },
        instrucciones: {
            desc: "The exercise's instructions",
            trim: true,
            type: String,
            required: true,
        },
        falsas: {
            desc: "The exercise's wrong answers",
            type: [String],
            required: true,
        },
        opciones: {
            desc: "The exercise's possible answers",
            type: [String],
            required: true,
        },
        correcta: {
            desc: "The correct answer from all the options",
            type: String,
            required: true,
            default: false,
        },
    },

    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

module.exports = mongoose.model("EjercicioListening", schema);