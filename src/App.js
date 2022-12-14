// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Programme from './Components/Programme';
import Courses from './Components/Courses';
import About from './Components/About';
import Enroll from './Components/Enroll';
import Footer from './Components/Footer';
import Intro from './Components/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro/>
      <Programme heading="How can Studyportals help you even more?"
      BI="https://studyportals.com/wp-content/uploads/2015/06/BP_Mobile.png"
      BSH="Bachelor's programmes"
      BC="Choose from more than 100,000 Bachelor’s programmes at universities, colleges and schools worldwide."
      BBtn="Search Bachelors"

      MI="https://studyportals.com/wp-content/uploads/2015/06/MP_Mobile.png"
      MSH="Master's Programme"
      MC='Find and compare more than 75,000 Master’s degrees from top universities worldwide.'
      MBtn="Search Masters"

      PI="https://studyportals.com/wp-content/uploads/2015/06/PhD_Mobile.png"
      PSH="PhD & Doctorate studies"
      PC="PhD, professional doctorates and other Doctoral degrees at graduate schools, universities and research institutes."
      PBtn="Search PhD"
      />

      <Courses image='pic/groupStudy.jpg' 
        heading='Learn more in less time'
        Peragraph='Find and compare international summer/winter schools, study abroad semesters, conferences, short courses and certificate programmes across the world on Short Courses Portal.'
        button="Search Short Courses"
        clone="object-cover object-center rounded"
        troll="bg-gray-100"
      />
      <Courses image='pic/gS3.jpg' 
      heading='Study from the comfort of your home'
      Peragraph='Distance Learning allows you to get a high quality university education from anywhere in the world! Improve your education without compromising your job, your family or your personal plans. Developed with leading universities, Distance Learning Portal helps you to find and compare distance and online degree programmes from different universities around the world.'
      button='Search Distance Learning Programme'
      troll=""
      // clone="object-cover object-center rounded"
      />
      <Programme
        heading="How can Studyportals help you even more?"
        BI="https://studyportals.com/wp-content/uploads/2015/06/Scholarship-01.png"
      BSH="Find scholarships"
      BC="Over 1,000 scholarships and grants to finance the study of your dreams."
      BBtn="Search Scholarships"

      MI="https://studyportals.com/wp-content/uploads/2015/06/stexx-01.png"
      MSH="Write a review"
      MC='Your opinion can have an impact on fellow students who want to study abroad.'
      MBtn="Review your University"

      PI="https://studyportals.com/wp-content/uploads/2015/06/Gift-01.png"
      PSH="Get Your enrolment gift"
      PC="Found Your programme via StudyPortals? Tell us where you started studying and get a gift!"
      PBtn="Get Your gift"
      />
      <About/>
      <Enroll/>
      <Footer/>
    </div>
  );
}

export default App;
