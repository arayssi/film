import "./App.css";
import React, { useState} from "react";
import NavBar from "./components/Navbar/NavBar";
import Filter from "./components/Filter/Filter";
function App() {
  
  const[ratingChange,setRatingChange]=useState(1);
  const[serchInput, setSerchInput] = useState("");
  const [newMovie, setNewMovie]= useState({});
  const [movieData,setMovieData] = useState([
          {
            id: Math.random(),
              title: "sejjin",
              posterUrl:
                  "data:image/jpeg;base64,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",
              rating: 5,
              description:
              " تدور أحداث قصة فيلم سجين 7 حول فتاة تدعى إيرما تقع في حب ابن عمها جالانج المتزوج ولديه أطفال. لكنها تصبح مهووسة به وتريد أن تكون المرأة الوحيدة في حياة جالانجل ."
          },
          {
              id: Math.random(),
              title: "The Hills Have Eyes",
              posterUrl:
                  "data:image/jpeg;base64,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",
              rating: 5,
              description:
                  "The Hills Have Eyes is a 2006 American horror film directed by Alexandre Aja and co-written by Aja and Grégory Levasseur, in their English-language debut.",
          },
      
          {
              id: Math.random(),
              title: "Interstellar",
              posterUrl:
                  "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg",
              rating: 4,
              description:
                  "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel.",
          },
      
          {
              id: Math.random(),
              title: "No Time To Die",
              posterUrl:
                  "https://i.dailymail.co.uk/1s/2020/10/01/01/33837226-8792377-image-a-45_1601513129403.jpg",
              rating: 4,
              description:
                  "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help.",
          },
          {
              id: Math.random(),
              title: "The Purge Election Year",
              posterUrl:
                  "http://gonewiththetwins.com/new/wp-content/uploads/2016/07/purgeelectionyear.jpg",
              rating: 3,
              description:
                  "It's been two years since Leo Barnes (Frank Grillo) stopped himself from a regrettable act of revenge on Purge Night.",
          },
          {
              id: Math.random(),
              title: "The Curse of la llorona",
              posterUrl:
                  "https://dci832c741skk.cloudfront.net/assets/files/10206/curse-of-la-llorona-movie-review.800x600.jpg",
              rating: 5,
              description:
                  "Ignoring the eerie warning of a troubled mother suspected of child endangerment",
          },
          {
              id: Math.random(),
              title: "To All the Boys",
              posterUrl:
                  "https://upload.wikimedia.org/wikipedia/en/d/d0/To_all_the_boys_always_and_forever.jpg",
              rating: 6,
              description:
                  "Lara Jean Covey writes letters to all of her past loves, the letters are meant for her eyes only.",
          },
          {
              id: Math.random(),
              title: "spiderman No way Home",
              posterUrl:
                  "https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/10/Andrew-Gardfield-in-Spider-Man-No-Way-Home.confirmed.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
              rating: 5,
              description:
                  "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong",
          },
          {
              id: Math.random(),
              title: "A Quiet Place Part II",
              posterUrl:
                  "https://m.media-amazon.com/images/M/MV5BMTE2ODU4NDEtNmRjNS00OTk1LTg4NmMtNTAzYzVlNzJmYjgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
              rating: 4,
              description:
                  "With the newly acquired knowledge of the seemingly invulnerable creatures' weakness, grief-stricken Evelyn Abbott finds herself on her own, with two young teens,",
          },
          {
              id: Math.random(),
              title: "Gravity",
              posterUrl:
                  "https://fr.web.img6.acsta.net/pictures/210/232/21023233_20130729173134181.jpg",
              rating: 4,
              description:
                  "Dr. Ryan Stone (Sandra Bullock) is a brilliant medical engineer on her first shuttle mission, with veteran astronaut Matt Kowalski (George Clooney) in command of his last flight before retiring.",
          },
          {
              id: Math.random(),
              title: "Get Out",
              posterUrl:
                  "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
              rating: 7,
              description:
                  "Chris and his girlfriend Rose go upstate to visit her parents for the weekend.",
          },
          {
              id: Math.random(),
              title: "X-MEN",
              posterUrl:
                  "https://fr.web.img6.acsta.net/pictures/16/04/13/17/27/399447.jpg",
              rating: 5,
              description:
                  "Since the dawn of civilization, he was worshiped as a god. Apocalypse, the first and most powerful mutant from Marvel's X-Men universe,",
          },
          {
              id: Math.random(),
              title: "Black Widow",
              posterUrl:
                  "https://lumiere-a.akamaihd.net/v1/images/image_b97b56f3.jpeg?region=0%2C0%2C540%2C810",
              rating: 4,
              description:
                  "In Marvel Studios' action-packed spy thriller Black Widow, Natasha Romanoff aka Black Widow confronts the darker parts of her .",
          },
          {
              id: Math.random(),
              title: "Harry Potter and the half-blood prince",
              posterUrl:
                  "https://play-lh.googleusercontent.com/L8RMA1CQCx-CAxzTfyF-5Vh-pSJwIbr1qIxy9LUOclzkg5N1CFbsQctYT19IEuPfIZa1PzKep9191naqTao",
              rating: 5,
              description:
                  "In Harry Potter's (Daniel Radcliffe's) sixth year at Hogwarts School of Witchcraft, he finds a book marked mysteriously, ",
          },
      
          {
              id: Math.random(),
              title: "Insidious the last key",
              posterUrl:
                  "https://upload.wikimedia.org/wikipedia/en/3/34/InsidiousTheLastKey.jpg",
              rating: 6,
              description:
                  "The parapsychologist Dr. Elise Rainier has nightmares with her childhood in New Mexico,",
          },
      
          {
              id: Math.random(),
              title: "Raya and the last dragon",
              posterUrl:
                  "https://fr.web.img5.acsta.net/c_310_420/pictures/21/05/11/10/35/1825655.jpg",
              rating: 5,
              description:
                  "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. ",
          },
      ]);
      
     
    
 
 

  const handleSave =(newMovie) => {
    setMovieData((prevMovies) => [...prevMovies, { ...newMovie, id: Math.random() }]);

}; 
  
  return(
    <>
    <NavBar ratingChange={ratingChange} setRatingChange={setRatingChange} setSerchInput={setSerchInput} newMovie={newMovie} setNewMovie={setNewMovie} handleSave={handleSave} />    
    <Filter ratingChange={ratingChange} serchInput={serchInput} movieData={movieData}/>
    </>
  );
};
export default App;
