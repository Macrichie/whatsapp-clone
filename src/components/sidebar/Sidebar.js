import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import NewChatIcon from "@material-ui/icons/RateReview";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "../sidebar-chat/SidebarChat";
import db from "../../firebase-conf/firebase";
import { ConsumeContext } from "../../context-api/StateProvider";


function Sidebar() {
  const [rooms, setRooms] = useState([])
  const [{ user }, dispatch] = ConsumeContext()

  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    ))
    // cleanup
    return () => unsubscribe() 
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        {/* avatar */}
        <Avatar
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <div className="sidebar__headerRight">
          {/* status */}
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          {/* new-chat */}
          <IconButton>
            <NewChatIcon />
          </IconButton>
          {/* menu */}
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {
          rooms.map(room => (
          <SidebarChat 
            key={room.id} 
            id={room.id} 
            name={room.data.name}
          />))
        }
      </div>
    </div>
  );
}

export default Sidebar;
