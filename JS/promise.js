fetch("https://api.github.com/users/pooja12347777")
.then(response => {
    return response.json();

})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('error fetching data:',error)
});
