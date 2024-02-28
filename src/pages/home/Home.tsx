import { Link } from 'react-router-dom';
import homeLogo from '../../assets/img/home.jpg'
import ListaCategoria from '../../components/categorias/listaCategoria/ListaCategoria';

function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Westeros Pharmacy, a melhor dos sete reinos!!!</p>
  
              <div className="flex justify-around gap-4">
              
                <Link to='/produtos' className='rounded bg-white text-blue-800 py-2 px-4'>Ver produtos</Link>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3 py-4 rounded-3xl' />
      
            </div>
          </div>
        </div>
      
      <ListaCategoria />
      </>
    );
}

export default Home;