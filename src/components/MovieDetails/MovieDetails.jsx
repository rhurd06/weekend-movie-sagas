// import { useHistory, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';


// function MovieDetails () {
//     const history = useHistory();
//     const details = useSelector(store => store.detailsReducer);
//     // const dispatch = useDispatch();

//     // let {id} = useParams();

//     useEffect(() => {
//         // dispatch({type: 'SET_MOVIE_DETAILS', payload: id});
//     }, []);


//     const handleSubmit = () => {
//         console.log(`clicked back to ml`);
//         history.push('/');
//     };

//     return (
//         <div>
//             <h3>{details.movie.title}</h3>
//             <img src={details.movie.poster} alt={details.movie.title} />
//             <p>{details.movie.description}</p>
//             {details.genres != undefined ? (
//                 <ul>
//                     {details.genres.map(i => {
//                         if(i.movie_id == details.movie.id){
//                             return <li key={i.genre_id}>{i.name}</li>
//                         }
//                     })}
//                 </ul>
//             ):(
//                 ''
//             )}
//             <button onClick={()=> handleSubmit()}>Back to Movies List</button>
//         </div>
//     )
// }

// export default MovieDetails;