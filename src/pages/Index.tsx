
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

const plans = [
  {
    name: "Starter",
    price: "29",
    features: ["2 CPU Cores", "4GB RAM", "50GB SSD", "2TB Bandwidth", "Free SSL"],
    popular: false
  },
  {
    name: "Professional",
    price: "59",
    features: ["4 CPU Cores", "8GB RAM", "100GB SSD", "5TB Bandwidth", "Free SSL", "Daily Backups"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "119",
    features: ["8 CPU Cores", "16GB RAM", "250GB SSD", "10TB Bandwidth", "Free SSL", "Daily Backups", "Dedicated IP"],
    popular: false
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
            Next-Generation Cloud Hosting
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Experience lightning-fast performance with our cutting-edge hosting infrastructure
          </p>
          <div className="space-x-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-mapple-600 hover:bg-mapple-700">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powerful Features for Your Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="h-12 w-12 text-mapple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Choose Your Perfect Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-xl bg-white border ${
                  plan.popular ? 'border-mapple-600 shadow-lg' : 'border-gray-100'
                } hover:shadow-xl transition-shadow duration-300 animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mapple-600 text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-600">
                      <Cloud className="h-5 w-5 text-mapple-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular ? 'bg-mapple-600 hover:bg-mapple-700' : ''
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Server className="h-6 w-6 text-mapple-400" />
                <span className="text-xl font-bold text-white">MappleHost</span>
              </div>
              <p className="text-gray-400">
                Next-generation cloud hosting for modern businesses
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Cloud Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dedicated Servers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Virtual Machines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Storage Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 MappleHost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
