import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, Moon, Globe, Shield, HelpCircle, Info } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const settingsItems = [
    {
      icon: Bell,
      title: "Notifications",
      description: "Push notifications for tasks",
      type: "switch",
      value: notifications,
      onChange: setNotifications
    },
    {
      icon: Moon,
      title: "Dark Mode",
      description: "Switch to dark theme",
      type: "switch",
      value: darkMode,
      onChange: setDarkMode
    },
    {
      icon: Globe,
      title: "Language",
      description: "English",
      type: "navigation",
      onClick: () => {}
    },
    {
      icon: Shield,
      title: "Privacy",
      description: "Privacy settings",
      type: "navigation",
      onClick: () => {}
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      description: "Get help and support",
      type: "navigation",
      onClick: () => {}
    },
    {
      icon: Info,
      title: "About",
      description: "App version and info",
      type: "navigation",
      onClick: () => {}
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-main)' }}>
      <div className="min-h-screen p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-4">
          <Button
            onClick={() => navigate('/profile')}
            variant="ghost"
            className="text-white hover:bg-white/20 p-2 rounded-xl"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-white text-xl font-semibold">Settings</h1>
          <div className="w-10"></div>
        </div>

        {/* Settings List */}
        <div 
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 mx-2"
        >
          <div className="space-y-4">
            {settingsItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </div>
                
                {item.type === "switch" && (
                  <Switch
                    checked={item.value}
                    onCheckedChange={item.onChange}
                  />
                )}
                
                {item.type === "navigation" && (
                  <Button
                    variant="ghost"
                    onClick={item.onClick}
                    className="text-gray-400 hover:text-gray-600 p-2"
                  >
                    →
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* App Version */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">TodoHive v1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;