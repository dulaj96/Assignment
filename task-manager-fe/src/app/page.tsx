'use client'
import {TaskTable} from "@/components/DataTable";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {useState} from "react";
import {Task} from "@/types/Task";
import {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useGetAllTasksQuery,
  useUpdateTaskMutation
} from "@/app/api/tasks";
import {CreateTaskRequest} from "@/types/CreateTaskRequest.type";
import {UpdateTaskRequest} from "@/types/UpdateTaskRequest.type";

export default function Home() {
  const [dialog, setDialog] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<Task>();

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const {data: tasks, isLoading} = useGetAllTasksQuery();
  const [createTask, {isLoading: isCreating}] = useCreateTaskMutation();
  const [updateTask, {isLoading: isUpdating}] = useUpdateTaskMutation();
  const [deleteTask, {isLoading: isDeleting}] = useDeleteTaskMutation();

  const onCreateDialogOpen = () => {
    setUpdate(false);
    setName('');
    setDescription('')
    setDialog(true);
  }

  const onSubmit = async () => {
    if (update) {
      const request: UpdateTaskRequest = {
        id: selectedRecord?.id || 0,
        name,
        description
      }
      await updateTask(request);
    } else {
      const request: CreateTaskRequest = {
        name,
        description
      }
      setName('');
      setDescription('');
      await createTask(request)
    }
    setDialog(false);
  }

  const onDelete = async (id: string) => {
    await deleteTask(id)
  }

  const onUpdate = async (data: Task) => {
    setSelectedRecord(data);
    setName(data.name);
    setDescription(data.description);
    setDialog(true);
    setUpdate(true);
  }

  return (
    <main className="flex flex-col items-center p-24">
      <p className="text-2xl mb-10">Task Manager</p>
      <TaskTable tableData={tasks || []} onCreate={onCreateDialogOpen} onDelete={onDelete} onUpdate={onUpdate}/>
      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{update ? 'Update Task' : 'Create Task'}</DialogTitle>
            <DialogDescription>
              {update ? 'Update' : 'Create'} your new task by filling the form below
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value={name} className="col-span-3" onChange={e => setName(e.target.value)} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input id="description" value={description} className="col-span-3" onChange={e => setDescription(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={onSubmit}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
