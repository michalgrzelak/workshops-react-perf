import React from "react";
import Message from "./Message";
import {connect} from "react-redux";

class MessageList extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="messageList">
        {messages.map(({ author, text, messageState }, index) => (
          <Message
            author={author}
            text={text}
            key={index}
            messageState={messageState}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(MessageList);
