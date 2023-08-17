// images
import messagesIcon from "../../images/Harwen-Pleasant-E-mail.128.png";
import accountIcon from "../../images/icons8-test-account-96.png";
import filesIcon from "../../images/Rokey-Eicodesign-Folder-with-file.128.png";

import DraftsControls from './controls/DraftsControls'
import MessagesControls from './controls/MessagesControls'
import AccountControls from './controls/AccountControls'
const boxes = [
    {
      id: 1,
      title: "Files",
      img: filesIcon,
      alt: "files icon",
        controls: <DraftsControls/>
    },
    {
      id: 2,
      title: "Messages",
      img: messagesIcon,
      alt: "messages icon",
      controls: <MessagesControls/>
    },

    {
      id: 3,
      title: "Account",
      img: accountIcon,
      alt: "account icon",
controls: <AccountControls/>
    },
  ];


  export default boxes;