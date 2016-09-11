import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const hashTagSchema = new Schema ({
  tagName: String
});

export default mongoose.model('HashTags', hashTagSchema);
