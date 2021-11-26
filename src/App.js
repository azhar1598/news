import React from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [data, setData] = React.useState([])
  const[country,setCountry]=React.useState('nl')

  let countries=[
    {name:'Argentina',code:'ar'},
    {name:'Australia',code:'au'},
    {name:'Austria',code:'at'},
    {name:'Belgium',code:'be'},
    {name:'Brazil',code:'br'},
    {name:'Bulgaria',code:'bg'},
    {name:'Canada',code:'ca'},
    {name:'China',code:'cn'},
    {name:'Colombia',code:'co'},
    {name:'Cuba',code:'cu'},
    {name:'Czech Republic',code:'cz'},
    {name:'Egypt',code:'eg'},
    {name:'France',code:'fr'},
    {name:'Germany',code:'de'},
    {name:'Greece',code:'gr'},
    {name:'Hong Kong',code:'hk'},
    {name:'Hungary',code:'hu'},
    {name:'India',code:'in'},
    {name:'Indonesia',code:'id'},
    {name:'Ireland',code:'ie'},
    {name:'Japan',code:'jp'},
    {name:'Latvia',code:'lv'},
    {name:'Lithuania',code:'lt'},
    {name:'Malaysia',code:'my'},
    {name:'Mexico',code:'mx'},
    {name:'Morocco',code:'ma'},
    {name:'Netherlands',code:'nl'},
    {name:'New Zealand',code:'nz'},
    {name:'Nigeria',code:'ng'},
    {name:'Norway',code:'no'},
    {name:'Philippines',code:'ph'},
    {name:'Poland',code:'pl'},
    {name:'Portugal',code:'pt'},
    {name:'Romania',code:'ro'},
    {name:'Russia',code:'ru'},
    {name:'Saudi Arabia',code:'sa'},
    {name:'Serbia',code:'rs'},
    {name:'Singapore',code:'sg'},
    {name:'Slovakia',code:'sk'},
    {name:'Slovenia',code:'si'},
    {name:'South Africa',code:'za'},
    {name:'South Korea',code:'kr'},
    {name:'Sweden',code:'se'},
    {name:'Switzerland',code:'ch'},
    {name:'Taiwan',code:'tw'},
    {name:'Thailand',code:'th'},
    {name:'Turkey',code:'tr'},
    {name:'UAE',code:'ae'},
    {name:'Ukraine',code:'ua'},
    {name:'United Kingdom',code:'gb'},
    {name:'United States',code:'us'},
    {name:'Venezuela',code:'ve'},
  


  ]

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
