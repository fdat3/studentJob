import { useEffect, useRef, useState } from 'react';
import UserChatList1 from '../card/UserChatList1';
import MessageBox from '../element/MessageBox';
import DashboardNavigation from '../header/DashboardNavigation';
import { handleGetOwnerUser } from '@/service/user.service';
import { handleCreateMessage, handleGetAllMessage } from '@/service/message.service';
import { handleGetAllUserInChat } from '@/service/chat_member.service';
import { IUser } from '@/interface/entities/user.interface';
import parseJson from 'parse-json';
var io = require('socket.io-client')

export default function MessageInfo() {
  const [users, setUsers] = useState<any>([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState([]);
  const socket: any = useRef();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  const user: IUser = parseJson(window?.localStorage?.getItem('userInfo'));

  const handleRoomChat = (room: any) => {
    console.log("🚀 ~ handleRoomChat ~ room:", room)
    setSelectedRoom(room["room.id"]);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await handleGetAllUserInChat(user?.id);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();

    socket.current = io("ws://localhost:8800", { transports: ["websocket"] });
    socket.current.emit("new-user-add", user?.id);
    socket.current.on("get-users", (users: any) => {
      setOnlineUsers(users);
    });
    socket.current.on("connect_error", (err: any) => {
      console.log(`connect_error due to ${err.message}`);
    });
  }, []);

  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    socket.current.on("recieve-message", (data: any) => {
      console.log(data)
      setReceivedMessage(data);
    }
    );
  }, []);

  console.log("🚀 ~ MessageInfo ~ sendMessage:", sendMessage)
  console.log("🚀 ~ MessageInfo ~ receivedMessage:", receivedMessage)


  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-12">
            <div className="dashboard_title_area">
              <h2>Dashboard</h2>
              <p className="text">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
        <div className="row mb40">
          <div className="col-lg-6 col-xl-5 col-xxl-4">
            <div className="message_container">
              <div className="inbox_user_list">
                <div className="iu_heading pr35">
                  <div className="chat_user_search">
                    <form className="d-flex align-items-center">
                      <button className="btn" type="button">
                        <span className="far fa-magnifying-glass" />
                      </button>
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                </div>
                <div className="chat-member-list pr20">
                  {
                    users.map((user: any, index: any) => {
                      return (
                        < div key={index} className="list-item pt5" >
                          <button
                            style={{ border: "none", backgroundColor: "transparent" }}
                            onClick={() =>
                              handleRoomChat(user)}
                          >
                            <UserChatList1 data={user} />
                          </button>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-7 col-xxl-8">
            {selectedRoom &&
              <MessageBox
                props={selectedRoom}
                setSendMessage={setSendMessage}
                receivedMessage={receivedMessage}
                selectedUser={users?.id}
              />}
          </div>
        </div>
      </div >
    </>
  );
}
