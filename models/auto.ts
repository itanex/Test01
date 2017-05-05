import * as mongoose from 'mongoose';

// export interface IAuto extends mongoose.Document {
//     make: string;
//     automodel: string;
//     year: number;
// }

let autoSchema = new mongoose.Schema ({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

//export default mongoose.model<IAuto>('Auto', autoSchema);
export default mongoose.model('Auto', autoSchema);