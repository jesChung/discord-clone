import { HashtagIcon } from "@heroicons/react/outline"
import { useDispatch } from 'react-redux'
import { displayChannelName } from "../features/channelSlice"
import { useNavigate } from 'react-router-dom'

const Channel = ({ id, channelName }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const setChannel = () => {
        dispatch(
            displayChannelName({
                channelId: id,
                channelName: channelName,
            })
        )
        
        navigate(`/channel/${id}`)
    }

    return (
        <div className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white"
            onClick={setChannel}
        >
            <HashtagIcon className="h-5 mr-2" /> { channelName }
        </div>
    );
}
 
export default Channel;