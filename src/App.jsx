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
// import Roadmap from "./routes/Roadmap";
import JoinThisCourse from "./routes/JoinThisCourse";
import CourseDetails from "./components/CourseDetails";
import Internship from "./routes/Internship";
import About from "./components/About";
import Development from "./routes/Development";
import Staff from "./routes/Staff";
import Carrer from "./routes/Carrer";

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
        <Route
          path="/Development"
          element={
            <>
              <Development />
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
          path="/"
          element={
            <>
              <Internship />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/Staff"
          element={
            <>
              <Staff />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/Carrer"
          element={
            <>
              <Carrer />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/roadmap/:slug"
          element={
            <>
              {/* <Roadmap /> */}
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
