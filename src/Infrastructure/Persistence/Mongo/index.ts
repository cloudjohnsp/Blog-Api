import mongoose from 'mongoose';

class MongoSetup {
  private static readonly _mongoURL: string =
    process.env.MONGO_URL || 'mongodb://localhost:27017/blogsdb';

  public static Connect(): void {
    mongoose.connect(this._mongoURL);
  }
}

export default MongoSetup;
