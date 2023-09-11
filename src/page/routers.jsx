import { Routes, Route } from 'react-router-dom';
import Entrance from '../components/entrance/entrance';
// import { ProtectedRoute } from '../components/protected-routs/protected-routs';
// import MessageGeter from './components/messagegeter';
// import MessageSender from '../components/messagesender';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/entrance" element={<Entrance />} />
      {/* <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MessageGeter />} />
        <Route path="/" element={<MessageSender />} />
      </Route> */}
    </Routes>
  );
}
