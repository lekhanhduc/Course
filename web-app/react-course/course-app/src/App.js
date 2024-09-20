import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import { Register } from './components/UserComponents/Register';
import { Authorization } from './components/authorization/Authorization';
import { Accessdenied } from './components/error/Accessdenied';
import { RegisterTeacher } from './components/UserComponents/RegisterTeacher';
import { Dashboard } from './components/admin/components/Dashboard';
import { RegistrationList } from './components/admin/components/RegistrationList';
import { pdfjs } from 'react-pdf';
import FavoriteCourses from './components/UserComponents/Favorite';
import DepositPage from './components/UserComponents/DepositPage';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/> } />
          <Route path="/home" element={ <HomePage/> }/>

          <Route path="/login" element={
            <LayoutWithoutHeaderFooter>
              <LoginPage />
            </LayoutWithoutHeaderFooter>
          } />

          <Route path="/authenticate" element={
            <LayoutWithoutHeaderFooter>
              <ProcessLoginOAuth2 />
            </LayoutWithoutHeaderFooter>
          } />

          <Route path="/register" element={
            <LayoutWithoutHeaderFooter>
              <Register />
            </LayoutWithoutHeaderFooter>
          } />

          <Route path="/logout" element={
            <LayoutWithoutHeaderFooter>
              <LoginPage />
            </LayoutWithoutHeaderFooter>
          } />

          <Route path="/create-password" element={
            <PrivateRoute>
              <LayoutWithoutHeaderFooter>
                <CreatePassword />
              </LayoutWithoutHeaderFooter>
            </PrivateRoute>
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

          <Route path='/profile' element={
              <PrivateRoute>
                <LayoutWithoutHeaderFooter>
                  <Profile />
                </LayoutWithoutHeaderFooter>
              </PrivateRoute>
          } />

          <Route path='/favorite' element={<FavoriteCourses />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/course-detail/:id' element={<CourseDetail />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/deposit' element={<DepositPage />} />

          <Route path="/teacher-add-courses" element={
            <Authorization requiredRole={["TEACHER"]}>
              <LayoutWithoutHeaderFooter>
                <UploadCourse />
              </LayoutWithoutHeaderFooter>
            </Authorization>
          } />

          <Route path="/manager-courses" element={
            <Authorization requiredRole={["TEACHER"]}>
              <LayoutWithoutHeaderFooter>
                <MyCourses />
              </LayoutWithoutHeaderFooter>
            </Authorization>
          } />

          <Route path="/register-teacher" element={
            <Authorization requiredRole={["USER"]}>
              <LayoutWithoutHeaderFooter>
                <RegisterTeacher />
              </LayoutWithoutHeaderFooter>
            </Authorization>
          } />

          <Route path="/admin" element={
            <Authorization requiredRole={["ADMIN"]}>
              <LayoutWithoutHeaderFooter>
                <Dashboard />
              </LayoutWithoutHeaderFooter>
            </Authorization>
          } />

          <Route path="/admin/list-registes-teacher" element={
            <Authorization requiredRole={["ADMIN"]}>
              <LayoutWithoutHeaderFooter>
                <RegistrationList />
              </LayoutWithoutHeaderFooter>
            </Authorization>
          } />

          <Route path='/accessdenied' element={
            <>
              <LayoutWithoutHeaderFooter>
                <Accessdenied />
              </LayoutWithoutHeaderFooter>
            </>
          } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
