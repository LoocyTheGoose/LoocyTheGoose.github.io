const messages = {
    1: {
        subject: "PTA-INS-05",
        body: `1999/09/15 @ 4:07pm<br />Cmdr. Laroche,<br /><br />
        
Good work on securing civilians.<br /><br />

X-39 continues to develop at an alarming rate. We have identified antibodies in several civilians in other QZs
indicating varying levels of natural immunity to the weapon which may prove useful to you as more civilians
succumb to the airborne strain.<br /><br />

Continue to monitor civilians and offer aid for the time being. Await further instruction.<br /><br />

Gen. Landon Harlowe.`
    },
    2: {
        subject: "GV ASSEMBLY",
        body: `1999/08/22 @ 9:45am<br />Cmdr. Laroche,<br /><br />
        
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
        body: `1999/07/05 @ 11:42am<br />Mrs. Laroche,<br /><br />

We regret to inform you that the day has come.<br /><br />

You are being activated and tasked with securing civilians within Hairburg, Maryland.<br /><br />

Activation Code: <b>X39-PTA-CMDR</b><br />
Please return to base immediately for instruction.<br /><br />

Regards,<br />
Gen. Landon Harlowe.`
    },
    4: {
        subject: "INFECTED ASSEMBLY",
        body: `<blockquote>
	PTA-AL#5553 Arlene Laroche | 1999/10/29 @ 2:15pm<br />
	General,<br /><br /.

	The military airfield seems to have a congregation of infected rallying at its position. Have there been other reports of this behaviour?<br /><br />

	I've been meeting some resistance with the civilians in my area. A general distrust in the populace is making my job protecting them difficult. One group of survivors suggested that one person is looking to harm myself and my team. How do you advise I proceed?<br /><br />

	Finally, do we have any updates regarding the weapon itself? We're all aware the biological agent adapts rapidly. Has anything drastic changed in the time since we've last had contact?<br /><br />

	Looking forward to an update,<br />
	Arlene Laroche - PTA Commander
	<blockquote>
		PTA-LH#0415 Landon Harlowe | 1999/10/31 @ 8:19am<br />
	 	Commander,<br /><br />

		Reports from QZs have slowed to a crawl. We're only receiving active updates from 15 of the 51 quarantine areas.<br /><br />

		We have heard similar reports from other areas indicating a large gathering of infected in key areas where death was high. Investigations conducted by PTA agents have rendered zones dark. We need more data, however, it seems like those that have acted on getting into these high density zones have failed to report back in.<br /><br />

		While these reports are less than ideal commander, we will not progress anywhere without firsthand data on the situation. Do what's necessary to get into the airfield and report back your findings. I understand this is a tall ask, however, it's necessary if we're to get the data on what exactly is occurring in those locations. We want you to gather your forces, enter the compound, deal with the infected and report back unharmed. Your other objectives are to link the radio dishes so we can restore intercontinental communications and get to the power substation to prevent your location from fluttering into the darkness.<br /><br />

		We will be sending you a supply of ammunition in the near future which will assist you in your endeavour to cut through the area.<br />
		In your haste, don't forget to remain safe, Arlene. We're counting on you.<br /><br />

		Gen. Landon Harlowe
	</blockquote
</blockquote>	`
    }
};

function openEmail(emailId) {
    const email = messages[emailId];
    document.getElementById('message-content').innerHTML = `<h3>${email.subject}</h3><p>${email.body}</p>`;
}
