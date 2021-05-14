function addMovie () {

const genres = [
    {genre: "Adventure", id: 1},
    {genre: "Animated", id: 2},
    {genre: "Biographical", id: 3},
    {genre: "Comedy", id: 4},
    {genre: "Disaster", id: 5},
    {genre: "Drama", id: 6},
    {genre: "Epic", id: 7},
    {genre: "Fantasy", id: 8},
    {genre: "Musical", id: 9},
    {genre: "Romantic", id: 10},
    {genre: "Science Fiction", id: 11},
    {genre: "Space-Opera", id: 12},
    {genre: "Superhero", id: 13},
];

    return(
        <div>
            <input type="text" placeholder="Movie Title" />
            <input type="text" placeholder="Movie Poster URL" />
            <input type="text" placeholder="Description" />
            <button>Cancel</button>
            <button>Save</button>
        </div>
    )
}

export default addMovie;