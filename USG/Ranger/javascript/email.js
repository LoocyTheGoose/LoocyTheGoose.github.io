const messages = {
    1: {
        subject: "## Evacuation Procedure ##",
        body: `Civilians must be inspected for the following markers:<br />

        <ul>
            <li>Recent injuries which pierce the skin</li>
            <li>Bite marks</li>
            <li>Pupillary reactionary delay to light</li>
            <li>Black marks under the skin</li>
            <li>Other signs of illness</li>
                <ul>
                    <li>Coughing</li>
                    <li>Sneezing</li>
                    <li>Difficulty breathing</li>
                    <li>Lethargy</li>
                    <li>Runny nose</li>
                    <li>Bloodshot eyes</li>
                    <li>Overly aggressive behaviour</li>
                </ul>
        </ul>
        
        Civilians found with these identifiers are to be given a green arm band and lead straight through the compound into the radio dish
        maintenance area. These people are infected with the X-39 contagion and must be put down before they can become a threat. It's not
        humane, but it's the fastest way we have of culling the infection from our populace.<br /><br />
        
        Civilians without these markers are to be given a yellow arm band and escorted to the main barracks where they will await a blood sample
        collection and airlift out of Goreville.<br /><br />

        Departure Times:
        <ul>
            <li>05/15/1999 - 0600hrs</li>
            <li>05/15/1999 - 0700hrs</li>
            <li>05/15/1999 - 1000hrs</li>
            <li>05/15/1999 - 1100hrs</li>
            <li>05/15/1999 - 1400hrs</li>
            <li>05/15/1999 - 1500hrs</li>
            <li>05/15/1999 - 1800hrs</li>
            <li>05/15/1999 - 1900hrs</li>
            <li>05/15/1999 - 2100hrs</li>
            <li>05/16/1999 - 0000hrs</li>
            <li>05/16/1999 - 0100hrs</li>
            <li>05/16/1999 - 0400hrs</li>
            <li>05/16/1999 - 0500hrs</li>
            <li>05/16/1999 - 0600hrs</li>
        </ul>

        Those not airlifted will be forced to fend for themselves. PTA emergency activation has occurred and a gathering point has been made in
        Trelai under the watch of Commander Arlene Laroche, callsign "Killy". Her company is comprised of agents who can keep the city running
        after all essential and military personnel have evacuated.<br /><br />
        
        <b>Under no circumstances shall any rank be permitted to speak on the virus, its conditions, or what happens once infected. This contagion
        is to be locked down and eradicated upon any semblance of suspicion.</b><br /><br />
        
        Gen. Angus Brownley,<br />
        Goreville Airfield.`
    }
};

function openEmail(emailId) {
    const email = messages[emailId];
    document.getElementById('message-content').innerHTML = `<h3>${email.subject}</h3><p>${email.body}</p>`;
}
