import pharmacy from '../../assets/img/westeros.png'
import ListaCategoria from '../../components/categorias/listaCategoria/ListaCategoria';

function Produto() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'></h2>
              <p className='text-xl'>Encontre aqui os seus produtos!!!</p>
              <p className='text-xl'>Você também pode navegar pelas categorias abaixo</p>
            </div>
  
            <div className="flex justify-center ">
              <img src={pharmacy} alt="" className='w-2/3 py-4 rounded-3xl' />
      
            </div>
          </div>
        </div>
      
      <ListaCategoria />
      </>
    );
}

export default Produto;