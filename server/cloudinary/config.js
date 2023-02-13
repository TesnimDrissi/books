const cloudinary = require('cloudinary').v2;


cloudinary.config({ 
    cloud_name: 'dmuills8f', 
    api_key: '787193955193337', 
    api_secret: 'XXfrxR-6HN0LVd1w3CiLx9Kxbi0',
    secure: true
  });


//   const res = cloudinary.uploader.upload('https://m.media-amazon.com/images/I/519jC3ZUisL.jpg', {public_id: "Harry Potter"})

//   res.then((data) => {
//     console.log(data);
//     console.log(data.secure_url);
//   }).catch((err) => {
//     console.log(err);
//   });
//   // Generate 
//   const url = cloudinary.url("Harry Potter", {
//     width: 100,
//     height: 150,
//     Crop: 'fill'
//   });

//   console.log(url);

  module.exports= cloudinary;