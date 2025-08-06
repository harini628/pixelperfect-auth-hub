import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const CreateTask = () => {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const [category, setCategory] = useState("personal");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [priority, setPriority] = useState("medium");
  const [description, setDescription] = useState("");

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the task
    navigate('/task-added');
  };

  const priorities = ["Low", "Medium", "High"];
  const categories = ["Personal", "Work", "Project", "Daily"];

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-main)' }}>
      <div className="min-h-screen p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-4">
          <Button
            onClick={() => navigate('/home')}
            variant="ghost"
            className="text-white hover:bg-white/20 p-2 rounded-xl"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-white text-xl font-semibold">Create a new task</h1>
          <div className="w-10"></div>
        </div>

        {/* Form */}
        <div 
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 mx-2"
        >
          <form onSubmit={handleCreateTask} className="space-y-6">
            {/* Task Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Task Name</label>
              <Input
                placeholder="Car Rental"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="w-full p-4 rounded-xl border-gray-200"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Category</label>
              <div className="flex space-x-2">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat.toLowerCase())}
                    className={`px-4 py-2 rounded-xl ${
                      category === cat.toLowerCase()
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Date & Time</label>
                <div className="space-y-3">
                  <div className="relative">
                    <Input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full p-4 rounded-xl border-gray-200"
                    />
                    <Calendar className="absolute right-3 top-4 w-5 h-5 text-gray-400" />
                  </div>
                  <div className="relative">
                    <Input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-full p-4 rounded-xl border-gray-200"
                    />
                    <Clock className="absolute right-3 top-4 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">End time</label>
                <div className="space-y-3">
                  <div className="relative">
                    <Input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full p-4 rounded-xl border-gray-200"
                    />
                    <Calendar className="absolute right-3 top-4 w-5 h-5 text-gray-400" />
                  </div>
                  <div className="relative">
                    <Input
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-full p-4 rounded-xl border-gray-200"
                    />
                    <Clock className="absolute right-3 top-4 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Priority */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Priority</label>
              <div className="flex space-x-2">
                {priorities.map((p) => (
                  <Button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p.toLowerCase())}
                    className={`px-6 py-2 rounded-xl ${
                      priority === p.toLowerCase()
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {p}
                  </Button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Description</label>
              <Textarea
                placeholder="Enter task description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-4 rounded-xl border-gray-200 min-h-[100px]"
              />
            </div>

            {/* Create Button */}
            <Button
              type="submit"
              className="w-full py-4 rounded-xl font-medium text-white mt-8"
              style={{ background: 'var(--gradient-button)' }}
            >
              Create task
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;