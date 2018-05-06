import mongoose from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

const Schema = mongoose.Schema;

const msgSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  roomName: String,
  time: Number,
  content: String
});

msgSchema.plugin(autoIncrement, { model: 'Msg', field: 'id' });
const msg = mongoose.model('Msg', msgSchema);

export default msg;
