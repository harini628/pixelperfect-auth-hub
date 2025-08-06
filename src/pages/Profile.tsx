import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Camera, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Varun Kumar");
  const [email, setEmail] = useState("varun@example.com");
  const [phone, setPhone] = useState("+1 234 567 8900");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the profile changes
    navigate('/home');
  };

  const handleLogout = () => {
    navigate('/logout');
  };

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
          <h1 className="text-white text-xl font-semibold">Profile</h1>
          <Button
            onClick={() => navigate('/settings')}
            variant="ghost"
            className="text-white hover:bg-white/20 p-2 rounded-xl"
          >
            <Settings className="w-6 h-6" />
          </Button>
        </div>

        {/* Profile Card */}
        <div 
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 mx-2 mb-6"
        >
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/api/placeholder/96/96" />
                <AvatarFallback className="bg-primary text-white text-2xl">VK</AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary hover:bg-primary/90 p-0"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-xl border-gray-200"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl border-gray-200"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone</label>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-4 rounded-xl border-gray-200"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full py-4 rounded-xl font-medium text-white mt-6"
              style={{ background: 'var(--gradient-button)' }}
            >
              Save Changes
            </Button>
          </form>
        </div>

        {/* Logout Button */}
        <div className="mx-2">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full py-4 rounded-xl font-medium bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;