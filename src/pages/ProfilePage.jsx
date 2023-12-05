import React from 'react'
import Navbar from '../components/Navbar'

function ProfilePage() {
  return (
    <>
      <Navbar/>
      <div className="h-screen overflow-auto bg-[url('https://i.ibb.co/LQf91TG/fondo-EB.webp')] bg-cover bg-center flex flex-col justify-center items-center">
        <div className='flex justify-around items-center bg-[#0000007c] w-4/5 h-3/4 rounded-2xl border-4 border-[#AC703E]' >
          <form className="flex flex-col h-full w-1/2 justify-center items-center mx-5" action="">
            
            <input type="file" className='border-4 border-[#AC703E] w-2/5 h-2/5 rounded-full hover:cursor-pointer'/>
            
            <label className='text-left w-full text-xl text-[#FFEEB3]' htmlFor="username">Nombre:</label>
            <input className="h-[10%] w-full my-2 pl-2 bg-[#FFEEB3] text-[#AC703E] placeholder:text-[#AC703E] font-bold"  type="text" name='username' placeholder='Nombre'/>

            <label className='text-left w-full text-xl text-[#FFEEB3]' htmlFor="lastname">Apellidos:</label>
            <input className="h-[10%] w-full my-2 pl-2 bg-[#FFEEB3] text-[#AC703E] placeholder:text-[#AC703E] font-bold"  type="text" name='lastname' placeholder='Apellidos'/>

            <label className='text-left w-full text-xl text-[#FFEEB3]' htmlFor="phone">Telefono:</label>
            <input className="h-[10%] w-full my-2 pl-2 bg-[#FFEEB3] text-[#AC703E] placeholder:text-[#AC703E] font-bold"  type="text" name='phone' placeholder='Telefono'/>
          </form>
        </div>
      </div>
    
    </>
  )
}

export default ProfilePage