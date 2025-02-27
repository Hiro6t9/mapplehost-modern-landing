
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Server, Cloud, Shield, Cpu, Network, Globe } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "High-Performance Servers",
    description: "Enterprise-grade hardware ensures maximum uptime and reliability"
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Multi-layered security with DDoS protection and SSL certificates"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure for growing businesses"
  },
  {
    icon: Cpu,
    title: "Dedicated Resources",
    description: "Guaranteed CPU and RAM allocation for optimal performance"
  },
  {
    icon: Network,
    title: "Global Network",
    description: "Lightning-fast connectivity with multiple data centers"
  },
  {
    icon: Globe,
    title: "24/7 Support",
    description: "Expert technical support available around the clock"
  }
];

const Index = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  // Set initial theme
  useEffect(() => {
    document.documentElement.className = theme;
  }, []);

  return (
    <div className={`min-h-screen relative ${theme}`}>
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1501286353178-1ec871b174f8')",
            filter: theme === 'dark' ? "brightness(0.3) blur(3px)" : "brightness(0.8) blur(3px)",
          }}
        ></div>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900/80 to-gray-900' : 'bg-gradient-to-b from-gray-100/80 to-gray-100'}`}></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="fixed top-24 right-6 z-50 p-2 rounded-full shadow-lg bg-opacity-80 transition-all duration-300"
          style={{ 
            backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
            color: theme === 'dark' ? 'white' : 'black'
          }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 animate-fade-up ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Next-Generation Cloud Hosting
            </h1>
            <p className={`text-xl mb-8 max-w-2xl mx-auto animate-fade-up ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} style={{ animationDelay: '0.2s' }}>
              Experience lightning-fast performance with our cutting-edge hosting infrastructure
            </p>
            <div className="space-x-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className={`${theme === 'dark' ? 'bg-mapple-600 hover:bg-mapple-700' : 'bg-mapple-500 hover:bg-mapple-600'} rounded-full px-8 py-6 shadow-lg hover:shadow-mapple-600/20 transition-all duration-300`}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" className={`${theme === 'dark' ? 'text-gray-300 border-gray-700 hover:bg-gray-800' : 'text-gray-700 border-gray-300 hover:bg-gray-200'} rounded-full px-8 py-6 backdrop-blur-sm hover:border-mapple-400 transition-all duration-300`}>
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/50'} backdrop-blur-md`}>
          <div className="container mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Powerful Features for Your Success
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70' : 'bg-white/70 border-gray-200 hover:bg-white/90'} border transition-all duration-300 animate-fade-up backdrop-blur-sm hover:shadow-xl`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className={`h-12 w-12 mb-4 ${theme === 'dark' ? 'text-mapple-400' : 'text-mapple-600'}`} />
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{feature.title}</h3>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={theme === 'dark' ? 'bg-gray-950 text-gray-400' : 'bg-gray-200 text-gray-600'}>
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Server className={`h-6 w-6 ${theme === 'dark' ? 'text-mapple-400' : 'text-mapple-600'}`} />
              <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>MappleHost</span>
            </div>
            <div className="text-center mt-4">
              <p>&copy; 2024 MappleHost. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
