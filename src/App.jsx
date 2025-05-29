import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Company from "./routes/Company";
import LeaderShip from "./routes/LeaderShip";
import SubmitRequirement from "./routes/SubmitRequirement";
import SubmitResume from "./routes/SubmitResume";
import Categories from "./routes/Categories";
import ServiceOffer from "./routes/ServiceOffer";
import JobOpportunities01 from "./routes/JobOpportunities01";
import Blogs from "./routes/Blogs";
import ContactUs from "./routes/ContactUs";
import SubmitResumeBody from "./routes/SubmitResumeBody";
import Methodology from "./components/Methodology";
import CEO from "./components/CEO";
import Training from "./routes/Training";
import JoinThisCourse from "./routes/JoinThisCourse";
import CourseDetails from "./components/CourseDetails";

const App = () => {
  return (
    <div className="w-full overflow-hidden scroll-smooth">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <CEO />
              <Methodology />
              <Footer />
            </>
          }
        />
        <Route path="/CompanyOverview" element={<Company />} />
        <Route path="/LeadershipTeam" element={<LeaderShip />} />
        <Route path="/SubmitRequirement" element={<SubmitRequirement />} />
        <Route path="/ServiceOffer" element={<ServiceOffer />} />
        <Route
          path="/SubmitResume"
          element={
            <>
              <SubmitResume />
              <SubmitResumeBody />
              <Footer />
            </>
          }
        />
        <Route path="/Opportunities" element={<JobOpportunities01 />} />
        <Route path="/Posts" element={<Blogs />} />
        <Route
          path="/Training"
          element={
            <>
              <Training />
              <Footer />
            </>
          }
        />
        <Route
           path="/course/:slug"
          element={
            <>
              <CourseDetails />
              <JoinThisCourse />
              <Footer />
            </>
          }
        />
        
        <Route
          path="/ContactUs"
          element={
            <>
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
};

export default App;
