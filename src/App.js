import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories';
import Products from './components/products';
import Cart from './components/cart'
import Title from './components/title'
import { useSelector } from 'react-redux';
import { If } from 'react-if'


function App() {
  const state = useSelector((state) => {
    return {
      show: state.cart.show,
      // show: state.cart.show
    };
  });
  return (
    <>
      <If condition={state.show}>
        <Cart />
      </If>
      <Header />
      <Categories />
      <Title />
      <Products />
      <Footer />
    </>
  );
}

export default App;
