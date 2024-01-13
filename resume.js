// add more btn fn

function educationBtn() {
    let education = document.getElementById("education")
    let newEducationField = document.createElement("div")
    newEducationField.setAttribute("class", "row mt-3 education")
    newEducationField.innerHTML = `<div class="col">
    <input type="text" class="form-control" placeholder="Year(From-To)" aria-label="Year">
</div>
<div class="col">
    <input type="text" class="form-control" placeholder="Course" aria-label="Course">
</div>
<div class="col">
    <input type="text" class="form-control" placeholder="College" aria-label="College">
</div>`
    education.appendChild(newEducationField)

}


function experienceBtn() {
    let experience = document.getElementById("experience")
    let newExperienceField = document.createElement("div")
    newExperienceField.setAttribute("class", "row mt-3 experience")
    newExperienceField.innerHTML = `<div class="col">
        <input type="text" class="form-control" placeholder="Year(From-To)" aria-label="Year">
    </div>
    <div class="col">
        <input type="text" class="form-control" placeholder="Designation" aria-label="Course">
    </div>
    <div class="col">
        <input type="text" class="form-control" placeholder="Company Name" aria-label="College">
    </div>
</div>`
    experience.appendChild(newExperienceField)

}





function certificateBtn() {
    let certificate = document.getElementById("certificate")
    let newcertificateField = document.createElement("div")
    newcertificateField.setAttribute("class", "row mt-3 certificate")
    newcertificateField.innerHTML = `<div class="col">
    <input type="text" class="form-control" placeholder="Name" aria-label="Name">
</div>
<div class="col">
    <input type="text" class="form-control" placeholder="Year-Month" aria-label="Year">
</div>
<div class="col">
    <input type="text" class="form-control" placeholder="Authority" aria-label="Authority">
</div>
<div class="col">
    <input type="text" class="form-control" placeholder="Percentage" aria-label="percentage">
</div>`
    certificate.appendChild(newcertificateField)

}





function SkillBtn() {
    let skills = document.getElementById("skills")
    let newskillsField = document.createElement("div")
    newskillsField.setAttribute("class", "row mt-3 skills")
    newskillsField.innerHTML = `<div class="col">
    <input type="text" class="form-control" placeholder="Enter Your Skills" aria-label="skills">
</div>`
    skills.appendChild(newskillsField)

}





// save data in LocalStorage fn

function save() {

    var Fname = document.getElementById("Fname").value
    var Mname = document.getElementById("Mname").value
    var Lname = document.getElementById("Lname").value
    var dob = document.getElementById("dob").value
    var age = document.getElementById("age").value
    var Designation = document.getElementById("Designation").value
    var about = document.getElementById("about").value
    var email = document.getElementById("inputEmail4").value
    var linkedin = document.getElementById("inputLinkedin4").value
    var git = document.getElementById("inputGit4").value
    var number = document.getElementById("inputnum4").value
    var Enumber = document.getElementById("inputnum24").value

    //   Field Validation regex

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(Fname)) {
        alert("Please enter a valid name with only alphabetic characters.");

    }

    const nameRegex2 = /^[a-zA-Z\s]+$/;
    if (!nameRegex2.test(Mname)) {
        alert("Please enter a valid name with only alphabetic characters.");

    }

    const nameRegex3 = /^[a-zA-Z\s]+$/;
    if (!nameRegex2.test(Lname)) {
        alert("Please enter a valid name with only alphabetic characters.");

    }

    const phoneRegex = /^\d{1,10}$/;
    if (!phoneRegex.test(number)) {
        alert("Please enter a valid phone number with a maximum of 10 digits.");

    }

    const phoneRegex2 = /^\d{1,10}$/;
    if (!phoneRegex2.test(Enumber)) {
        alert("Please enter a valid phone number with a maximum of 10 digits.");

    }

    const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");

    }

    // null alert

    if (!Fname || !Mname || !Lname || !number || !Enumber || !email || !linkedin || !git) {
        alert("Please fill in all the required fields.");

    }

    // save in local Storage
    const eduYear = document.getElementById("eduYear").value;
    const eduCourse = document.getElementById("eduCourse").value;
    const eduCollege = document.getElementById("eduCollege").value;
    if (!eduYear || !eduCourse || !eduCollege) {
        alert("Please fill in all the required fields in the education section.");

    }
    const educations = [{ eduYear, eduCourse, eduCollege }];



    const exYear = document.getElementById("exYear").value;
    const exDesignation = document.getElementById("exDesignation").value;
    const exCompany = document.getElementById("exCompany").value;
    const experiences = [{ exYear, exDesignation, exCompany }];


    const cerName = document.getElementById("cerName").value;
    const cerYear = document.getElementById("cerYear").value;
    const cerAuthority = document.getElementById("cerAuthority").value;
    const cerPercent = document.getElementById("cerPercent").value;
    const certificates = [{ cerName, cerAuthority, cerPercent, cerYear }];


    const skillData = document.getElementById("skills").value;
    if (!skillData) {
        alert("Please fill in all the required fields in the skill section.");

    }
    const skill = [skillData];


    let resumeData = {
        Fname,
        Mname,
        Lname,
        dob,
        age,
        Designation,
        about,
        email,
        linkedin,
        git,
        number,
        Enumber,
        educations,
        experiences,
        certificates,
        skill
    };

    //   store the data
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    alert("Your Resume Data is Saved");
}

