/// Get Refrences To Form and Display Area
var form = document.getElementById('resume-form');
var displayArea = document.getElementById('resume-display');
// Handle Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // Input Collection
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate The Resume Dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n    <p><b>Address:</b>").concat(address, "</p>\n    \n    <h3>Education</h3>\n    <p><b>Education:</b>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p><b>Experience:</b>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p><b>Skills:</b>").concat(skills, "</p>\n ");
    // Display The Generated Resume
    if (displayArea) {
        displayArea.innerHTML = resumeHTML;
    }
    else {
        console.error('Please Fill The Field');
    }
});
