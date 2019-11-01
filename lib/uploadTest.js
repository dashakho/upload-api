// Require File System
const fs = require('fs')
// Require AWS SDK
const AWS = require('aws-sdk')

AWS.config.update({ region: 'us-east-1' })
const s3 = new AWS.S3()

console.log(s3)
// Access command line arguments to get file path
const filePath = process.argv[2]

fs.readFile(filePath, (err, data) => {
  if (err) throw err
  console.log(data)
})
