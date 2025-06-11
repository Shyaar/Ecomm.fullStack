import ProductsContext from './products'

const Home = () => {


  return (
    <>
      <h3 className="w-full font-bold text-left text-[24px] my-12">Welcome to the Continental, How may we Help you</h3>

      <div className="grid grid-cols-5 gap-6">
        <ProductsContext />
      </div>
    </>
  )
}

export default Home
