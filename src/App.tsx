import Main from './components/Main/Main'
import './App.css'
import HomePage from './pages/HomePage/HomePage.js'
import TeacherInitialPage from './pages/teacher/TeacherInitialPage/TeacherInitialPage.js'
import TeacherQuestionsCreator from './pages/teacher/TeacherQuestionsCreator/TeacherQuestionsCreator.js'
import TeacherQuestionsCreated from './pages/teacher/TeacherQuestionsCreated/TeacherQuestionsCreated.js'
import StudentInitialPage from './pages/student/StudentInitialPage/StudentInitialPage.js'
import StudentQuestions from './pages/student/StudentQuestions/StudentQuestions.js'
import CodeFormCreated from './components/teacher/CodeFormCreated/CodeFormCreated.js'
import StudentResultAnswers from './pages/student/StudentResultAnswers/StudentResultAnswers.js'
import StudentAnswers from './pages/student/StudentAnswers/StudentAnswers.js'

function App() {
  return (
    <>
      <Main>
        <HomePage />
        <TeacherInitialPage />
        <TeacherQuestionsCreator />
        <TeacherQuestionsCreated />
        <CodeFormCreated />
        <StudentInitialPage />
        <StudentQuestions />
        <StudentResultAnswers />
        <StudentAnswers />
      </Main>
    </>
  )
}

export default App
