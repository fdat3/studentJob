import { handleCreateMessage, handleGetAllMessage } from '@/service/message.service';
import { FormEvent, useEffect, useState } from 'react';
import { IUser } from '@/interface/entities/user.interface';
import parseJson from 'parse-json';

export default function MessageBox({ props, setSendMessage, receivedMessage, selectedUser }: any) {
  const [messages, setMessages] = useState<any>([]);
  const [recieveUser, setRecieveUser] = useState<any>([]);
  const [messageContent, setMessageContent] = useState('');
  const user: IUser = parseJson(window?.localStorage?.getItem('userInfo'));

  const fetchMessage = async () => {
    try {
      const { data } = await handleGetAllMessage(props);
      setMessages(data);
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  useEffect(() => {
    fetchMessage()
  }, [selectedUser, messages])




  const onMessChange = (event: FormEvent<HTMLInputElement>) => {
    setMessageContent(event.currentTarget.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      sender_id: user?.id,
      room_id: props,
      message: messageContent
    };
    try {
      await handleCreateMessage(data);
      const receiverId = recieveUser?.user_id;
      setSendMessage({ ...data, receiverId })
      setMessages((prevMessages: any) => [...prevMessages, data]);
      setMessageContent('');
    } catch (error) {
      console.error("Error creating message:", error);
    }
  };



  useEffect(() => {
    console.log("Message Arrived: ", receivedMessage)
    if (receivedMessage !== null && receivedMessage.room_id === props) {
      setMessages([...messages, receivedMessage]);
    }

  }, [receivedMessage])

  return (
    <>
      <div className="message_container mt30-md">
        <div className="user_heading px-0 mx30">
          <div className="wrap">
            {/* <Image
              height={50}
              width={50}
              className="img-fluid mr10"
              src={currentUser.img ? currentUser.img : '/images/team/fl-2.png'}
              alt="ms3.png"
            /> */}
            <div className="meta d-sm-flex justify-content-sm-between align-items-center">
              <div className="authors">
                {/* <h6 className="name mb-0">{currentUser?.full_name}</h6> */}
                <p className="preview">Active</p>
              </div>
              <div>
                <a className="text-decoration-underline fz14 fw500 text-red ff-heading">
                  Delete Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="inbox_chatting_box">
          <ul className="chatting_content">
            {messages?.map((data: any) => {
              if (data?.sender_id === user.id)
                return (
                  <li className="reply float-end">
                    <p>
                      {data?.message}
                    </p>
                  </li>
                )
              else {
                return (
                  <li className="sent float-start">
                    <p>
                      {data?.message}
                    </p>
                  </li>
                )
              }
            })}
          </ul>
        </div>
        <div className="mi_text">
          <div className="message_input">
            <form className="d-flex align-items-center" onSubmit={handleSubmit}>
              <input
                type="text"
                name="message"
                className="form-control"
                placeholder="Type a Message"
                value={messageContent}
                onChange={onMessChange}
                required
              />
              <button className="btn ud-btn btn-thm">
                Send Message
                <i className="fal fa-arrow-right-long" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
