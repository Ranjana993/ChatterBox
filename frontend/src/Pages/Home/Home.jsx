// import MessageContainer from "../../components/messages/MessageContainer";
// import Sidebar from "../../components/sidebar/Sidebar";

import MessageContainer from "./messages/MessageContainer";
import Sidebar from "./sidebar/Sidebar";

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg w-[70%] overflow-hidden bg-gray-950 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
