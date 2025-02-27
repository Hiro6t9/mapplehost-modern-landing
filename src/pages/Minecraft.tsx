
import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Server, Shield, Cpu, Gamepad2, Clock, Zap, 
  Compass, Users, Download, ChevronRight, Terminal
} from "lucide-react";
import { motion } from 'framer-motion';

const minecraftPlans = [
  {
    name: "STARTER",
    ram: "2GB",
    cpu: "100%",
    storage: "10GB",
    price: "80",
    popular: false
  },
  {
    name: "NORMAL",
    ram: "4GB",
    cpu: "200%",
    storage: "20GB",
    price: "160",
    popular: true
  },
  {
    name: "PRO",
    ram: "8GB",
    cpu: "400%",
    storage: "40GB",
    price: "320",
    popular: false
  },
  {
    name: "SEMI ADVANCE",
    ram: "12GB",
    cpu: "600%",
    storage: "60GB",
    price: "480",
    popular: false
  },
  {
    name: "ADVANCED",
    ram: "16GB",
    cpu: "800%",
    storage: "80GB",
    price: "640",
    popular: false
  },
  {
    name: "ULTIMATE",
    ram: "32GB",
    cpu: "1600%",
    storage: "160GB",
    price: "1,280",
    popular: false
  }
];

const features = [
  {
    icon: Clock,
    title: "Instant Setup",
    description: "Your Minecraft server is ready to use within seconds of purchase"
  },
  {
    icon: Zap,
    title: "99.9% Uptime",
    description: "Our infrastructure ensures your server stays online when you need it"
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade protection against distributed denial-of-service attacks"
  },
  {
    icon: Compass,
    title: "Global Locations",
    description: "Choose from multiple data center locations for optimal performance"
  },
  {
    icon: Users,
    title: "Unlimited Players",
    description: "No artificial player caps - your server's performance is the only limit"
  },
  {
    icon: Terminal,
    title: "One-Click Modpacks",
    description: "Install popular modpacks with a single click from our control panel"
  }
];

const MinecraftHosting = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')",
            filter: "brightness(0.2) blur(3px)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <div className="relative">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-2 inline-block"
                  >
                    <span className="bg-mapple-600/20 text-mapple-400 py-1 px-3 rounded-full text-sm font-medium flex items-center">
                      <Gamepad2 className="h-4 w-4 mr-1" /> Minecraft Server Hosting
                    </span>
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                  >
                    Premium Minecraft <br />
                    <span className="text-mapple-400">Server Hosting</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-gray-300 mb-8"
                  >
                    Host your Minecraft world on our high-performance servers with 
                    instant setup, 24/7 uptime, and advanced security features.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Button size="lg" className="bg-mapple-600 hover:bg-mapple-700 rounded-full px-8 py-6 shadow-lg hover:shadow-mapple-600/20 transition-all duration-300">
                      Get Your Server
                    </Button>
                    <Button size="lg" variant="outline" className="text-gray-300 border-gray-700 hover:bg-gray-800 rounded-full px-8 py-6 backdrop-blur-sm hover:border-mapple-400 transition-all duration-300">
                      View Plans
                    </Button>
                  </motion.div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <div className="rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-4">
                    <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-700">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-gray-400 text-sm">Minecraft Server Console</span>
                    </div>
                    <div className="font-mono text-sm text-green-400 space-y-1">
                      <p>[INFO] Starting Minecraft server version 1.19.2</p>
                      <p>[INFO] Loading properties</p>
                      <p>[INFO] Default game type: SURVIVAL</p>
                      <p>[INFO] Preparing level "MappleWorld"</p>
                      <p>[INFO] Preparing start region for dimension minecraft:overworld</p>
                      <p>[INFO] Done! For help, type "help"</p>
                      <div className="flex items-center">
                        <span>$</span>
                        <span className="ml-2 border-r-2 border-green-400 h-5 animate-pulse"></span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-mapple-600/30 backdrop-blur-sm rounded-full p-4 border border-mapple-400/50">
                    <Server className="h-8 w-8 text-mapple-400" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-20 px-4 bg-gray-900/50 backdrop-blur-md">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">MINECRAFT PLANS</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Select from our range of high-performance Minecraft hosting plans, designed to meet the needs of every server size.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {minecraftPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredPlan(index)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`relative p-6 rounded-2xl backdrop-blur-sm ${
                    plan.popular ? 'bg-gray-800/70 border-mapple-400' : 'bg-gray-800/50 border-gray-700'
                  } border hover:bg-gray-800/70 transition-all duration-300 hover:shadow-xl h-full`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mapple-600 text-white px-4 py-1 rounded-full text-sm shadow-lg">
                      Most Popular
                    </span>
                  )}
                  
                  <h3 className="text-xl font-semibold mb-4 text-white">{plan.name}</h3>
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-xl mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">RAM</span>
                      <span className="text-white font-medium">{plan.ram}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">CPU</span>
                      <span className="text-white font-medium">{plan.cpu}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Disk</span>
                      <span className="text-white font-medium">{plan.storage}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>
                  <Button
                    className={`w-full rounded-full ${
                      plan.popular ? 'bg-mapple-600 hover:bg-mapple-700 shadow-lg hover:shadow-mapple-600/20' : 'border-gray-700 hover:bg-gray-700 hover:border-mapple-400'
                    } transition-all duration-300 group h-12`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <span className="mr-1">Select Plan</span>
                    <ChevronRight className={`h-4 w-4 transform transition-transform duration-300 ${hoveredPlan === index ? 'translate-x-1' : ''}`} />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Minecraft Server Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm hover:shadow-xl"
                >
                  <div className="mb-4 bg-mapple-600/20 p-3 rounded-lg inline-block">
                    <feature.icon className="h-8 w-8 text-mapple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-mapple-600/20 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Minecraft Adventure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Set up your server in minutes and invite your friends to join your world.
            </p>
            <Button size="lg" className="bg-mapple-600 hover:bg-mapple-700 rounded-full px-8 py-6 shadow-lg hover:shadow-mapple-600/20 transition-all duration-300">
              Get Started Now
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Server className="h-6 w-6 text-mapple-400" />
                  <span className="text-xl font-bold text-white">MappleHost</span>
                </div>
                <p className="text-gray-500">
                  Next-generation cloud hosting for modern businesses
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Products</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Minecraft Hosting</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">VPS Hosting</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Web Hosting</a></li>
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
    </div>
  );
};

export default MinecraftHosting;
