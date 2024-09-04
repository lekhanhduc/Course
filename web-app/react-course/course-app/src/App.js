import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';
import { LoginPage } from './components/UserComponents/LoginPage';
import { HomePage } from './components/pages/HomePage';
import { About } from './components/UserComponents/About';
import { Courses } from './components/UserComponents/Courses';
import { CourseDetail } from './components/UserComponents/CourseDetail';
import { Contact } from './components/UserComponents/Contact';
import { Profile } from './components/UserComponents/Profile';
import { PrivateRoute } from './components/router/PrivateRoute';
import { ChangePassword } from './components/UserComponents/ChangePassword';
import { ProcessLoginOAuth2 } from './components/authentication/OAuth2';
import { CreatePassword } from './components/UserComponents/CreatePassword';
import { UploadCourse } from './components/TeacherComponents/UploadCourse';
import { MyCourses } from './components/TeacherComponents/ManagerCourse';
import { LayoutWithoutHeaderFooter } from './components/UserComponents/LayoutWithoutHeaderFooter';
import { ForgotPassword } from './components/authentication/ForgotPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          } />

          <Route path="/teacher-add-courses" element={
            <LayoutWithoutHeaderFooter>
              <UploadCourse />
            </LayoutWithoutHeaderFooter>
          } />


          <Route path="/manager-courses" element={
            <LayoutWithoutHeaderFooter>
              <MyCourses />
            </LayoutWithoutHeaderFooter>
          } />

          <Route path="/home" element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          } />

          <Route path="/login" element={
            <LayoutWithoutHeaderFooter>
              <LoginPage />
            </LayoutWithoutHeaderFooter>
          } />

          <Route path="/logout" element={
            <LayoutWithoutHeaderFooter>
              <LoginPage />
            </LayoutWithoutHeaderFooter>
          } />

          <Route path="/forgot-password" element={
            <LayoutWithoutHeaderFooter>
              <ForgotPassword />
            </LayoutWithoutHeaderFooter>
          } />

          <Route path="/authenticate" element={
            <LayoutWithoutHeaderFooter>
              <ProcessLoginOAuth2 />
            </LayoutWithoutHeaderFooter>
          } />

          <Route path="/forgot-password" element={
            <LayoutWithoutHeaderFooter>
              <ForgotPassword />
            </LayoutWithoutHeaderFooter>
          } />


          <Route path="/change-password" element={
            <PrivateRoute>
              <LayoutWithoutHeaderFooter>
                <ChangePassword />
              </LayoutWithoutHeaderFooter>
            </PrivateRoute>
          } />

          <Route path="/create-password" element={
            <PrivateRoute>
              <LayoutWithoutHeaderFooter>
                <CreatePassword />
              </LayoutWithoutHeaderFooter>
            </PrivateRoute>
          } />

          <Route path='/about' element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          } />

          <Route path='/courses' element={
            <>
              <Header />
              <Courses />
              <Footer />
            </>
          } />

          <Route path='/course-detail' element={
            <>
              <Header />
              <CourseDetail />
              <Footer />
            </>
          } />

          <Route path='/contact' element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          } />

          <Route path='/profile' element={
            <>
              <PrivateRoute>
                <LayoutWithoutHeaderFooter>
                  <Profile />
                </LayoutWithoutHeaderFooter>
              </PrivateRoute>
            </>
          } />

        </Routes>
      </div>

    </Router>
  );
}

export default App;
