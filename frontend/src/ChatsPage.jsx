import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'


const chatsPage = () => {
    const chatProps= useMultiChatLogic(
        '035fad6e-882f-4080-a735-3b2100c47dc6',
        props.user.username,
        props.user.secret);
    return (
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
        </div>
    )
}


export default ChatsPage