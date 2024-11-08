function loadContent(page) {
    const content = document.getElementById('content');
    let html = '';
    switch(page) {
        case 'Azure':
            html = `
            <h2>Azure</h2>
            `;
            break;
        case 'Phyton':
            html = `
            <h2>Phyton</h2>
            `;
            break;
        case 'Java':
            html = `            
            <h2>Java</h2>
            `;
            break;
        case 'javaScript':
            html = `
            <h2>javaScript</h2>
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