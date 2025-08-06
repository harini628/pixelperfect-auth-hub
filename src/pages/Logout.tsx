import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const Logout = () => {
  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    // Here you would typically clear auth tokens/session
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-main)' }}>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div 
          className="w-full max-w-md p-8 rounded-3xl shadow-xl text-center"
          style={{ background: 'var(--gradient-card)' }}
        >
          {/* Logout Icon */}
          <div className="mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogOut className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Log Out</h2>
            <p className="text-gray-600">Are you sure you want to log out of your account?</p>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Button 
              onClick={handleConfirmLogout}
              className="w-full py-4 rounded-xl font-medium text-white bg-red-600 hover:bg-red-700"
            >
              Yes, Log Out
            </Button>
            
            <Button 
              onClick={handleCancel}
              variant="outline"
              className="w-full py-4 rounded-xl font-medium border-2 bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;