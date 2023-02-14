import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Auth } from './components/auth'
import { db } from '../config/firebase'
import { useEffect, useState } from 'react'
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { async } from '@firebase/util'



function App() {

  const [MovieList, setMovieList] = useState([])
  const moviesColletionRef = collection(db, "movies")


  //NEW MOVIE STATES

  const [newMovieTitle, setnewMovieTitle] = useState("")
  const [newReleaseDate, setnewReleaseDate] = useState("")
  const [IsNewMovieWinner, setIsNewMovieWinner] = useState(false)



  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesColletionRef);
      const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setMovieList(filteredData)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getMovieList();
  }, [])


  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesColletionRef, { title: newMovieTitle, realeaseDate: newReleaseDate, Nominated: IsNewMovieWinner })
      getMovieList();
    } catch (error) {
      console.log(error)
    }

  }



  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id)
    await deleteDoc(movieDoc)
    getMovieList();
  }

  return (
    <>
      <Auth />

      <div>
        <input type="text" placeholder='Movie Title...'
          onChange={(e) => setnewMovieTitle(e.target.value)} />
        <input type="number" placeholder='Release Date...'
          onChange={(e) => setnewReleaseDate(Number(e.target.value))} />
        <input type="checkbox" placeholder='Release Date...'
          checked={IsNewMovieWinner} onChange={(e) => setIsNewMovieWinner(e.target.checked)} />
        <label htmlFor="">Premiadas</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>


      <div>
        {MovieList.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <p>Year of release:{movie.realeaseDate}</p>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
