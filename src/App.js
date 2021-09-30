import './index.css';
import Header from './components/Header'
import Topbar from './components/Topbar'
import Content from './components/Content'
import {useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setCard } from './Redux/actions/cardSet';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    async function axiosData() {
      try { 
        const {data} = await axios.get('https://61509f91d0a7c1001701683b.mockapi.io/cards')

        dispatch(setCard(data))
      } catch(error) {
        alert('Ошибка при выводе карточки!')
        console.error(error)
      }
    }

    return axiosData();
  },[])

  return (
    <div>
      <Topbar></Topbar>
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App;
