import './App.css';
import Product from './components/product/Product';



export default function App() {
  return (
    <div>
      <div className='products'>
        {/*new Product ("milk","20uah")*/}
        <Product title={'milk'} price={'20uah'} />
        <Product title={'juice'} price={'30uah'} />
        <Product title={'bread'} price={'40uah'} />
      </div>
    </div>

  );
}