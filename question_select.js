function saveAndOpenPages() {
    // Get all selected checkboxes
    var checkboxes = document.querySelectorAll('input[name="page"]:checked');
    var pages = [];

    checkboxes.forEach(function(checkbox) {
        pages.push(checkbox.value);
    });

    // Save pages in localStorage
    localStorage.setItem('pages', JSON.stringify(pages));

    // Open the first page
    if (pages.length > 0) {
        window.location.href = pages[0];
    }
}


