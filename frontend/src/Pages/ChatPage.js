import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/layout";
import SideDrawer from "../components/miscellaneous/SideDrawer";

const ChatPage = () => {
    const { user } = ChatState();
    return (
        <div style={{ width: "100%" }}>
            {user && <SideDrawer />}

            <Box>
                {/* {user && <MyChats />} */}
                {/* {user && <ChatBox />} */}
            </Box>
        </div>
    );
}

export default ChatPage;
