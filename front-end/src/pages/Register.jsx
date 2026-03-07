

import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
     <section className="flex  bg-[url('/img/bg-')] w-full bg-cover">
      <div  className="items-center mx-auto  max-w-7xl grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-8 p-8 h-100 flex flex-col" >
        <h1 className="font-bold pt-40 text-3xl">Faça seu cadastro!</h1>

        <form className="flex flex-col cursor-pointer" action="">
          <input className="border px-9 py-1 text-xl rounded-4xl pl-3 mb-1" placeholder="Digite seu nome" type="text" />
          <input className="border px-9 py-1 text-xl rounded-4xl pl-3 mb-1" placeholder="Digite seu email" type="email" />
          <input className="border px-9 py-1 text-xl rounded-4xl pl-3 mb-3"  placeholder="Digite sua senha" type="password" />
          <buttom className="border text-white hover:bg-black rounded-2xl py-1 px-40 bg-gray-500 transition-all duration-300" >Cadastrar</buttom>
        </form>

        <p>Já tem uma conta? <Link className="text-blue-500" to={"/login"}>Faça login aqui!</Link></p>
      </div>
    </section>
  )
}

export default Register;