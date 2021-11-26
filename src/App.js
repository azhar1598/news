import React from 'react'
import './App.css'
import countries from './data'
import axios from 'axios'

function App() {

  const [data, setData] = React.useState([])
  const[country,setCountry]=React.useState('nl')


  React.useEffect(() => {

axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=972d8cf4f6ca48c792997c21390188e5`).then(response=>{
  console.log(response.data)
  setData(response.data.articles)
})  
  },[country])

  const handleChange=(e)=>{
   console.log(e.target.value)
   setCountry(e.target.value)
   setData([])
  }

  return (
    <div className="container">
      <select onChange={handleChange} className="container__country">
        <option value="">Select Country</option>
        {countries.map((country)=>{
          console.log(country.code)
          return(
            
              <option value={country.code}>{country.name}</option>
          
          )
        })}
      </select>
     <div className="container__card">
     
      {data.map((d,index)=>{    
        return(
        <div className="container__card__content">
        <img src={d.urlToImage} className="container__card__content__img" alt="No img found"/>
        <p className="container__card__content__source">{d.source.name}</p>
        <p className="container__card__content__title">{d.title}</p>
        <p className="container__card__content__description">{d.description}</p> 
      </div>
        )
      })}
      </div>
      
    </div>
  )
}

export default App
