import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Logo from './Logo'
const MobileMenu = () => {
  return (
    <div className='md:hidden'>
        <HiOutlineMenu size={24}/>
        <Logo />
    </div>
  )
}

export default MobileMenu