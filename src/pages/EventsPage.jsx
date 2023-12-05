import { Link } from 'react-router-dom';
import notification from '../img/notificacion.png'
import Navbar from '../components/Navbar'
import eventImage from '../img/eventos-sociales.jpg'


function EventsPage() {
  return (
    <>
      <Navbar/>
      <div className="h-screen overflow-auto bg-[url('https://i.ibb.co/LQf91TG/fondo-EB.webp')] bg-cover bg-center flex flex-col justify-center items-center">
        <h1 className='h-[10%] text-7xl text-[#FFEEB3]'>Eventos</h1>
        <div className='w-full flex h-full justify-center items-center gap-3 flex-wrap'>
       
              <div className='bg-[#000000a4] w-1/4 h-[90%] flex flex-col justify-between rounded-2xl text-[#FFEEB3]' >
                <img className="h-2/4 w-[90%] border-4 m-4 rounded-2xl border-[#AC703E]" src={eventImage} alt="" />
                <h2 className='text-center text-2xl'>nombre evento</h2>
                <p className='text-center text-xl'>Dirección del evento</p>
                <p className='text-center text-xl h-18 w-3/4 mx-auto'>descripción del evento</p>
                <p className='text-center text-xl '>fecha del evento</p>
                <div className='flex justify-between items-center'>
                  <Link className='flex items-center justify-center bg-[#FFEEB3] text-[#AC703E] text-xl m-2 font-bold h-12 w-2/5 rounded-full mt-2 hover:bg-[#AC703E] hover:text-[#FFEEB3] duration-300' to="/add-event">Editar evento</Link>
                  <button className='bg-[#FFEEB3] text-[#AC703E] text-xl m-2 font-bold h-12 w-1/3 rounded-full mt-2 hover:bg-red-700 hover:text-[#FFEEB3] duration-300'>Eliminar</button>
                  <img className='h-12 m-2' src={notification} alt="" />
                </div>
              </div>   
        </div>
      </div>
    </>
  )
}

export default EventsPage