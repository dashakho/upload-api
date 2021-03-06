require('dotenv').config()
const mongoose = require('mongoose')
​
const uploadSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
  toObject: { virtuals: true},
  toJSON: { virtuals: true}
})
​
// Virtual property that generates the file URL location

upload.Schema.virtual('fileUrl').get(function() {
  const url = 'https://' + process.env.BUCKET_NAME + '.s3.amazonaws.com/' + this.fileName
  return url
})


module.exports = mongoose.model('Upload', uploadSchema)
