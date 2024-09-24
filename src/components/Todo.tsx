const todoList = [
  {
    id: 1,
    task: 'React 공부하기',
    author: 'Alice',
    priority: 'high',
  },
  {
    id: 2,
    task: '운동하기',
    author: 'Bob',
    priority: 'medium',
  },
  {
    id: 3,
    task: '저녁 식사 준비',
    author: 'Charlie',
    priority: 'low',
  },
  {
    id: 4,
    task: '프로젝트 계획 세우기',
    author: 'David',
    priority: 'high',
  },
  {
    id: 5,
    task: '책 읽기',
    author: 'Eve',
    priority: 'medium',
  },
  {
    id: 6,
    task: '주간 회의 참석',
    author: 'Alice',
    priority: 'high',
  },
  {
    id: 7,
    task: '할 일 목록 정리',
    author: 'Bob',
    priority: 'low',
  },
  {
    id: 8,
    task: '은행 업무 보기',
    author: 'Charlie',
    priority: 'medium',
  },
  {
    id: 9,
    task: 'React Query 학습',
    author: 'David',
    priority: 'high',
  },
  {
    id: 10,
    task: '코드 리뷰하기',
    author: 'Eve',
    priority: 'medium',
  },
]

export const Todo = () => {
  return (
    <div className="flex flex-wrap">
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className="text-white mr-1rem mb-1rem p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded min-w-15rem"
        >
          <div>Who: {todo.author}</div>
          <div>Task: {todo.task}</div>
          <div>Priority: {todo.priority}</div>
        </div>
      ))}
    </div>
  )
}
