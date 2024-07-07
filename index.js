let Vimeo = require("vimeo").Vimeo;
let client = new Vimeo(
  "e200750f600d9978960031a7e17f84a3b8a30ad9",
  "XGwvbDDzrJBJEuaJrVrnQodCefRpSH9kop8qBoeXczq7LGpewMGqxGY05ZVDqTK7g/EoAcIWNP6dprgv3x0lrNls5ryvq/WGdOxa9fwWvJ//um8sn+ftOEXmeekR2JQX",
  "1f266dc6d8871a1e2cbdddc7676a9012"
);

client.request(
  {
    method: "GET",
    path: "/tutorial",
  },
  function (error, body, status_code, headers) {
    if (error) {
      console.log(error);
    }

    console.log(body);
  }
);

// let file_name = "./11919723_1920_1080_24fps.mp4"
// client.upload(
//   file_name,
//   {
//     'name': 'time is ricking',
//     'description': 'a clock that is ticking .'
//   },
//   function (uri) {
//     console.log('Your video URI is: ' + uri);
//   },
//   function (bytes_uploaded, bytes_total) {
//     var percentage = (bytes_uploaded / bytes_total * 100).toFixed(2)
//     console.log(bytes_uploaded, bytes_total, percentage + '%')
//   },
//   function (error) {
//     console.log('Failed because: ' + error)
//   }
// )
client.request(
  uri + "?fields=link",
  function (error, body, statusCode, headers) {
    if (error) {
      console.log("There was an error making the request.");
      console.log("Server reported: " + error);
      return;
    }

    console.log("Your video link is: " + body.link);
  }
);

