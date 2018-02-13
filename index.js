import reddit from './redditapi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', e => {
    // GET SEARCH TERM
    const searchTerm = searchInput.value;
    // GET SORTBY
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    // GET LIMIT
    const limit = document.getElementById('limit').value;

    if(searchTerm == '') {
        // SHOW MESSAGE
        showMessage('Please add a search term', 'alert-danger');
    }

    // CLEAR INPUT
    searchInput.value = '';

    // SEARCH REDDIT
    reddit.search(searchTerm, sortBy, limit);

    e.preventDefault();
});

// SHOW MESSAGE
    function showMessage(message, className){
        // CREATE DIV
        const div = document.createElement('div');
        // ADD CLASS
        div.className = `alert ${className}`;
        // ADD TEXT
        div.appendChild(document.createTextNode(message));
        // GET THE PARENT CONTAINER
        const searchContainer = document.getElementById('search-container');
        // GET SEARCH
        const search = document.getElementById('search');

        // INSERT MESSAGE
        searchContainer.insertBefore(div,search);

        // TIMEOUT ALERT
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }