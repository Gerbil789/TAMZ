var app = {};


request_code = function () {
  let original_url = document.getElementById('url').value;
  let login = document.getElementById('login').value;
  const timestamp = Date.now();
  var code;

  url = `${original_url}?user=${login}&timestamp=${timestamp}`;

  fetch(url)
    .then(response => response.text())
    .then(data => {
      // Store the response body in a variable
      const responseBody = data;
      // Do something with the response body
      console.log(responseBody);
      code = atob(responseBody)
      console.log(code);
      content.load('code.html')
        .then(() => {
          document.getElementById('url').value = original_url;
          document.getElementById('login').value = login;
          document.getElementById('code').value = code;
        });
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
}

test_api = function () {
  const url =  document.getElementById('url').value;
  const token_var = document.getElementById('code').value;

  var jqxhr = $.ajax({
    url: url,
    type: "POST",
    headers: {'Authorization': 'Bearer ' + token_var},
    success: function(data) {
    alert('I was successful and received data: ' + data);
    }
   })
   .fail(function(err) {
    alert( "Something went wrong: " + err.responseText );
   }); 
}