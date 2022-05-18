import { useAuthState } from "react-firebase-hooks/auth"
import { auth,db } from "../firebase"
import { useNavigate } from "react-router-dom"
import channelIcon from "../img/channelIcon.png"
import { PlusIcon, DownloadIcon, ChevronDownIcon} from "@heroicons/react/outline"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faMicrophoneSlash, faHeadphones, faGear } from '@fortawesome/free-solid-svg-icons'
import Channel from "./Channel"
import { useCollection } from 'react-firebase-hooks/firestore'
import Chat from "./Chat";



const Home = () => {
    const [user] = useAuthState(auth)
    console.log("xxxx",user)
    const navigate = useNavigate()
    
    const [channels] = useCollection(db.collection("channels"))

    const addChannel = () => {
        const channelName = prompt("Enter channel name")
    
        if (channelName) {
            db.collection("channels").add({
                channelName: channelName,
            });
            console.log(db)
        }
    }

    return (
        <>
            {!user && navigate("/")}
            <div className="flex h-screen">
                <div className="flex flex-col space-y-2 bg-[#202225] p-2 pt-3">
                    <div className="channel-default hover:bg-discord_purple">
                        <img src="https://rb.gy/kuaslg" className=" h-5" />
                    </div>
                    <hr  className="w-8 h-0.5 rounded-[1px] border-[rgba(79,84,92,0.48)] mx-auto"/>
                    <div>
                        <img src={channelIcon} className="h-12 cursor-pointer rounded-full transition-all duration-100 ease-out hover:rounded-2xl" />
                    </div>
                    <div className="channel-default hover:bg-discord_green group">
                        <PlusIcon className="text-discord_green h-6 group-hover:text-white"/>
                    </div>
                    <div className="channel-default hover:bg-discord_green group">
                        <FontAwesomeIcon icon={faCompass} className="text-discord_green h-6 group-hover:text-white" />
                    </div>
                    <hr  className="w-8 h-0.5 rounded-[1px] border-[rgba(79,84,92,0.48)] mx-auto"/>
                    <div className="channel-default hover:bg-discord_green group">
                        <DownloadIcon className="text-discord_green h-6 group-hover:text-white"/>
                    </div>
                </div>

                <div className="bg-[#2f3136] flex flex-col min-w-max text-white">
                    <p className="flex  font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373C] cursor-pointer">
                        Jessie's Server...
                        <ChevronDownIcon className="h-5 ml-2" />
                    </p>
                    <div className="text-[#8e9297] flex-grow overflow-y-scroll scrollbar-hide">
                        <div className="flex items-center p-4">
                            <ChevronDownIcon className="h-3 mr-2" />
                            <p className="text-base font-semibold">Channels</p>
                            <PlusIcon className="h-5 ml-auto cursor-pointer hover:text-white"
                                onClick={addChannel}
                            />
                        </div>
                        <div className="flex flex-col space-y-2 px-2 mb-4">
                           {channels?.docs.map((doc) => (
                               <Channel 
                                    key={doc.id}
                                    id={doc.id}
                                    channelName={doc.data().channelName}
                               />
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#292b2f] p-2 flex justify-between items-center space-x-8">
                        <div className="flex items-center space-x-1">
                            <img
                                src={user?.photoURL}
                                alt=""
                                className="h-10 rounded-full"
                                onClick={() => auth.signOut()}
                            />
                            <h4 className="text-white text-xs font-medium">
                                {user?.displayName}{" "}
                                <span className="text-[#b9bbbe] block">
                                #{user?.uid.substring(0, 4)}
                                </span>
                            </h4>
                            </div>

                            <div className="text-gray-400 flex items-center">
                            <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                                <FontAwesomeIcon icon={faMicrophoneSlash} className="icon" />
                            </div>
                            <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                                <FontAwesomeIcon icon={faHeadphones} className="icon" />
                            </div>
                            <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                                <FontAwesomeIcon icon={faGear} className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#36393f] flex-grow">
                    <Chat />
                </div>
            </div>
        </>
    );
}

export default Home;