require('dotenv').config()

module.exports = {
  "development": {
    "username": "zzkrfnhutfncmk",
    "password": "3302289481d26727e67966824c7f9c5cd88c37096972a93a6aded82c706e70ad",
    "database": "dnajtvfehj51h",
    "host": "ec2-34-225-159-178.compute-1.amazonaws.com",
    "dialect": "postgres",
    "dialectOptions":{
      "ssl":{
        "require":true,
        "rejectUnauthorized":false
      }
    }
  },
  "test": {
    "username": "zzkrfnhutfncmk",
    "password": "3302289481d26727e67966824c7f9c5cd88c37096972a93a6aded82c706e70ad",
    "database": "dnajtvfehj51h",
    "host": "ec2-34-225-159-178.compute-1.amazonaws.com",
    "dialect": "postgres",
    "dialectOptions":{
      "ssl":{
        "require":true,
        "rejectUnauthorized":false
      }
    }
  },
  "production": {
    "username": "zzkrfnhutfncmk",
    "password": "3302289481d26727e67966824c7f9c5cd88c37096972a93a6aded82c706e70ad",
    "database": "dnajtvfehj51h",
    "host": "ec2-34-225-159-178.compute-1.amazonaws.com",
    "dialect": "postgres",
    "dialectOptions":{
      "ssl":{
        "require":true,
        "rejectUnauthorized":false
      }
    }
  }
}
