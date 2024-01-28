import { createBrowserRouter } from 'react-router-dom'
import TeacherInitialPage from '../pages/teacher/TeacherInitialPage/TeacherInitialPage'
import TeacherQuestionsCreated from '../pages/teacher/TeacherQuestionsCreated/TeacherQuestionsCreated'
import TeacherQuestionsCreator from '../pages/teacher/TeacherQuestionsCreator/TeacherQuestionsCreator'
import CodeFormCreated from '../pages/teacher/CodeFormCreated/CodeFormCreated'
import StudentInitialPage from '../pages/student/StudentInitialPage/StudentInitialPage'
import StudentQuestions from '../pages/student/StudentQuestions/StudentQuestions'
import StudentAnswers from '../pages/student/StudentAnswers/StudentAnswers'
import StudentResultAnswers from '../pages/student/StudentResultAnswers/StudentResultAnswers'
import App from '../App'

const router = createBrowserRouter([
  {
    path: '/home',
    element: <App />
  },
  {
    path: '/teacher',
    element: <TeacherInitialPage />
  },
  {
    path: '/teacher/questions-creator',
    element: <TeacherQuestionsCreator />
  },
  {
    path: '/teacher/questions-created',
    element: <TeacherQuestionsCreated />
  },
  {
    path: '/teacher/code-form',
    element: <CodeFormCreated />
  },
  {
    path: '/student',
    element: <StudentInitialPage />
  },
  {
    path: '/student/questions',
    element: <StudentQuestions />
  },
  {
    path: '/student/answers',
    element: <StudentAnswers />
  },
  {
    path: '/student/result-answers',
    element: <StudentResultAnswers />
  }
])

export default router
