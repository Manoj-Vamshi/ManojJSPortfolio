function loadContent(page) {
    const content = document.getElementById('content');
    let html = '';
    switch(page) {
        case 'Azure':
            html = `
            <h2>Azure projects are yet to be added</h2>
            `;
            break;
        case 'Python':
            html = `
            <h2>Python projects are yet to be added</h2>
            `;
            break;
        case 'Java':
            html = `            
            <h2>Java projects are yet to be added</h2>
            `;
            break;
        case 'JavaScript':
            html = `
            <h2>JavaScript projects are yet to be added</h2>
            `;
            break;
        case 'reactJS':
            html = `
            <h2>reactJS</h2>
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