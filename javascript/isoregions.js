function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting default information
    
    // Get the username and password from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check the credentials
    if(username === 'pta_AID47321896x39' && password === 'PlumBlossoms_N3verDie'){
        // Redirect to the landing page
        window.location.href = 'PTA/Aidn/index.html';
    } else if(username === 'pta_CDR51999545x39' && password === 'APlaceICan\'tCallHome'){
        window.location.href = 'PTA/Killy/index.html';
    } else{
        return;
    }
}

// Event listener for the enter key
function checkEnterKey(event){
    if(event.key === 'Enter'){
        handleLogin(event);
    }
}

window.onload = function() {
    document.getElementById('username').addEventListener('keydown', checkEnterKey);
    document.getElementById('password').addEventListener('keydown', checkEnterKey);
}