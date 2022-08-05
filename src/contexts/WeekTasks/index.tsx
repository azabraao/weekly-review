import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useState,
} from "react";

interface WeekTasksContextValues {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
}

export const WeekTasksContext = createContext({} as WeekTasksContextValues);

interface WeekTasksProviderProps {
  children: React.ReactNode;
}

export const WeekTasksProvider = ({ children }: WeekTasksProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback(
    (task: Task) => {
      setTasks([...tasks, task]);
    },
    [tasks]
  );

  const removeTask = useCallback(
    (id: number) => {
      setTasks([...tasks.filter((task) => task.id !== id)]);
    },
    [tasks]
  );

  return (
    <WeekTasksContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </WeekTasksContext.Provider>
  );
};

export const useWeekTasks = (): WeekTasksContextValues => {
  const context = useContext(WeekTasksContext);
  if (!context)
    throw new Error("useWeekTasks must be used within a WeekTasksProvider");

  return context;
};

export default memo(WeekTasksProvider);
