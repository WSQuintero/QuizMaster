import Main from './components/Main/Main'
import './App.css'
import HomePage from './pages/HomePage/HomePage.js'
import TeacherInitialPage from './pages/TeacherInitialPage/TeacherInitialPage.js'
import TeacherQuestionsCreator from './pages/TeacherQuestionsCreator/TeacherQuestionsCreator.js'
import TeacherQuestionsCreated from './pages/TeacherQuestionsCreated/TeacherQuestionsCreated.js'
import StudentInitialPage from './pages/StudentInitialPage/StudentInitialPage.js'
import StudentQuestions from './pages/StudentQuestions/StudentQuestions.js'
import CodeFormCreated from './components/CodeFormCreated/CodeFormCreated.js'
import StudentResultAnswers from './pages/StudentResultAnswers/StudentResultAnswers.js'

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
      </Main>
    </>
  )
}

export default App
