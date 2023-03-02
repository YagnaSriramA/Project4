import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import React from "react";
import './style.css'
import data from './data'

function App()
{
    const deets = data.map(pig =>{
        return (
            <Card 
            img={pig.coverImg}
            rating={pig.stats.rating} 
            reviewCount={pig.stats.reviewCount} 
            country={pig.location} 
            title={pig.title} 
            price={pig.price} 
            />
        )
        
    })

    return(
        <div>
            <Navbar />
            <Hero /> 
            <div className="cards-row">{deets}</div>  
                
        </div>
    )
}

export default App