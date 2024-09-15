/// Get Refrences To Form and Display Area

const form = document.getElementById('resume-form') as HTMLFormElement;
const displayArea = document.getElementById('resume-display') as HTMLDivElement;

// Handle Form Submission
form.addEventListener('submit', (event:Event) => {
    event.preventDefault(); //prevent page reload

    // Input Collection
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate The Resume Dynamically

    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>
    <p><b>Address:</b>${address}</p>
    
    <h3>Education</h3>
    <p><b>Education:</b>${education}</p>

    <h3>Experience</h3>
    <p><b>Experience:</b>${experience}</p>

    <h3>Skills</h3>
    <p><b>Skills:</b>${skills}</p>
 `;

 // Display The Generated Resume
 if(displayArea){
    displayArea.innerHTML = resumeHTML;
}
 else{console.error('Please Fill The Field')

 }
});