// create resume fn

function create() {
    const resumeData = JSON.parse(localStorage.getItem("resumeData"));
    if (resumeData) {
        const printWindow = window.open("", "_blank");
        const { Fname, Mname, Lname, dob, age, Designation, about, email, linkedin, git, number, Enumber, educations, experiences, certificates, skill } = resumeData;

        printWindow.document.write(`
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <style>
        .dataSec{
            border-right: 2px solid rgb(56, 56, 56);
            background-color: rgb(142, 178, 255);
        }
        body{
            height: 100vh;
            overflow-x: hidden;
        }
    </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
</head>

<body>
    <div class="row container-fluid mx-3">
        <div class="col-6 dataSec">
            <div class="container mt-5">
                <h1>${Fname} ${Mname} ${Lname}</h1>
                <p class="fs-4">${Designation}</p>
                <p>${about}</p>
                <div class="container d-flex flex-column align-items-start">
                    <h2>Age: ${age}</h2>
                    <h2>DOB: ${dob}</h2>

                    <div class="mt-5">
                        <h2>Contact</h2>
                        <div class="section-item">Phone: ${number}</div>
                        <div class="section-item">Alternate Phone: ${Enumber}</div>
                        <div class="section-item">Email: ${email}</div>
                        <div class="section-item">LinkedIn: ${linkedin}</div>
                        <div class="section-item">GitHub Link: ${git}</div>
                    </div>
                    <div class="my-5">
                        <h2>Skill Set</h2>
                        ${skill.map((s) => `<div class="section-item">${s}</div>`).join('')}
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div class="col-6 ps-5">
            <div class="mt-5">
                <h2>Work Experience</h2>
                ${experiences.map(
            (experience) => `<div class="section-item">
                    <h3>${experience.exDesignation}</h3>
                    <div>${experience.exCompany}</div>
                    <div>${experience.exYear} years</div>
                </div>`
        ).join('')}
            </div>
            <div class="mt-5">
                <h2>Certifications</h2>
                ${certificates.map(
            (certificate) => `<div class="section-item">
                    <h3>${certificate.cerName}</h3>
                    <div>${certificate.cerAuthority}</div>
                    <div>${certificate.cerYear}</div>
                </div>`
        ).join('')}
            </div>
            <div class="mt-5">
                <h2>Educational Qualifications</h2>
                ${educations.map(
            (education) => `
                <div class="section-item">
                    <h3>${education.eduCourse}</h3>
                    <p>${education.eduCollege}</p>
                    <p>${education.eduYear}</p>
                </div>`
        ).join('')}
            </div>
            
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
                    crossorigin="anonymous"></script>
</body>

</html>`);
        printWindow.document.close();
        printWindow.print();
    } else {
        alert("No resume data found. Please save your resume first.");
    }
}
