import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-main)' }}>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center text-white max-w-md">
          {/* TodoHive Logo */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white text-xl">📝</span>
              </div>
              <h1 className="text-3xl font-bold">TodoHive</h1>
            </div>
            <p className="text-white/80 text-lg mb-2">Innovative, user-friendly,</p>
            <p className="text-white/80 text-lg">and easy.</p>
          </div>

          {/* Get Started Button */}
          <Button 
            onClick={() => navigate('/signin')}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-3 rounded-xl font-medium"
          >
            Get Started →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;