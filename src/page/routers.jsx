import { Routes, Route } from 'react-router-dom';
import Entrance from '../components/entrance/entrance';
// import { ProtectedRoute } from '../components/protected-routs/protected-routs';
// import MessageGeter from './components/messagegeter';
// import MessageSender from '../components/messagesender';
import Message from './message/message';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Entrance />} />
      <Route path="/entrance" element={<Message />} />
      {/* <Route element={<ProtectedRoute />}> */}
        {/* <Route path="/components" element={<MessageGeter />} />
        <Route path="/components" element={<MessageSender />} /> */}
        {/* <Route path='/' element = {<Message />} /> */}
      {/* </Route> */}
    </Routes>
  );
}
