
import React from 'react'

const Item = () => {
  return (
    
    <a href="/" className="flex flex-col gap-3" > 
      <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTQzMjY1NzE3NzU1NTg4OTI1/original/f4758962-d257-4588-96da-c383df75ffe9.jpeg?im_w=720" 
        alt="Imagem da acomodação"
        className="aspect-square object-cover" 
      />

      <div id='hospedagens'>
        <h3 className="text-xl font-semibold">Cabana ⋅ Itajubá</h3>
        <p className="truncate text-gray-500">Cabana na Mantiqueira a 1300 de altitude.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam aspernatur magnam doloremque eius iusto deserunt voluptates dignissimos similique.
          </p> 
      </div>

      <div>
        <p><span className="font-semibold">R$ 550</span> por noite </p>
      </div>

    </a>
  )
};

export default Item;