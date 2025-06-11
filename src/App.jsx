import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import CEO from "./components/CEO";
import CourseDetails from "./components/CourseDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Methodology from "./components/Methodology";
import Navbar from "./components/Navbar";
import BlockchainDevelopment from "./routes/BlockchainDevelopment";
import Blogs from "./routes/Blogs";
import Carrer from "./routes/Carrer";
import Categories from "./routes/Categories";
import Company from "./routes/Company";
import ContactUs from "./routes/ContactUs";
import DigitalMarketing from "./routes/DigitalMarketing";
import Internship from "./routes/Internship";
import JobOpportunities01 from "./routes/JobOpportunities01";
import JoinThisCourse from "./routes/JoinThisCourse";
import LeaderShip from "./routes/LeaderShip";
import MobileDevelopment from "./routes/MobileDevelopment";
import ServiceOffer from "./routes/ServiceOffer";
import Staff from "./routes/Staff";
import SubmitRequirement from "./routes/SubmitRequirement";
import SubmitResume from "./routes/SubmitResume";
import SubmitResumeBody from "./routes/SubmitResumeBody";
import Training from "./routes/Training";
import WebDevelopment from "./routes/WebDevelopment";

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
        {/* <Route
          path="/Development"
          element={
            <>
              <Development />
              <Footer />
            </>
          }
        /> */}
        <Route
          path="/BlockchainDevelopment"
          element={
            <>
              <BlockchainDevelopment />
              <Footer />
            </>
          }
        />
         <Route
          path="/WebDevelopment"
          element={
            <>
              <WebDevelopment />
              <Footer />
            </>
          }
        />
        <Route
          path="/MobileDevelopment"
          element={
            <>
              <MobileDevelopment />
              <Footer />
            </>
          }
        />
        <Route
          path="/DigitalMarketing"
          element={
            <>
              <DigitalMarketing />
              <Footer />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/CEO"
          element={
            <>
              <div className="mt-[80px]">
                <CEO />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/Internship"
          element={
            <>
              <Internship />
              <Footer />
            </>
          }
        />
        <Route
          path="/Staff"
          element={
            <>
              <Staff />
              <Footer />
            </>
          }
        />
        <Route
          path="/Carrer"
          element={
            <>
              <Carrer />
              <Footer />
            </>
          }
        />
        <Route
          path="/roadmap/:slug"
          element={
            <>
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
