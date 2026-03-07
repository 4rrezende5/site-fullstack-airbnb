



const Highlights = () => {

  return (

    // Seção vantagens
    <div className="mx-60 [@media(max-width:500px)]:mx-0 mb-14  md:scale-90">
      <div className="justify-center flex" >
        <h1 className="text-5xl [@media(max-width:500px)]:text-4xl mt-10 mb-20 font-bold">Vantagens</h1>
      </div>

        {/* Viaje com conforto */}

      <div className="[@media(min-width:501px)]:flex [@media(min-width:501px)]:justify-center md:flex lg:flex  mb-10 [@media(max-width:500px)]:flex [@media(max-width:500px)]:flex-col">
        <div className="mx-5">
          <h3 className="[@media(max-width:500px)]:text-3xl md:text-3xl mb-4  ">Viaje com <span className="block font-bold leading-none">conforto.</span></h3>
          <p className="block md:mr-10 mb-5">Lorem ipsum dolor sit amet consectetu. um dolor sit amet,consectetur adipisicisertaetttstetettrtet srdfgd gng elit. <span className="block">Libero nam pariatur aperiam fugiat iure adipisci jgflefie sfe grgergg gderge</span></p>
        </div>
        <div className=" ">
          <img className="ml-5 w-100.5 h-50.5 rounded-2xl object-cover [@media(max-width:500px)]:mb-20 [@media(max-width:500px)]:w-80" src="../src/img/viaje-img.jpg" alt="viaje com conforto" />
        </div>
      </div>
          {/* Os melhores hotéis */}
        <div className="[@media(min-width:501px)]:flex [@media(min-width:501px)]:justify-center [@media(max-width:500px)]:flex  [@media(max-width:500px)]:flex-col-reverse  lg:flex mb-10">
          <div className=" ">
            <img className="ml-5 w-100.5 h-50.5 rounded-2xl object-cover [@media(max-width:500px)]:mb-10 [@media(max-width:500px)]:w-80" src="../src/img/melhor-hotel.jpg" alt="viaje com conforto" />
          </div>
          <div className="[@media(max-width:500px)]:ml-5 ml-20">
            <h3 className="[@media(max-width:500px)]:text-3xl md:text-3xl mb-4  ">Os melhores <span className="block font-bold leading-none">hotéis.</span></h3>
            <p className="block mr-10 mb-5">Lorem ipsum dolor sit amet consectetu. um dolor sit amet,consectetur adipisicisertaetttstetettrtet srdfgd gng elit. <span className="block">Libero nam pariatur aperiam fugiat iure adipisci jgflefie sfe grgergg gderge</span></p>
          </div>
        </div>
        {/* Os melhores destinos */}
       <div className="[@media(min-width:501px)]:flex [@media(min-width:501px)]:justify-center md:flex lg:flex  mb-10 ">
        <div className="mx-5">
          <h3 className="[@media(max-width:500px)]:text-3xl md:text-3xl mb-4  ">Os melhores... <span className="block font-bold leading-none">destinos!</span></h3>
          <p className="block md:mr-10 mb-5">Lorem ipsum dolor sit amet consectetu. um dolor sit amet,consectetur adipisicisertaetttstetettrtet srdfgd gng elit. <span className="block">Libero nam pariatur aperiam fugiat iure adipisci jgflefie sfe grgergg gderge</span></p>
        </div>
        <div className=" ">
          <img className="ml-5 w-100.5 h-50.5 rounded-2xl object-cover [@media(max-width:500px)]:mb-20 [@media(max-width:500px)]:w-80" src="../src/img/destino-img.jpg" alt="viaje com conforto" />
        </div>
      </div>

    </div>

  )
}

export default Highlights;