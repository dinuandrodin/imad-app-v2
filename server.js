var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var hometemp = { 
    title:' Home | Dinesh Kumar',
    heading:'Home',
    date:'July 6, 1996',
    content:
          `<p>This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!
          </p>
          <p>This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!
          </p>
          <p>This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!This is content of the article where you will be finding everything!
          </p>`
};
function createTemplate (data) { 
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate=`
 <html>
  <head>
      <title>
          ${title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link href="/ui/style.css" rel="stylesheet" />
  </head>
  <body>
      <div class="container">
         <div>
          <a href ="/">${heading}</a>
         </div>
         <hr/>
         <h4>This is the Home page!</h4>
         <div>
          ${date}
         </div>
         <div>
          ${content}
         </div>
      </div>
  </body>
 </html>

`;
 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/home', function (req, res) {
   res.send(createTemplate(hometemp));
});

app.get('/about', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'about.html'));  
});

app.get('/contact', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'contact.html')); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
