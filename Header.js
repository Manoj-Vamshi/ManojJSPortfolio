function loadContent(page) {
    const content = document.getElementById('content');
    let html = '';
    switch(page) {
        case 'VRVevents':
            html = `
            <h4 style="color: #333; font-size: 20px; font-family: Arial, sans-serif;">A React-based web application designed for managing events. You can explore the project for further details, features, and the specific technologies it uses.</h4><br>
            <h6 style="color: #666; font-size: 16px;">You can view the project code on GitHub: 
                <a href="https://github.com/Manoj-Vamshi/ReactProjectonEventManagement" target="_blank" style="color: #0066cc; text-decoration: none;">GitHub Link</a>
            </h6>
            `;
            break;
        case 'Pixvibe':
            html = `
            <h4 style="color: #333; font-size: 20px; font-family: Arial, sans-serif;">A React-based web application that allows users to share photos in a visually appealing and organized way. The design is centered around visuals, with options to follow friends and comment on content.</h4><br>
            <h6 style="color: #666; font-size: 16px;">You can view the project code on GitHub: 
                <a href="https://github.com/Manoj-Vamshi/ReactProject-PicSharingApp" target="_blank" style="color: #0066cc; text-decoration: none;">GitHub Link</a>
            </h6>
            `;
            break;
        case 'Portfolio':
            html = `
            <h4 style="color: #333; font-size: 24px; font-family: Arial, sans-serif;">A personal portfolio website created using JavaScript HTML CSS. It may showcase the individual's skills, projects, and other relevant information.</h4><br>
            <h6 style="color: #666; font-size: 16px;">You can view the project code on GitHub: 
                <a href="https://github.com/Manoj-Vamshi/ManojJSPortfolio" target="_blank" style="color: #0066cc; text-decoration: none;">GitHub Link</a>
            </h6>
            `;
            break;
        case 'JavaScript':
            html = `
            <h4 style="color: #333; font-size: 24px; font-family: Arial, sans-serif;">An LMS website streamlines learning by offering flexibility, personalization, and automation, making it ideal for schools, corporate training, and self-paced learning programs.</h4><br>
            <h6 style="color: #666; font-size: 16px;">You can view the project code on GitHub: 
                <a href="https://github.com/varunteja436/Finalprojectlms" target="_blank" style="color: #0066cc; text-decoration: none;">GitHub Link</a>
            </h6>
            `;
            break;
        default:
            html = '<p style="color: #999; font-size: 18px;">Page not found.</p>';
    }

    content.innerHTML = html;
}

loadContent('resume');
