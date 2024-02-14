
import {useLocation} from 'react-router-dom'
import { useEffect , useState } from 'react'
import DashSideBar from '../components/DashSideBar';
import DashProfile from '../components/DashProfile';
export default function Dashboard() {
  const location = useLocation();
  const [tab,setTab] = useState('');
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    console.log(tabFromUrl)
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
  },[location])

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/*Side bar*/}
        <DashSideBar />
      </div>
      {/*profile*/}
      {tab== 'profile' && <DashProfile/>}
    </div>
  )
}
