import Logo from "../../assets/Logo.svg";
import Logout from "../../assets/logout.svg";
import Overview from "../../assets/overview.svg";
import Settings from "../../assets/setting-2.svg";
import Sms from "../../assets/sms.svg";
import graph from "../../assets/graph.svg";
import Wallet from "../../assets/wallet-2.svg";
import WalletMinus from "../../assets/wallet-minus.svg";       //(DONT TOUCH IM STILL WORKING ON THIS ¬Chiwo)

function Sidebar() {
return (
    <div className="sidebar bg-[#F3F3F3] max-w-64 h-screen flex flex-col p-6">
      <h1 className="flex items-center gap-3 mb-8 font-bold">
        <img src={Logo} alt="Logo" className="w-5 h-5" />
        CryptX
      </h1>

      <ul className="flex flex-col gap-8 text-[#9E9E9E]">
        <li className="flex items-center gap-5 text-[#6154F0]">
          <img src={Overview} alt="Over view" className="w-5 h-5" />
          <span>Overview</span>
        </li>
        <li className="flex items-center gap-5 ">
          <img src={graph} alt="Graph" className="w-5 h-5" />
          <span>Chart</span>
        </li>
        <li className="flex items-center gap-5 ">
          <img src={Wallet} alt="Wallet" className="w-5 h-5" />
          Transactions
        </li>
        <li className="flex items-center gap-5 ">
          <img src={WalletMinus} alt="Wallet" className="w-5 h-5" />
          Wallet
        </li>
        <li className="flex items-center gap-5 ">
          <img src={Sms} alt="Mail box" className="w-5 h-5" />
          Mail Box
        </li>
        <li className="flex items-center gap-5 ">
          <img src={Settings} alt="Settings" className="w-5 h-5" />
          Setting
        </li>
        <li className="flex items-center gap-5 ">
          <img src={Logout} alt="Log out" className="w-5 h-5" />
          Logout
        </li>
      </ul>
    </div>
 );
}

export default Sidebar;
