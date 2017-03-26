package by.zarabon.orm.servicies;

import by.zarabon.orm.entyties.TaskEntity;
import by.zarabon.serverFormats.Task;

import java.util.List;

/**
 * Created by pili on 3/25/17.
 */
public interface TaskService {
    public List<Task> getTasksByUserName(String userName);

    public Task addTask(String userName, TaskEntity taskEntity);

    public boolean deleteTaskByID(String userName, Long id);

    public boolean updateTask(String userName,Task task);
}