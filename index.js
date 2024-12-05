//creates an event listener on button for "click" event, and after returning JSON format, uses a forEach method to iterate over each object in the
//db.json array and populate a <ul> element underneath with "suggested artists of the day".

const songButton = document.querySelector("#song-suggestions")
songButton.addEventListener("click", event => {
    fetch("http://localhost:3000/songs")
    .then(response => response.json())
    .then(songs => songs.forEach(
        songs => {
            const listItem = document.createElement("li")
            listItem.textContent = songs.artist
            document.querySelector("#song-list").append(listItem)
        }
    ))
}
)

const userSubmission = document.querySelector("#user-submission");
userSubmission.addEventListener("submit", event => {
    event.preventDefault()
    
    const newLi = document.createElement("li")
    const song = document.querySelector("#user-song").value

    const newLi2 = document.createElement("li")
    const artist = document.querySelector("#user-artist").value

    newLi.textContent = `${song} - ${artist}`
    
    
    document.querySelector("#user-submission-list").append(newLi)

})



document.querySelector("h1").addEventListener("mouseover", event => {
    event.target.style.color = "yellow";
})

document.querySelector("h1").addEventListener("mouseout", event => {
    event.target.style.color = "";
})