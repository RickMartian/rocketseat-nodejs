/*Schema do model -- quais os campos que os produtos podem ter
 e que tipos de valores esses campos vão salvar*/

const mongoose = require('mongoose'); //importar mongoose
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({ 
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
 });

ProductSchema.plugin(mongoosePaginate);

 mongoose.model('Product', ProductSchema); //registrar o model na aplicação

