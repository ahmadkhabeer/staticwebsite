// Function to fetch and inject HTML content into a template
function loadTemplate(url, templateId, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // Create a new DOM parser
            var parser = new DOMParser();
            // Parse the HTML string into a document
            var doc = parser.parseFromString(html, 'text/html');
            // Get the content from the document
            var content = doc.body.innerHTML;

            // Find the template and container elements
            var template = document.getElementById(templateId);
            var container = document.getElementById(containerId);

            // Set the template's innerHTML to the fetched content
            template.innerHTML = content;

            // Clone the template content and append to the container
            var clone = document.importNode(template.content, true);
            container.appendChild(clone);
        })
        .catch(error => console.error('Error loading template:', error));
}
