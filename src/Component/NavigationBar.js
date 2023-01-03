import Footerimg from '../FooterLogo.jpg'
import { FcSearch } from "react-icons/fc";
const NavigationBar = () =>{
    return (
        <div style={{display:'flex', justifyContent:"space-between"}}>
<div style={{display:'flex'}}>
    <img src='NavLogo.png' width="160px" style={{borderRadius:"50%"}} />
<nav className='nav'>
    <a>Home</a>
    <a>About</a>
    <a>Contact</a>
</nav>
</div>
<div>
<input type='text' placeholder='search'/> <button><FcSearch/></button>
</div>
        </div>
    )
}

export default NavigationBar;

export const FooterComponent = () =>{
    return(
        <footer>
            <img src={Footerimg} width="60px" style={{borderRadius:"50%"}} />
All rights reserver -DedSek-
        </footer>
    )
}

