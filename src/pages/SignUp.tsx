import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Navigate to home for now - you can integrate real auth later
    navigate('/home');
  };

  const handleGoogleSignUp = () => {
    // Navigate to home for now - you can integrate Google auth later
    navigate('/home');
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-main)' }}>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div 
          className="w-full max-w-md p-8 rounded-3xl shadow-xl"
          style={{ background: 'var(--gradient-card)' }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-2">
                <span className="text-white text-xl">📝</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">TodoHive</h1>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign up</h2>
            <p className="text-gray-600">Create Account</p>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSignUp} className="space-y-4 mb-6">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-200 bg-white/50"
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-200 bg-white/50"
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-200 bg-white/50"
                required
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full py-4 rounded-xl font-medium text-white"
              style={{ background: 'var(--gradient-button)' }}
            >
              Sign up
            </Button>
          </form>

          {/* Divider */}
          <div className="text-center mb-4">
            <span className="text-gray-500 text-sm">OR continue with</span>
          </div>

          {/* Google Sign Up */}
          <Button
            onClick={handleGoogleSignUp}
            variant="outline"
            className="w-full py-4 rounded-xl font-medium border-2 bg-white hover:bg-gray-50"
          >
            <img 
              src="https://developers.google.com/identity/images/g-logo.png" 
              alt="Google" 
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </Button>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account? {" "}
              <button 
                onClick={() => navigate('/signin')}
                className="text-primary font-medium hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;