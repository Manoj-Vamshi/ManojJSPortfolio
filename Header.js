function loadContent(page) {
    const content = document.getElementById('content');
    let html = '';
    switch(page) {
        case 'VRVevents':
            html = `
            <h6>a React-based web application designed for managing events. You can explore the project for further details, features, and the specific technologies it uses.</h6><br><h6>You can view the project code on GitHub: <a href="https://github.com/Manoj-Vamshi/ReactProjectonEventManagement" target="_blank">https://github.com/manojvamshi/VRVevents</a></h6>
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
