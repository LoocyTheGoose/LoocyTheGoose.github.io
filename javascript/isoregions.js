function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting default information
    
    // Get the username and password from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check the credentials
    if(username === 'pta_AID47321896x39' && password === 'PlumBlossoms_N3verDie'){
        // Redirect to the landing page
        window.location.href = 'aiden/index.html';
    } else{
        window.location.href = 'usg.html';
    }
}