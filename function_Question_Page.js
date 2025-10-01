function openNextPage() {
    // Get the list of pages from localStorage
    var pages = JSON.parse(localStorage.getItem('pages'));

    // Find the current page index
    var currentPage = window.location.pathname.split("/").pop();
    var currentIndex = pages.indexOf(currentPage);

    // Open the next page if it exists
    if (currentIndex >= 0 && currentIndex < pages.length - 1) {
        window.location.href = pages[currentIndex + 1];
    } 
    else {
  
        // Redirect to results.html 
        window.location.href = 'results.html';
    }
};
