// components/Header.js
import Image from 'next/image';
import logo from '../public/assets/logo-b.svg';
const Header = () => {
  return (
    <div className="d-flex justify-between align-items-center p-4">
        <Image
        src={logo} // Path to your image in the public folder
        alt={logo}
        className='mx-auto'
      />
<div className='user_auth d-flex justify-start align-items-center gap-4'>
<div className='user_auth-1'>
  
<span className='text-user'>US</span>

</div>
<div class="dropdown d-flex flex-column">
<span className='text-user'>Uticat specilaity food</span>
  <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Mohamed Ben ali amara

  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Déconnect</a></li>
  </ul>
</div>

</div>

    </div>
  );
};

export default Header;
