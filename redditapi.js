export default{
    search: function(searchTerm, sortBY, limit) {
        fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${limit}`)
        .then(res => res.json())
        .then(data => console.log(data));
    }
}