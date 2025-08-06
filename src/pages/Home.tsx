import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Clock, Flag, Trash2 } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const tasks = [
    {
      id: 1,
      title: "Email to Ammar",
      time: "10:30 AM to 11:30 AM",
      category: "project",
      icon: "📧",
      color: "bg-category-project"
    },
    {
      id: 2,
      title: "Groceries",
      time: "09:30 AM to 10:30 AM",
      category: "groceries", 
      icon: "🛒",
      color: "bg-category-groceries"
    },
    {
      id: 3,
      title: "Do Project",
      time: "08:30 AM to 09:30 AM",
      category: "work",
      icon: "💼",
      color: "bg-category-work"
    },
    {
      id: 4,
      title: "Send Notes",
      time: "07:30 AM to 08:30 AM",
      category: "daily",
      icon: "📝",
      color: "bg-category-daily"
    }
  ];

  const categories = [
    { name: "Project", count: 5, color: "bg-category-project" },
    { name: "Work", count: 3, color: "bg-category-work" },
    { name: "Daily Tasks", count: 7, color: "bg-category-daily" },
    { name: "Groceries", count: 7, color: "bg-category-groceries" }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-main)' }}>
      <div className="min-h-screen p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pt-4">
          <div>
            <h1 className="text-white text-2xl font-semibold">Hello Varun,</h1>
            <p className="text-white/80">HomeScreen</p>
          </div>
          <Avatar 
            className="w-12 h-12 cursor-pointer" 
            onClick={() => navigate('/profile')}
          >
            <AvatarImage src="/api/placeholder/48/48" />
            <AvatarFallback className="bg-white/20 text-white">V</AvatarFallback>
          </Avatar>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-white/80">{category.count}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Today's Tasks Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl font-semibold">Today's Tasks</h2>
          <Button
            onClick={() => navigate('/create-task')}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 rounded-full w-10 h-10 p-0"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        {/* Tasks List */}
        <div className="space-y-3 mb-20">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between"
              onClick={() => navigate(`/edit-task/${task.id}`)}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-lg">{task.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{task.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {task.time}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Flag className="w-5 h-5 text-gray-400" />
                <Trash2 className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Create New Task Button */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
          <Button
            onClick={() => navigate('/create-task')}
            className="px-8 py-4 rounded-2xl font-medium text-white shadow-lg"
            style={{ background: 'var(--gradient-button)' }}
          >
            Create new task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;