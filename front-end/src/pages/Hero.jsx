

import React from "react";
import { Link } from "react-router-dom";



const Hero = () => {
  return (

    <div className=" bg-[url('src/img/bg-inicio-site.jpg')]    bg-cover w-full  bg-no-repeat">
      <div className="text-white [@media(max-width:899px)]:text-ssm [@media(max-width:899px)]:flex-col [@media(min-width:900px)]:text-xl   ">
        <div className="
        px-40 py-80 
        [@media(max-width:500px)]:px-7 
        [@media(max-width:500px)]:py-40
        [@media(min-width:501px)]:px-30
        [@media(max-width:1120px)]:py-50 
        "> 
          
          <h1 className="
            [@media(max-width:500px)]:text-[40px] 
            [@media(max-width:500px)]:leading-9 
            [@media(min-width:501px)]:text-[50px] 
            [@media(max-width:1120px)]:leading-12 
            font-extralight text-5xl 
            mb-10
            ">Descubra um...<span className=" block font-bold ">novo mundo!</span>
          </h1>

          <p className="
            font-extralight
            [@media(max-width:500px)]:text-[25px] 
            [@media(max-width:500px)]:leading-7 
            "
            >Encontre destinos que ficarão sempre em sua memória <span className="block" >com um orçamentos que cabem no seu bolso.</span>
          </p>
    
          <div className=" pt-10 [@media(max-width:500px)]:text-sm ">
            <a href="#">
              <buttom className="
              [@media(max-width:500px)]:px-1 
              border px-4 py-2 
              cursor-pointer 
              hover:bg-white 
              hover:text-black 
              transition-all 
              duration-500 escale-"
              ><Link to={"/home"}>Conhecer</Link></buttom>
            </a>

            <a href="#">
              <buttom className="
              [@media(max-width:500px)]:px-1 
              border px-4 py-2  
              cursor-pointer 
              bg-white text-black 
              transition-all duration-500 
              escale-"
              ><Link to={"/register"}>Cadastre-se</Link></buttom>
            </a>
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default Hero;