
import React from 'react'

const Footer = () => {
  return (
   
      <div className='text-white bg-black'>
        <section className="justify-center flex pt-3 mb-2 cursor-pointer">
          <a href="#"><button className='text-4xl  ' title="instagram button"><i class="bi bi-instagram"></i></button></a>
          <a href="#"><button className='text-4xl  mx-7' title="ffacebook button"><i class="bi bi-facebook"></i></button></a>
          <a href="#"><button className='text-4xl '  title="tiktok button"><i class="bi bi-tiktok"></i></button></a>
        </section>
        
        <section className="justify-center flex text-xl space-y-4">
          <a className='' href="#">Suporte</a>
          <a className=' mx-3' href="#">Informações</a>
          <a className='' href="#">Marketing</a>
        </section>
        <section className="justify-center flex pb-3">
          <p>WillTrips 2026 ©Todos os direitos reservados</p>
        </section>
      </div>

  )
}

export default Footer;