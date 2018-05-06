import mongoose from 'mongoose';
import config from '../config/config';

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

mongoose.connect(config.mongodbUrl);

let db = mongoose.connection;

db.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});

db.on("open", function () {
  console.log("数据库连接成功");
});

export default db;
