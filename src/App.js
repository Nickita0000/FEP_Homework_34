import {Routes, Route} from "react-router-dom";
import NotFound from "./NotFound";
import ContactListRoutes from "./ContactListRoutes";

function App() {
    return (
      <div>
          <Routes>
              <Route path='*' element={<ContactListRoutes />} />
              <Route path='/*' element={<NotFound />}/>
          </Routes>
      </div>
    );
}

export default App;
