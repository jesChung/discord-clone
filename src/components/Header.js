import { ReactComponent as Logo } from "../img/discord.svg"
import { MenuIcon } from "@heroicons/react/outline"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, provider } from "../firebase"
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";


const Header = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const signIn = (e) => {
    e.preventDefault()

    signInWithPopup(auth, provider)
      .then(() => navigate("/channel"))
      .catch((error) => alert(error.message))
  }

  return (
    <header className="flex items-center justify-between py-4 px-6 bg-discord_blue ">
      <a href='/'>
        <Logo className="w-32 h-[34px]" />
      </a>
      <div className="hidden lg:flex space-x-6 text-white">
        <a className="link">Download</a>
        <a className="link">Nitro</a>
        <a className="link">Safety</a>
        <a className="link">Support</a>
        <a className="link">Blog</a>
        <a className="link">Careers</a>
      </div>
      <div className="flex space-x-4">
        <button 
          className="bg-white px-4 py-[7px] rounded-[40px] text-sm focus:outline-none hover:shadow-2xl hover:text-discord_purple transition duration-200 ease-in-out"
          onClick={ !user ? signIn : () => navigate("/channel") }
        > 
          {!user ? "Login" : "Open Discord"}
        </button>
        <MenuIcon className="h-10 text-white cursor-pointer lg:hidden" />
      </div>
    </header>
  );
}

export default Header;