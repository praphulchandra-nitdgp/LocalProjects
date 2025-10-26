type MessageProps = {
  message: {
    role: string;
    content: string;
  };
};

const Bubble = ({ message }: MessageProps) => {
  return (
    <div className="bubble">
      <strong>{message.role === "user" ? "You" : "Buddy"}:</strong>{" "}
      {message.content}
    </div>
  );
};

export default Bubble;
