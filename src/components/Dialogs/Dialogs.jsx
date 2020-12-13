import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage

    const dialogsElements =  state.dialogs.map((d, idx ) => <DialogItem key={idx} name={d.name} id={d.id} />  );
    const messagesElements = state.messages.map((m, idx ) => <Message key={idx} message={m.message}/> );
    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e) => {
      let body = e.target.value
      props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div>
                  <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter your message'></textarea>
                  </div>
                  <div>
                    <button onClick={ onSendMessageClick }>add message</button>
                  </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;