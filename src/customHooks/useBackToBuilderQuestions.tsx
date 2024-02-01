import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { type BuiltQuestion } from '../globalStates/teacherFinalQuestions/TeacherBuiltQuestionsProps'

function useBackToBuilderQuestions (builtQuestions: BuiltQuestion[]): void {
  const navigate = useNavigate()

  useEffect(() => {
    if (builtQuestions.length === 0)navigate('/teacher')
  }, [builtQuestions])
}

export default useBackToBuilderQuestions
