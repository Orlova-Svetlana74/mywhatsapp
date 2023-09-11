import MessageSender from '../../components/messagesender';
import MessageGeter from '../../components/messagegeter';

function Message() {
  return (
    <div>
      <h1>Отправка и получение сообщений через сервис WhatsApp</h1>
      <MessageSender />
      <MessageGeter />
    </div>
  );
}
export default Message;
