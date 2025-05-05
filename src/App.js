import { useState } from "react";

const TASKS = [
  {
    task: "Odayı temizle",
    subtasks: ["Çamaşır yap", "Masa düzenle", "Zeminleri sil"],
  },
  {
    task: "Çalış",
    subtasks: ["Kimya tekrarı yap", "Bir React kodlama sorununu çöz"],
  },
  {
    task: "Web sitesi oluştur",
    subtasks: [
      "Teknoloji yığını seç",
      "Sayfaları tasarla",
      "Geliştir",
      "Yayınla",
    ],
  },
];

function App() {
  const [tasks, setTasks] = useState(
    TASKS.map((task) => ({
      ...task,
      completedSubtasks: Array(task.subtasks.length).fill(false),
    }))
  );

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <TasksAndSubtasks taskArray={tasks} setTaskArray={setTasks} />
    </div>
  );
}

const TasksAndSubtasks = ({ taskArray, setTaskArray }) => {
  const toggleSubtask = (taskIndex, subtaskIndex) => {
    const newTasks = [...taskArray];
    newTasks[taskIndex].completedSubtasks[subtaskIndex] =
      !newTasks[taskIndex].completedSubtasks[subtaskIndex];
    setTaskArray(newTasks);
  };

  const isTaskCompleted = (task) =>
    task.completedSubtasks.every((status) => status === true);

  const handleClearCompletedTasks = () => {
    const filtered = taskArray.filter((task) => !isTaskCompleted(task));
    setTaskArray(filtered);
  };

  return (
    <div>
      <ul>
        {taskArray.map((task, taskIndex) => (
          <li key={taskIndex} style={{ marginBottom: "20px" }}>
            <div
              style={{
                fontWeight: "bold",
                textDecoration: isTaskCompleted(task) ? "line-through" : "none",
              }}
            >
              {task.task}
            </div>
            <ul style={{ paddingLeft: "20px" }}>
              {task.subtasks.map((subtask, subIndex) => (
                <li
                  key={subIndex}
                  onClick={() => toggleSubtask(taskIndex, subIndex)}
                  style={{
                    cursor: "pointer",
                    textDecoration: task.completedSubtasks[subIndex]
                      ? "line-through"
                      : "none",
                  }}
                >
                  {subtask}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCompletedTasks}>
        Tamamlanan görevleri temizle
      </button>
    </div>
  );
};

export default App;
