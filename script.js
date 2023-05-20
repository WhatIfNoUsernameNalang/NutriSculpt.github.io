function checkLogin(event) {
      event.preventDefault();

    
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

     
      if (username === 'user' && password === '1234') {
    
        window.location.href = 'Home.html'; 
      } else {
        alert('Invalid username or password. Please try again.');
      }
    }
