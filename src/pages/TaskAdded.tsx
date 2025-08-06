import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const TaskAdded = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-main)' }}>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center text-white max-w-md">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Task Added Successfully!</h1>
            <p className="text-white/80 text-lg">
              Your new task has been created and added to your list.
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Button 
              onClick={() => navigate('/home')}
              className="w-full py-4 rounded-xl font-medium text-white"
              style={{ background: 'var(--gradient-button)' }}
            >
              View My Tasks
            </Button>
            
            <Button 
              onClick={() => navigate('/create-task')}
              variant="outline"
              className="w-full py-4 rounded-xl font-medium bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              Add Another Task
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskAdded;