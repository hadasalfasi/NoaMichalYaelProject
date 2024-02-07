import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Signin from './component/signin';
import Login from './component/login';
import Showtasks from './component/showtasks';
import { Route,Routes } from 'react-router-dom';
import Task from './component/task';
function App() {
  return (

    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Login></Login>}/>
          <Route path='/Signin' element={<Signin></Signin>}/>
          <Route path='/Login' element={<Login></Login>}/>
          <Route path='/Showtasks' element={<Showtasks></Showtasks>}/>
          <Route path='/Task' element={<Task></Task>}/>
        </Routes> 
      </Provider>

    </div >
  );
}
export default App;
