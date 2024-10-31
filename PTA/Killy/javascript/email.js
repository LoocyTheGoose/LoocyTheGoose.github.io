const messages = {
    1: {
        subject: "PTA-INS-05",
        body: `Cmdr. Laroche,<br /><br />
        
Good work on securing civilians.<br /><br />

X-39 continues to develop at an alarming rate. We have identified antibodies in several civilians in other QZs
indicating varying levels of natural immunity to the weapon which may prove useful to you as more civilians
succumb to the airborne strain.<br /><br />

Continue to monitor civilians and offer aid for the time being. Await further instruction.<br /><br />

Gen. Landon Harlowe.`
    },
    2: {
        subject: "GV ASSEMBLY",
        body: `Cmdr. Laroche,<br /><br />
        
An assembly area has been constructed in Goreville, Maryland.<br />
Grid Ref: <b>18SUH18985854</b><br /><br />

You will take your team and secure the remaining civilians in Trelai and transport them to this destination.<br />
Casualties must be kept to a minimum. Give these civilians assistance to clear the area, then provide them with
basic means to defend themselves. With the situation at hand, we don't expect you to be looking over their shoulder,
but there won't be much of a country to go back to if they all die.<br /><br />

Assist how you can. You will have resources available to you for the time being, however, we are rationing you
amongst 51 other quarantine areas. Do your best with the resources you have in the immediate area.<br /><br />

Ensure you and your team are following quarantine protocol. Be aware of toxic zones - Your latest shipment has
provided you with masks and filters capable of filtering both organic and inorganic contaminants from the air.
Keep in mind these filters are designed with single-use in mind. Replace them once opened and used.

Stay safe out there agent.
Gen. Landon Harlowe.`
    },
    3: {
        subject: "PTA-ACTIVATION",
        body: `Mrs. Laroche,<br /><br />

We regret to inform you that the day has come.<br /><br />

You are being activated and tasked with securing civilians within Hairburg, Maryland.<br /><br />

Activation Code: <b>X39-PTA-CMDR</b><br />
Please return to base immediately for instruction.<br /><br />

Regards,<br />
Gen. Landon Harlowe.`
    }
};

function openEmail(emailId) {
    const email = messages[emailId];
    document.getElementById('message-content').innerHTML = `<h3>${email.subject}</h3><p>${email.body}</p>`;
}
