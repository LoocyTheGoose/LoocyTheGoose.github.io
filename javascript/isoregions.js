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
        const messageDiv = document.getElementById("message");
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "This account is locked. Activity and location recorded.";
        errorMessage.classList.add("error-message");
        messageDiv.appendChild(errorMessage);
        //window.location.href = 'PTA/Killy/index.html';
    } else if(username === 'gclarke@army.gov' && password === 'XFtn45Astc'){
        window.location.href = 'USG/Clarke/index.html';
    } else if(username === 'jranger@army.gov' && password === 'AK&239$ntA'){
        window.location.href = 'USG/Ranger/index.html';
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