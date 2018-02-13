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
    reddit.search(searchTerm, sortBy, limit)
        .then(results => {
            let output = 'div class="card-columns">';
            console.log(results);
            // LOOP THRU POSTS
            results.forEach(post => {
                output += `
                <div class="card mb-2">
                <img class="card-img-top" src="" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">${truncateString(post.selftext, 100)}</p>
                  <a href="" target="_blank
                  " class="btn btn-primary">Read More</a>
                  <hr>
                  <span class="badge badge-secondary">Subreddit:</span> 
                  <span class="badge badge-dark">Score: </span>
                </div>
              </div>
                `;
            });
            output += '</div>';

            document.getElementById('results').innerHTML = output;
        });

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

    // Truncate String Function
    function truncateString(myString, limit) {
        const shortened = myString.indexOf(' ', limit);
        if (shortened == -1) return myString;
        return myString.substring(0, shortened);
    }