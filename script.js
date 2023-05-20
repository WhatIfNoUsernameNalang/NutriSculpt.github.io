function checkLogin(event) {
      event.preventDefault();

    
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

     
      if (username === 'user' && password === '1234') {
    
        window.location.href = 'https://github.com/WhatIfNoUsernameNalang/NutriSculpt.github.io/blob/77e5e1b494b6d245e244dd63db58914a4f7b3241/Home.html'; 
      } else {
        alert('Invalid username or password. Please try again.');
      }
    }
