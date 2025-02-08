import React, { useContext, useState } from "react";
import {
  FaPaperPlane,
  FaSmile,
  FaMicrophone,
  FaEllipsisV,
  FaSearch,
  FaFileImage,
  FaArrowLeft,
} from "react-icons/fa";
import { Context } from "../../ui/context/Context";

export function MobileChat() {
  const { personClick, names, setPersonClick } = useContext(Context);
  const [messages, setMessages] = useState([{ text: "Hello", sender: "user" }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [openBox, setOpenBox] = useState(false);
  const randomResponses = [
    "What did you say? I can't understand you.",
    "Hmmm.",
    "idk.",
    "Don't talk to me, nerd.",
    "I'm too sleepy to read your message.",
    "Trust me, idc what you say.",
    "Creepy ass guy tryna hit on me.",
    "Wow, what nerve.",
    "Can you just stfu?",
    "Do you hear the pixels talking?",
    "Bro, I lost brain cells reading that.",
    "Your opinion? Straight to the trash.",
    "You typing but ain't nobody reading.",
    "My interest in this conversation is hitting negative levels.",
    "Even Google doesn't wanna answer that.",
    "Try again, but this time with brain cells.",
    "L take.",
    "Respectfully, shut up.",
    "You just unlocked a new level of nonsense.",
    "Damn, even my WiFi is tryna disconnect from this convo.",
    "That’s crazy bro, but who asked?",
    "You got jokes, but no one’s laughing.",
    "Man, I’d rather talk to my wall.",
    "Your keyboard deserves better.",
    "Your message gave me a headache.",
    "I wish I could unread that.",
    "Bro's talking but I’m already asleep.",
  ];

  const sendMessage = () => {
    if (input === "") return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setInput("");
    setMessages(newMessages);
    setIsTyping(true);

    setTimeout(() => {
      const randomReply =
        randomResponses[Math.floor(Math.random() * randomResponses.length)];
      setMessages([...newMessages, { text: "Typing...", sender: "bot" }]);

      setTimeout(() => {
        setMessages([...newMessages, { text: randomReply, sender: "bot" }]);
        setIsTyping(false);
      }, 2500);
    }, 1000);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col bg-[#080c0f] rounded-lg">
        <div className="pb-3 bg-black  text-white flex items-center gap-4 pl-2">
          <button className="h-13 w-6" onClick={() => setPersonClick(false)}>
            <FaArrowLeft className="text-white text-xl" />
          </button>
          <img
            src={names.image}
            alt={names.name}
            className="w-13 h-13 rounded-full"
          />
          <span className="text-lg font-semibold flex flex-col">
            {" "}
            <span> {names.name}</span>
            <span className="text-sm text-white/40">{`${names.name}`}</span>
          </span>
          <span className="ml-auto flex gap-3 items-center">
            <span className="p-2">
              <FaSearch className="    text-white/60  text-xl" />
            </span>
            <span
              className={`relative transition-all flex items-center justify-center p-2 ${
                openBox ? "bg-[#293238] rounded-full   absolute" : ""
              }`}
            >
              <svg
                onClick={() => setOpenBox(true)}
                onBlur={() => setOpenBox(false)}
                tabIndex={0}
                viewBox="0 0 24 24"
                height="27"
                width="27"
                preserveAspectRatio="xMidYMid meet"
                className="text-white/70"
                version="1.1"
                x="0px"
                y="0px"
              >
                <title>menu</title>
                <path
                  fill="currentColor"
                  d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                ></path>
              </svg>

              {openBox && (
                <div className="bg-[#233138] z-100 grid grid-rows-10  py-3 h-110 w-60 rounded-md absolute top-12 right-0">
                  <div className=" flex items-center text-white/70 px-4  hover:bg-[#1b252f]">
                    Contact info
                  </div>
                  <div className=" flex items-center text-white/70 px-4 hover:bg-[#1b252f]">
                    Select message
                  </div>
                  <div className=" flex items-center text-white/70 px-4 hover:bg-[#1b252f]">
                    Mute notification
                  </div>
                  <div className=" flex items-center text-white/70 px-4 hover:bg-[#1b252f]">
                    Disappearing messages
                  </div>
                  <div className=" flex items-center text-white/70 px-4 hover:bg-[#1b252f]">
                    Add to favourites
                  </div>
                  <div className=" flex items-center text-white/70 px-4 hover:bg-[#1b252f]">
                    Close chat
                  </div>
                  <div className=" flex items-center text-white/70 px-4 hover:bg-[#1b252f]">
                    Report
                  </div>
                  <div className=" flex items-center text-white/70 px-4 hover:bg-[#1b252f]">
                    Block
                  </div>
                  <div className=" flex items-center text-white/70 px-4 hover:bg-[#1b252f]">
                    Clear chat
                  </div>
                  <div className=" flex items-center text-white/70 px-4 hover:bg-[#1b252f]">
                    Delete chat
                  </div>
                </div>
              )}
            </span>
          </span>
        </div>
        <div className="flex-1 p-4  overflow-y-auto bg-[#080c0f] text-white">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 py-2  rounded-lg shadow w-max max-w-xs ${
                msg.sender === "user" ? "bg-[#005c4b] ml-auto" : "bg-[#121a1f]"
              }`}
            >
              {msg.text}
              <sub className="text-white/30 ml-3  ">10.24 am</sub>
            </div>
          ))}
        </div>

        <div className="pt-3 bg-black flex items-center gap-2 border-t border-gray-700">
          <button className="p-2 text-gray-400">
            <FaSmile className="size-6" />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-3 bg-[#2a3942] text-white border-none rounded-lg focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="p-2 text-gray-400">
            <FaMicrophone className="size-6" />
          </button>
          <button
            className="p-2 bg-[#005c4b] text-white rounded-lg"
            onClick={sendMessage}
          >
            <FaPaperPlane className="size-6" />
          </button>
        </div>
      </div>
    </>
  );
}
