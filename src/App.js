import './App.css';
import Bar,{FooterComponent} from './Component/NavigationBar'
import ProductList from './Component/ProductList';


function App() {
  return (
    <div className="App">
     <Bar/>
     <ProductList/>
     <FooterComponent/>
     
    </div>
  );
}

export default App;
