import { Link } from "react-router-dom"

function Navbar() {


  return (
    <>
            <>
                <nav className="bg-[#4A2D0B] h-[90px] flex justify-between items-center px-4">
                    <h1 className="text-3xl font-bold" ><Link to='/'>EventsBrew</Link></h1>
                    <ul className="flex gap-x-2 text-3xl">
                        <li className="bg-[#FFEEB3] text-[#AC703E] rounded-xl p-2 hover:bg-[#AC703E] hover:text-[#FFEEB3] duration-300"><Link to="/profile">nombre de usuario</Link></li>
                        <li className="bg-[#FFEEB3] text-[#AC703E] rounded-xl p-2 hover:bg-[#AC703E] hover:text-[#FFEEB3] duration-300"><Link to='/events'>Mis eventos</Link></li>
                        <li className="bg-[#FFEEB3] text-[#AC703E] rounded-xl p-2 hover:bg-[#AC703E] hover:text-[#FFEEB3] duration-300"><Link to='/add-event'>Añadir evento</Link></li>
                        <li className="bg-[#FFEEB3] text-[#AC703E] rounded-xl p-2 hover:bg-[#AC703E] hover:text-[#FFEEB3] duration-300"><Link to='/'>Salir</Link></li>
                    </ul>
                </nav>
            </>
    </>
  )
}

export default Navbar