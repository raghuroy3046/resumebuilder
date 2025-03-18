// Add Work Experience
function addExperience() {
    const experienceSection = document.getElementById('experience-fields');
    const newExp = document.createElement('div');
    newExp.innerHTML = `
        <input type="text" placeholder="Job Title" required>
        <input type="text" placeholder="Company Name" required>
        <input type="text" placeholder="Duration" required>
        <textarea placeholder="Description"></textarea>
        <button type="button" onclick="removeBlock(this)">Remove</button>
    `;
    experienceSection.appendChild(newExp);
}

// Add Skill
function addSkill() {
    const skillSection = document.getElementById('skill-fields');
    const newSkill = document.createElement('div');
    newSkill.innerHTML = `
        <input type="text" placeholder="Skill" required>
        <button type="button" onclick="removeBlock(this)">Remove</button>
    `;
    skillSection.appendChild(newSkill);
}

// Add Project
function addProject() {
    const projectSection = document.getElementById('project-fields');
    const newProject = document.createElement('div');
    newProject.innerHTML = `
        <input type="text" placeholder="Project Name" required>
        <textarea placeholder="Project Description"></textarea>
        <button type="button" onclick="removeBlock(this)">Remove</button>
    `;
    projectSection.appendChild(newProject);
}

// Add Education
function addEducation() {
    const educationSection = document.getElementById('education-fields');
    const newEdu = document.createElement('div');
    newEdu.innerHTML = `
        <input type="text" placeholder="Degree/Course" required>
        <input type="text" placeholder="Institution Name" required>
        <input type="text" placeholder="Year of Completion" required>
        <button type="button" onclick="removeBlock(this)">Remove</button>
    `;
    educationSection.appendChild(newEdu);
}

// Add Hobbies & Interests
function addHobbies() {
    const hobbiesSection = document.getElementById('hobbies-fields');
    const newHobby = document.createElement('div');
    newHobby.innerHTML = `
        <input type="text" placeholder="Hobby/Interest" required>
        <button type="button" onclick="removeBlock(this)">Remove</button>
    `;
    hobbiesSection.appendChild(newHobby);
}

// Remove Block
function removeBlock(element) {
    element.parentNode.remove();
}

// Generate Resume Preview
function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const template = document.getElementById('template-selector').value;

    let resumeContent = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Professional Summary</h3>
        <p>${summary}</p>
        <hr>
    `;

    // Experience Section
    resumeContent += '<h3>Work Experience</h3>';
    document.querySelectorAll('#experience-fields div').forEach(exp => {
        const jobTitle = exp.querySelector('input:nth-of-type(1)').value;
        const company = exp.querySelector('input:nth-of-type(2)').value;
        const duration = exp.querySelector('input:nth-of-type(3)').value;
        const description = exp.querySelector('textarea').value;

        resumeContent += `
            <p><strong>${jobTitle}</strong> at ${company} (${duration})</p>
            <p>${description}</p>
        `;
    });

    // Skills Section
    resumeContent += '<h3>Skills</h3><ul>';
    document.querySelectorAll('#skill-fields div').forEach(skill => {
        const skillName = skill.querySelector('input').value;
        resumeContent += `<li>${skillName}</li>`;
    });
    resumeContent += '</ul>';

    // Project Section
    resumeContent += '<h3>Projects</h3>';
    document.querySelectorAll('#project-fields div').forEach(project => {
        const projectName = project.querySelector('input').value;
        const projectDesc = project.querySelector('textarea').value;
        resumeContent += `
            <p><strong>${projectName}</strong></p>
            <p>${projectDesc}</p>
        `;
    });

    // Education Section
    resumeContent += '<h3>Education</h3>';
    document.querySelectorAll('#education-fields div').forEach(edu => {
        const degree = edu.querySelector('input:nth-of-type(1)').value;
        const institution = edu.querySelector('input:nth-of-type(2)').value;
        const year = edu.querySelector('input:nth-of-type(3)').value;

        resumeContent += `
            <p><strong>${degree}</strong>, ${institution} (${year})</p>
        `;
    });

    // Hobbies & Interests Section
    resumeContent += '<h3>Hobbies & Interests</h3><ul>';
    document.querySelectorAll('#hobbies-fields div').forEach(hobby => {
        const hobbyName = hobby.querySelector('input').value;
        resumeContent += `<li>${hobbyName}</li>`;
    });
    resumeContent += '</ul>';

    // Display Resume Content
    document.getElementById('resume-content').innerHTML = resumeContent;
    document.getElementById('resume-preview').className = template;
}

// Download Resume as PDF
function downloadPDF() {
    const content = document.getElementById('resume-preview').innerHTML;
    const blob = new Blob([content], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.pdf';
    link.click();
}
