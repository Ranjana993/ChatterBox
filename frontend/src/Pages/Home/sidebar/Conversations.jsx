// import useGetConversations from "../../hook/useGetConversations";
import useGetConversations from "../../../hook/useGetConversations"
import { getRandomEmoji } from "../../../utils/getRandomEmojis";
import Conversation from "./Conversation"


// import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	console.log(conversations);
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{/* {conversations?.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))} */}

			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};
export default Conversations;

// STARTER CODE SNIPPET
// import Conversation from "./Conversation";

// const Conversations = () => {
// 	return (
// 		<div className='py-2 flex flex-col overflow-auto'>
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 		</div>
// 	);
// };
// export default Conversations;
