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

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //make a request to the server and send the name
    //capture a list of names and render it as list
    var names = ['name1', 'name2', 'name3'];
    var list = '';
    for(var i=0;i<names.length; i++) {
        list += '<li>' + names[i] + '/<li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};