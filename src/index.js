import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
function BookList() {
    return (
        
      <section>
        <Book title="High performance habit" author="Brendon Burchard" image="https://m.media-amazon.com/images/I/714PYe6ugmL._AC_UY218_.jpg" desc=" High Performance Habit"/>   
        <Book title="The Zahir" author="Paolleo cohello " image="https://pos.booksmandala.com/images/5214" desc ="An Book By Writer of The alchemist" /> 
        <Book  title = "Jiban Kada Ki Ful"image = "https://pos.booksmandala.com/images/8649" author =" Jamak Ghimire" desc ="An brief summary of the life of writer"/>   
      </section>
      
    )
  }
  
  const Book = ({image,desc,author,title}) => {
     return (
       <article>
         <Image imgg={image} />
         <Description desc={desc}/>
         <Author auth ={author}/>
         <Title title ={title}/>
         
       </article>
     )
  }
  
  const Image = ({imgg}) => <img src = {imgg} alt= '' />
  const Description = ({desc}) => <h4>{desc}</h4>
  const Author = ({auth}) => <h4>{auth}</h4>
  const Title = ({title}) =><h1>{title}</h1>

ReactDOM.render(<BookList />,document.getElementById('root'));