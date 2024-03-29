import React from "react";
import style from "./Dialogs.module.css";
import Message from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import { Field, reduxForm } from "redux-form";
import { validators } from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControls/FormsControls";

const Dialogs = (props) => {
  console.log("Dialogs", props);
  // console.log('Dialogs')
  // console.log(props)
  // debugger
  //   let dialogsItems = [
  //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
  //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
  //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
  //     <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
  //     <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
  //     <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />,];
  // let dialogItems = dialogsData.map( (dialog) => { return <DialogItem name={dialog.name} id={dialog.id}/>} );
  let dialogItems = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} photo={dialog.photo} />
  ));
  let messageItems = props.dialogsPage.messagesData.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
  const addNewMessage = (formData) => {
    props.addMessage(formData.newMessageBody);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogItems}</div>
      <div className={style.messages}>
        {messageItems}
        <div>
          <DialogReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

const DialogForm = (props) => {
  console.log("DialogForm", props, "");
  // let newMessageText = props.dialogsPage.newMessageText;
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Write a new message..."
          className={style.textarea}
          name={"newMessageBody"}
          component={Textarea}
          validate={[
            validators.required,
            validators.maxLength15,
            validators.minLength2,
          ]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};
const DialogReduxForm = reduxForm({
  form: "dialog", // unique name for the form
})(DialogForm);

export default Dialogs;
