
import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Monitor, Server, Shield, Cpu, Zap, Globe, 
  HardDrive, Network, Lock, ChevronRight, BarChart3, Clock
} from "lucide-react";
import { motion } from 'framer-motion';

const vpsPlans = [
  {
    name: "Starter VPS",
    ram: "2GB",
    cpu: "1 vCore",
    storage: "20GB SSD",
    bandwidth: "1TB",
    price: "9.99",
    popular: false
  },
  {
    name: "Business VPS",
    ram: "4GB",
    cpu: "2 vCore",
    storage: "50GB SSD",
    bandwidth: "2TB",
    price: "19.99",
    popular: true
  },
  {
    name: "Premium VPS",
    ram: "8GB",
    cpu: "4 vCore",
    storage: "100GB SSD",
    bandwidth: "5TB",
    price: "39.99",
    popular: false
  },
  {
    name: "Enterprise VPS",
    ram: "16GB",
    cpu: "8 vCore",
    storage: "200GB SSD",
    bandwidth: "10TB",
    price: "79.99",
    popular: false
  }
];

const features = [
  {
    icon: Cpu,
    title: "High-Performance CPU",
    description: "Latest generation processors ensure optimal application performance"
  },
  {
    icon: HardDrive,
    title: "NVMe SSD Storage",
    description: "Ultra-fast SSD storage for quick data access and processing"
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Advanced security features including firewall and DDoS protection"
  },
  {
    icon: Network,
    title: "40Gbps Network",
    description: "High-speed network with minimal latency for your applications"
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Deploy your VPS in multiple regions around the world"
  },
  {
    icon: Clock,
    title: "Instant Provisioning",
    description: "Get your VPS up and running in under 60 seconds"
  }
];

const osOptions = [
  { name: "Ubuntu 22.04", icon: "🐧", description: "Popular Linux distribution" },
  { name: "CentOS 9", icon: "🐧", description: "Enterprise-grade Linux" },
  { name: "Windows Server 2022", icon: "🪟", description: "Microsoft server OS" },
  { name: "Debian 11", icon: "🐧", description: "Stable Linux distribution" },
  { name: "Rocky Linux 9", icon: "🐧", description: "CentOS alternative" },
  { name: "Custom ISO", icon: "💿", description: "Upload your own OS image" }
];

