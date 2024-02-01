import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { type BuiltQuestion } from '../globalStates/teacherFinalQuestions/TeacherBuiltQuestionsProps'
import { useStoreTeacherQuestions } from '../globalStates/teacherQuestionsState/teacherQuestionsState'

function useGoToCreatedQuetions ({
  builtQuestions
}: {
  builtQuestions: BuiltQuestion[]
}): void {
  const { teacherQuestions } = useStoreTeacherQuestions()
  const navigate = useNavigate()

  useEffect(() => {
    if (builtQuestions.length === Number(teacherQuestions)) { navigate('/teacher/questions-created') }
  }, [builtQuestions])
}

export default useGoToCreatedQuetions
