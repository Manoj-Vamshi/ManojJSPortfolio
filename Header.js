function loadContent(page) {
    const content = document.getElementById('content');
    let html = '';
    switch(page) {
        case 'resume':
            html = `
            <h2>Resume</h2>
            
            `;
            break;
        case 'Projects':
            html = `
            <h2>Projects</h2>
            
            `;
            break;
        case 'About':
            html = `
            <h2>About</h2>
            
            `;
            break;
        case 'Contact':
            html = `
            <h2>Contact</h2>
            
            `;
            break;
        default:
            html = '<p>Page not found.</p>';
        }

        content.innerHTML = html;
    }


    loadContent('resume');