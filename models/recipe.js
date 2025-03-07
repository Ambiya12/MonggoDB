import mongoose,{ Schema } from "mongoose";

const recipeSchema = new Schema({
title: {
    type: String,
    required: true
},
category: {
    type: String,
    required: true
},
country: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
ingredients: {
    type: [String],
    required: true
},
steps: {
    type: [String],
    required: true
},
author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
},
});

export default mongoose.model('Recipe', recipeSchema);