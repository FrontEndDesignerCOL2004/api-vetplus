import { Schema, model, Document } from "mongoose";

export interface IPlan extends Document {
  type: "dog" | "cat";
  name: string;
  benefits: string[];
  price: number;
}

const PlanSchema = new Schema<IPlan>({
  type: {
    type: String,
    enum: { values: ["dog", "cat"], message: "El tipo debe ser 'dog' o 'cat'" },
    required: [true, "El tipo es obligatorio"],
  },
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    trim: true,
    minlength: [3, "El nombre debe tener al menos 3 caracteres"],
  },
  benefits: {
    type: [String],
    required: [true, "Debe incluir al menos un beneficio"],
    validate: {
      validator: (arr: string[]) => arr.length > 0,
      message: "Debe incluir al menos un beneficio",
    },
  },
  price: {
    type: Number,
    required: [true, "El precio es obligatorio"],
    min: [1000, "el precio debe ser mayor o igual a 10F00"],
  },
});

export default model<IPlan>("Plan", PlanSchema);
