

import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../src/img/logow.png"



const Header = () => {

  const [OpenMenu, setCloseMenu] = useState (false);

  return (

    // min-h-screen = cobre cabeçalho + home 
    <div className=" bg-[url('src/img/bg-inicio-site.jpg')] w-full bg-cover bg-top-right pb-0 bg-no-repeat "> 
      <div className="absolute w-20.5 text-white  flex items-center pl-2 px-1   ">
        <img src={Logo} alt="" />
        <p className="pl-2 text-2xl flex text-gradient">ill Trips</p>
      </div>
      {/* // <div className=" text-black">  */}
    
      
      {/* Cabeçalho transparente por cima */}
      <nav className="flex justify-center text-white font-extralight">


        <div className="[@media(min-width:1120px)]:block hidden  pt-5 mb-7">
          <div className="pt-2" >
            <Link to="/" className="px-18 text-xl text-gray-400 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-150"  >Início</Link>
            <Link to="/home" className="px-18 text-xl text-gray-400 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-150" >Hospedagens</Link>
            <Link to="/" className="px-18 text-xl text-gray-400 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-150" >Contato</Link>
            <Link to="/" className="px-18 text-xl text-gray-400 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-150" >Sobre</Link>
          </div>

        </div>

        <div className="flex  " >
          <div className="pl-20 absolute top-1 pt-5 right-7">
            {/* <buttom className="border  px-4 text-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-500 escale-"><Link  to={"/login"}>Login</Link></buttom>
            <buttom className=" pt-0.5 border px-2 cursor-pointer bg-white text-black transition-all duration-500 escale-">Contato</buttom> */}
            
            <buttom className="text-xl [@media(min-width:1120px)]:block hidden" >
              <Link className="flex border rounded-3xl px-4 py-1" to={"/login"}>
                <div className="pr-0"><i class="bi bi-person-circle"></i></div>
                <p className="ml-2 text-lg">Usuário</p>
              </Link>
            </buttom>
        </div>



        <div className="[@media(max-width:1119px)]:block hidden  ">
          <div className="[@media(min-width:701px)]:block hidden py-2 ">
            <Link className="px-6 text-xl text-gray-500 hover:text-white cursor-pointer transition-all duration-500 transform hover:scale-110" to="/">Início</Link>
            <Link className="px-6 text-xl text-gray-500 hover:text-white cursor-pointer transition-all duration-500 transform hover:scale-110" to="/">Hospedagens</Link>
            <Link className="px-6 text-xl text-gray-500 hover:text-white cursor-pointer transition-all duration-500 transform hover:scale-110" to="/">Contato</Link>
            <Link className="px-6 text-xl text-gray-500 hover:text-white cursor-pointer transition-all duration-500 transform hover:scale-110" to="/">Sobre</Link>
          </div>

          <div className="pl-10 text-md  absolute right-10 top-0 pt-2 [@media(min-width:915px)]:block hidden ">
            {/* <buttom className="border px-1  cursor-pointer hover:bg-white hover:text-black transition-all duration-500 escale-">Login</buttom>
            <buttom className="border px-1  cursor-pointer bg-white text-black transition-all duration-500 escale-">Contato</buttom> */}
            
             <buttom className="text-lg top-0 " >
              <Link className="flex border rounded-3xl px-4 py-0" to={"/login"}>
                <div className="pr-0"><i class="bi bi-person-circle"></i></div>
                <p className="ml-2 text-lg">Usuário</p>
              </Link>
            </buttom>
          </div>
        </div>

      

        <div className="[@media(max-width:700px)]:block hidden ">
            <div   className="absolute top-3 right-0  text-5xl w-20  cursor-pointer  transition-transform" onClick={() => setCloseMenu(!OpenMenu)}> 
              <i  class="bi bi-list"></i>
            </div>
          </div> 
            
          <div className=" ">

            <ul className={`[@media(max-width:899px)]:block hidden absolute  top-18 left-0 w-full bg-white flex-col transform transition-transform space-y-4
              ${OpenMenu 
              ? "opacity-100" 
              : "opacity-0"}`} 

              style={{transition: "transform 0.3s ease, opacity 0.3s ease"  }} >
              
                <li className="mt-3 list-none w-full text-2xl text-center p-4 hover:bg-blue-400  text-black transition-all cursor-pointer "><Link to="/">Início</Link></li>
                <li className="list-none w-full text-2xl text-center p-4 hover:bg-blue-400  text-black transition-all cursor-pointer "><Link to="/">Hospedagens</Link></li>
                <li className="list-none w-full text-2xl text-center p-4 hover:bg-blue-400  text-black transition-all cursor-pointer pb-10"><Link to="/">Sobre</Link></li>
                <li className="list-none w-full text-2xl text-center p-4 hover:bg-blue-400  text-black transition-all cursor-pointer pb-10"><Link to="/">Contato</Link></li>
                <li className="list-none w-full text-2xl text-center p-4 hover:bg-blue-400  text-black transition-all cursor-pointer pb-10"><Link to="/">Login</Link></li>
            </ul>

          </div>
       </div> 
      </nav>    
   </div>
  )
}

export default Header;
