import React from 'react'
import '../styles/Carrousel.css'
import { useEffect, useState } from "react"


const Carousel = () => {
    let [index, setIndex] = useState(0);

    const images = [
        {
          title: 'Buenos Aires - Argentina',
          url: 'https://i.ibb.co/3vbRRnB/Buenos-Aires-Argentina.jpg'
        },
        {
          title: 'Ciudad de Mexico - Mexico',
          url: 'https://i.ibb.co/njFnC9F/Ciudadde-Mexico-Mexico.jpg'
        },
        {
          title: 'Dubai - Emiratos Arabes',
          url: 'https://i.ibb.co/bd13YRw/Dubai-Emiratos-Arabes.jpg'
        },
        {
          title: 'Hong Kong - China',
          url: 'https://i.ibb.co/yR1L6QL/Hong-Kong-China.jpg'
        },
        {
          title: 'Los Angeles - Estados Unidos',
          url: 'https://i.ibb.co/n6cQwHL/Los-Angeles-Estados-Unidos.jpg'
        },        
        {
          title: 'Madrid - España',
          url: 'https://i.ibb.co/641vr9D/Madrid-Espa-a.jpg'
        },
        {
          title: 'Miami - Estados Unidos',
          url: 'https://i.ibb.co/wB1ck5R/Miami-Estados-Unidos.jpg'
        },
        {
          title: 'Milan - Italia',
          url: 'https://i.ibb.co/y8JCCrG/Milan-Italia.jpg'
        },
        {
          title: 'Nueva York - Estados Unidos',
          url: 'https://i.ibb.co/x1cW4sQ/Nueva-York-Estados-Unidos.jpg'
        },
        {
          title: 'Paris - Francia',
          url: 'https://i.ibb.co/vsgXRLQ/Paris-Francia.jpg'
        },
        {
          title: 'Pekin - China',
          url: 'https://i.ibb.co/WVkQG9N/Pekin-China.jpg'
        },        
        {
          title: 'Tokio - Japon',
          url: 'https://i.ibb.co/5WfkQ9k/Tokio-Japon.jpg'
        },
    ]

    useEffect(
        ()=>{
            setTimeout(()=>{
                if(index == 11){
                    setIndex(0)
                }else{
                    setIndex(index + 1)
                }
            }, 7000)
        },
        [index]
    )
    
    const handlePrev = () => {
        if(index == 0){
            setIndex(11)
        }else{
            setIndex(index - 1)
        }        
    }

    const handleNext = () => {
        if(index == 11){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }

    return (
        <div>
            <h2>Popular Mytineraries</h2>
            <img src={images[index].url} alt={images[index].title} width={400}/>
            <p>{images[index].title}</p>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Carousel
