import {useState , useEffect} from 'react';
import OffcanvasExample from './Navbar';

function Header(){
    //getting current user function 
    function GetCurrentUser(){
        const [user , setUser] = useState(null);
        const userNameData = JSON.parse(localStorage.getItem('User Name'));
        useEffect(()=>{
            if(userNameData){
                setUser(userNameData)
            }
            else{
                setUser(null);
            }
        }, [])
        return user
      }
      const user =  GetCurrentUser();

      return(
        <>
            <OffcanvasExample user={user}/>
        </>
      ) 
}
export default Header