const VPSHosting = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')",
            filter: "brightness(0.2) blur(3px)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-blue-900/10 to-gray-900"></div>
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
                    <span className="bg-blue-600/20 text-blue-400 py-1 px-3 rounded-full text-sm font-medium flex items-center">
                      <Monitor className="h-4 w-4 mr-1" /> VPS Hosting
                    </span>
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                  >
                    High-Performance <br />
                    <span className="text-blue-400">Virtual Servers</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-gray-300 mb-8"
                  >
                    Deploy your applications on our powerful virtual private servers with 
                    guaranteed resources, full root access, and instant scaling capabilities.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-6 shadow-lg hover:shadow-blue-600/20 transition-all duration-300">
                      Deploy VPS Now
                    </Button>
                    <Button size="lg" variant="outline" className="text-gray-300 border-gray-700 hover:bg-gray-800 rounded-full px-8 py-6 backdrop-blur-sm hover:border-blue-400 transition-all duration-300">
                      Compare Plans
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
                      <span className="text-gray-400 text-sm">ssh root@server.mapplehost.com</span>
                    </div>
                    <div className="font-mono text-sm text-green-400 space-y-1">
                      <p>Welcome to MappleHost VPS</p>
                      <p>Linux server 6.1.0-x86_64</p>
                      <p></p>
                      <p>Last login: Wed Jun 12 14:32:09 2024 from 192.168.1.1</p>
                      <p>root@mapplehost:~# uptime</p>
                      <p>14:33:05 up 347 days, 5:12, 1 user, load average: 0.01, 0.02, 0.00</p>
                      <p>root@mapplehost:~# free -h</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;used&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;free</p>
                      <p>Mem:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.0Gi&nbsp;&nbsp;&nbsp;&nbsp;1.2Gi&nbsp;&nbsp;&nbsp;&nbsp;6.8Gi</p>
                      <p>Swap:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.0Gi&nbsp;&nbsp;&nbsp;&nbsp;0.0Ki&nbsp;&nbsp;&nbsp;&nbsp;2.0Gi</p>
                      <p>root@mapplehost:~# _</p>
                      <div className="inline-block w-2 h-4 bg-green-400 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-600/30 backdrop-blur-sm rounded-full p-4 border border-blue-400/50">
                    <Monitor className="h-8 w-8 text-blue-400" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Server Stats Section */}
        <section className="py-10 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-900/50 to-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-blue-800/50"
              >
                <div className="flex items-center mb-2">
                  <Cpu className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Latest CPUs</h3>
                </div>
                <p className="text-gray-300 text-sm">AMD EPYC and Intel Xeon processors</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-r from-blue-900/50 to-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-blue-800/50"
              >
                <div className="flex items-center mb-2">
                  <HardDrive className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">NVMe Storage</h3>
                </div>
                <p className="text-gray-300 text-sm">Up to 3,500 MB/s read/write speeds</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-r from-blue-900/50 to-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-blue-800/50"
              >
                <div className="flex items-center mb-2">
                  <Network className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">40Gbps Network</h3>
                </div>
                <p className="text-gray-300 text-sm">Ultra-low latency global network</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-r from-blue-900/50 to-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-blue-800/50"
              >
                <div className="flex items-center mb-2">
                  <Lock className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">99.9% Uptime</h3>
                </div>
                <p className="text-gray-300 text-sm">Guaranteed by our SLA</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-20 px-4 bg-gray-900/50 backdrop-blur-md">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">VPS Hosting Plans</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Choose from our range of high-performance VPS plans designed to meet the needs of any application.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {vpsPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredPlan(index)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`relative p-6 rounded-2xl backdrop-blur-sm ${
                    plan.popular ? 'bg-gray-800/70 border-blue-400' : 'bg-gray-800/50 border-gray-700'
                  } border hover:bg-gray-800/70 transition-all duration-300 hover:shadow-xl h-full`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm shadow-lg">
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
                      <span className="text-gray-400">Storage</span>
                      <span className="text-white font-medium">{plan.storage}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Bandwidth</span>
                      <span className="text-white font-medium">{plan.bandwidth}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>
                  <Button
                    className={`w-full rounded-full ${
                      plan.popular ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-600/20' : 'border-gray-700 hover:bg-gray-700 hover:border-blue-400'
                    } transition-all duration-300 group h-12`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <span className="mr-1">Deploy Now</span>
                    <ChevronRight className={`h-4 w-4 transform transition-transform duration-300 ${hoveredPlan === index ? 'translate-x-1' : ''}`} />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OS Selection */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Operating System</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">We offer a wide range of operating systems and applications for instant deployment.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {osOptions.map((os, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:bg-gray-800/70 hover:border-blue-400 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">{os.icon}</span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">{os.name}</h3>
                  </div>
                  <p className="text-gray-400">{os.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 bg-gray-900/50 backdrop-blur-md">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              VPS Hosting Features
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
                  <div className="mb-4 bg-blue-600/20 p-3 rounded-lg inline-block">
                    <feature.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Performance Chart */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Unmatched Performance</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Our VPS solutions outperform the competition in all key metrics.</p>
            </div>
            
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-10 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="flex justify-between mb-2">
                  <div className="text-sm text-gray-400">Performance Comparison</div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-300">MappleHost</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-300">Competitors</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">CPU Performance</span>
                      <span className="text-sm text-gray-300">95%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '95%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-2 bg-blue-500 rounded-full"
                      ></motion.div>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full mt-1">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '65%' }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-2 bg-gray-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Disk I/O</span>
                      <span className="text-sm text-gray-300">98%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '98%' }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="h-2 bg-blue-500 rounded-full"
                      ></motion.div>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full mt-1">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '72%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-2 bg-gray-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Network Throughput</span>
                      <span className="text-sm text-gray-300">96%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '96%' }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-2 bg-blue-500 rounded-full"
                      ></motion.div>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full mt-1">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '69%' }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-2 bg-gray-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600/20 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Deploy Your VPS?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started in seconds with our instant provisioning system.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-6 shadow-lg hover:shadow-blue-600/20 transition-all duration-300">
              Deploy Your VPS Now
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Server className="h-6 w-6 text-blue-400" />
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
                  <li><a href="#" className="hover:text-white transition-colors">Discord Bot Hosting</a></li>
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

export default VPSHosting;
