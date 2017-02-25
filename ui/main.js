var button = document.getElementById('counter');

button.onclick = function() {
    
    //make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readystate === XMLHttpRequest.DONE) {
            //take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    //render the variable in the current span
    //counter = counter + 1;
   // var span = document.getElementById('count');
   // span.innerHTML = counter.toString();
   
   // make a request
   request.open('GET', 'http://dinuandrodin.imad.hasura-app.io/counter' , true);
   request.send(null);
};