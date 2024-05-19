import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/Navbar/NavBar";
import Company from "./component/Company/Company";
import Dashboard from "./component/dashborad/Dashborad";
import Notifications from "./component/Notification/Notifications";
import Statistics from "./component/statistics/Statistics";
import Setting from "./component/Setting/Setting";
import Profile from "./component/Profile/Profile";
import Logout from "./component/Logout/Logout";
import LoanApplied from "./component/dashborad/LoanApplied/LoanApplied";
import LoanAppliedList from "./component/dashborad/LoanApplied/LoanAppliedList/loanAppliedList";
import LoanApproveform from "./component/dashborad/LoanApplied/LoanAppliedList/LoanApprove/LoanApproveform";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/company" element={<Company />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/loan-applied" element={<LoanApplied />} />
          <Route path="/loanAppliedList" element={<LoanAppliedList />} />
          <Route path="/loan-approve/:index" element={<LoanApproveform />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
