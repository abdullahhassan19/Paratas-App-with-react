import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers'
import Filters from './components/Filters'
import Restaurants from './components/Restaurants';



import userinfo from './data/userinfo.json'
import offers from './data/offers.json'
import restaurants from './data/restaurants.json';




import { useState } from 'react';


const filters =[
  "Cost High to Low",
  "Cost Low to High",
  "Ratings",
  "Delivery Time",
  
]
function App() {
  const [filterBy , setFilterBy ] = useState("")
  const [data, setData] =useState(restaurants)
  const updateFilter = (newFilter) =>{

    switch(newFilter){
      case "Cost High to Low":{
        setFilterBy("Cost High to Low")
        data.sort((a,b)=>b.costfortwo-a.costfortwo)
        // console.log(data.map((d)=>d.costfortwo));
        setData([...data]);
        

        break;
      }
      case "Cost Low to High":{
        setFilterBy("Cost Low to High")
        data.sort((a,b)=>a.costfortwo-b.costfortwo)
        // console.log(data.map((d)=>d.costfortwo));
        setData([...data]);
        

        break;
      }
      case "Ratings":{
        setFilterBy("Ratings")
        data.sort((a,b)=>b.rating-a.rating)
        setData([...data])
      }

      case "Delivery Time":{
        setFilterBy("Delivery Time")
        data.sort((a,b)=>b.rating-a.rating)
        setData([...data])
      }
      default:{
        // setData(restaurants)
        break;
      }
    }

  }
  return (
    <div>
      <Navbar {...userinfo.location}/>
      <Offers offers={offers}/>
      <section className='near-you'>
        <Filters filters={filters} currentFilteredBy={filterBy} updateFilter={updateFilter}/>
        <Restaurants restaurants={data}/>
      </section>
    </div>
  );
}

export default App;
