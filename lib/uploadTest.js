require('dotenv').config()
// Require File System
const fs = require('fs')
// Require AWS SDK
const AWS = require('aws-sdk')

AWS.config.update({ region: 'us-east-1' })
const s3 = new AWS.S3()

console.log(s3)
// Access command line arguments to get file path
const filePath = process.argv[2]

const bucketName = process.env.BUCKET_NAME
console.log(bucketName)

fs.readFile(filePath, (err, fileData) => {
  if (err) throw err
  console.log(fileData)

// Create params object for s3 uploade

const params = {
    Bucket: bucketName,
    Key: 'something',
    Body: fileData,
    ACL: 'public-read',
    ContentType: 'image/jpeg'
}

// Upload to s3

s3.upload(params, (err, s3Data) => {
    if (err) throw err
    console.log(s3Data)
})

})
