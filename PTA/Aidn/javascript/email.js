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
Grid Ref: <b>18SUH40962997</b><br /><br />

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
        subject: "X-39 Acquired",
        body: `penelopeharkness@pta.gov | 1969-07-21 @ 4:27pm<br />
        <blockquote>
            Good evening Aiden,<br /><br />

            I’m aware you’ve heard the acquisition of X-39.<br /><br />

            Patient Chan continues to deteriorate rapidly.<br /><br />

            For her sake, I’m glad she doesn’t quite seem to be all with it as whatever the hell she’s got in her runs through her body.<br /><br />

            I’ve never seen anything like this at all. Have you? Necrosis doesn’t spread this rapidly naturally.<br /><br />

            Regardless, this doesn’t bode well for us. Let’s just do our jobs and figure it all out. I’d say it’s a pleasure, I’ve heard of and respect your work, though - given the circumstances, I find our situation most grim.<br /><br />


            Regards,<br />
            Penelope H.
            <blockquote>
                Evening Mrs. Penelope,<br /><br />

                I have read through the reports of X-39.<br /><br />

                We've been attempting to take tissue samples to find the cause of spontaneous necrosis, but most samples rot before they're able to be tested, even when kept in optimal environments.<br /><br />

                I will say that this is something I have never seen or even theorized in all my years of work.<br /><br />

                If I had to give you a vey rough theory, It could be some sort of virus, but I have never seen a virus destroy their host so efficiently, even cancers slowly wither the body over years.<br /><br />

                I will agree that this is insanely dire, but if proper precautions are taken, this circumstance should be at the very least contained<br /><br />

                Regards,<br />
                Dean A.
                <blockquote>
                    Hello Aiden,<br /><br />

                    Please confirm patient name is “Chen”. Dr. Langford has since chewed me out for misreading the name sheet.<br /><br />

                    It has been 5 days since initial infection. Patient still continues to deteriorate. As we saw today, she can no longer form words and appears to be caught in an aggressive lull. Did you see how the medical staff were forced to restrain her?<br /><br />

                    I cannot make heads or tails of this ailment. Is it a virus? A parasite? Bacteria? None of the markers point to any of these, and yet also point to all of them! The patient’s body continues to decay. New sores are developing and her body temperature is abnormally low. Were I any less experienced in my field, I would say Dr. Chen is clinically dead - if she weren’t obviously somehow still alive.<br /><br />

                    Have you had any luck with sample retrieval? We are running out of time to inoculate her.<br /><br />

                    Regards,<br />
                    Penelope H.
                    <blockquote>
                        Mrs. Penelope<br />
                        Dr. Langford is correct, the patient of X-39 is Dr. Chen.<br /><br />

                        We were able to get some sample information this time, and have proven that this the rapid decomposition is post-mortem decay.<br /><br />

                        This is alarming for the obvious reason of Dr. Chen still showing clear signs of activity.<br /><br />

                        We believe that the aggressive behavior may come from the degradation of cognitive function, but this still doesn't help narrow down the exact cause of these symptoms.<br /><br />

                        From our current knowledge, it is still very much up in the air what this could be, possibilities of fungal spore based viruses have came up, theorizing that this could be a dangerously evolved version of cordyceps, but the symptoms don't match with that either.<br /><br />

                        Cordyceps simply drain the nutrients from their host before using them to reproduce the fungus, but this patient seems to still be active and moving, even stronger then they were before. <br /><br />

                        Lastly, with Cordyceps, there's no signs of blacking of veins, as show in the reports sent to me. <br /><br />

                        At least with the samples we do have, we're closer to getting a solid base understanding to work off of.<br /><br />

                        Good luck, <br />
                        Dean A. 
                    </blockquote>
                </blockquote>
            </blockquote>
        </blockquote>`
    }
};

function openEmail(emailId) {
    const email = messages[emailId];
    document.getElementById('message-content').innerHTML = `<h3>${email.subject}</h3><p>${email.body}</p>`;
}
