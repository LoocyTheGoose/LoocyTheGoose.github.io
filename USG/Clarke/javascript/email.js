const messages = {
    1: {
        subject: "## Report Evacuation Status ##",
        body: `Attn. Goreville USAF Military Airfield<br /><br />
        
        Status not received. Please advise confirmation of evacuation order.<br /><br />
        
        Gen. Simon Crawley,<br/>
        USAF Command, Washington.`
    },
    2: {
        subject: "## EVACUATE ##",
        body: `Attn. Goreville USAF Military Airfield<br /><br />
        
        Civilians are to be evacuated from Goreville immediately.<br /><br />
        
        Biological contamination has affected the area beyond retrieval.<br /><br />
        
        Report to your commanding officers for direction.<br /><br />
        
        Gen. Simon Crawley,<br />
        USAF Command, Washington.`
    },
    3: {
        subject: "Branch Recognition",
        body: `<b>Authority#184-24-39</b><br /><br />
        
        Attn. Goreville USAF Military Airfield<br /><br />
        
        Under the directive of US Government Code DF-X39, PTA agents have been activated across the country.<br /><br />
        
        PTA authority has been invoked.<br /><br />
        
        Gen. Simon Crawley, <br />
        USAF Command, Washington.`
    }
};

function openEmail(emailId) {
    const email = messages[emailId];
    document.getElementById('message-content').innerHTML = `<h3>${email.subject}</h3><p>${email.body}</p>`;
}
