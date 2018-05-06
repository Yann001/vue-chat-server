import mongoose from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  avatar: {
    type: String,
    default: 'http://opzww7anw.bkt.clouddn.com/leaf/image/gem.jpg'
  }
});

userSchema.plugin(autoIncrement, { model: 'User', field: 'id' });
const user = mongoose.model('User', userSchema);

export default user;
