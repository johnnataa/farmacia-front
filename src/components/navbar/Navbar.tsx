import { Link } from "react-router-dom"

function Navbar() {

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Westeros Pharmacy</div>

            <div className='flex gap-4'>
            <Link to='/home' className='hover:font-bold'>Home</Link>
            <Link to='/produtos' className='hover:font-bold'>Produtos</Link>
            <Link to='/categorias' className='hover:font-bold'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:font-bold'>Cadastrar Categoria</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar