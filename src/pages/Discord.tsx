
import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, Server, Shield, Cpu, Zap, Bot, 
  Code, GitBranch, Globe, HeartPulse, ChevronRight, Database
} from "lucide-react";
import { motion } from 'framer-motion';

const discordPlans = [
  {
    name: "Basic",
    ram: "512MB",
    cpu: "Shared",
    storage: "5GB SSD",
    price: "3.99",
    bots: "1 Bot",
    popular: false
  },
  {
    name: "Standard",
    ram: "1GB",
    cpu: "1 vCore",
    storage: "10GB SSD",
    price: "7.99",
    bots: "3 Bots",
    popular: true
  },
  {
    name: "Premium",
    ram: "2GB",
    cpu: "2 vCore",
    storage: "20GB SSD",
    price: "14.99",
    bots: "5 Bots",
    popular: false
  },
  {
    name: "Ultimate",
    ram: "4GB",
    cpu: "4 vCore",
    storage: "40GB SSD",
    price: "24.99",
    bots: "Unlimited Bots",
    popular: false
  }
];

const features = [
  {
    icon: Zap,
    title: "24/7 Uptime",
    description: "Your Discord bots run continuously with our guaranteed uptime service"
  },
  {
    icon: Database,
    title: "Database Integration",
    description: "Built-in MongoDB and Redis support for your bot data storage needs"
  },
  {
    icon: Shield,
    title: "Secure Environment",
    description: "Industry-standard security measures to protect your bot and data"
  },
  {
    icon: Bot,
    title: "Bot Templates",
    description: "Ready-to-use templates for various bot functionalities to get started quickly"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Low-latency hosting from multiple regions for optimal performance"
  },
  {
    icon: HeartPulse,
    title: "Health Monitoring",
    description: "Real-time monitoring and alerts for your bot's performance"
  }
];

const DiscordBotHosting = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1483058712412-4245e9b90334')",
            filter: "brightness(0.2) blur(3px)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-purple-900/20 to-gray-900"></div>
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
                    <span className="bg-purple-600/20 text-purple-400 py-1 px-3 rounded-full text-sm font-medium flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" /> Discord Bot Hosting
                    </span>
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                  >
                    Reliable Discord <br />
                    <span className="text-purple-400">Bot Hosting</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-gray-300 mb-8"
                  >
                    Host your Discord bots with 24/7 uptime, advanced monitoring, 
                    and seamless scalability on our specialized platform.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 rounded-full px-8 py-6 shadow-lg hover:shadow-purple-600/20 transition-all duration-300">
                      Host Your Bot
                    </Button>
                    <Button size="lg" variant="outline" className="text-gray-300 border-gray-700 hover:bg-gray-800 rounded-full px-8 py-6 backdrop-blur-sm hover:border-purple-400 transition-all duration-300">
                      Learn More
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
                      <span className="text-gray-400 text-sm">bot.js</span>
                    </div>
                    <div className="font-mono text-sm text-green-400 space-y-1">
                      <p><span className="text-purple-400">const</span> Discord = <span className="text-yellow-300">require</span>(<span className="text-green-300">'discord.js'</span>);</p>
                      <p><span className="text-purple-400">const</span> client = <span className="text-yellow-300">new</span> Discord.Client();</p>
                      <p></p>
                      <p>client.<span className="text-blue-400">on</span>(<span className="text-green-300">'ready'</span>, () => {'{'}</p>
                      <p>&nbsp;&nbsp;console.<span className="text-blue-400">log</span>(<span className="text-green-300">`Logged in as </span>${'{'}client.user.tag{'}'}<span className="text-green-300">`</span>);</p>
                      <p>{'}'});</p>
                      <p></p>
                      <p>client.<span className="text-blue-400">on</span>(<span className="text-green-300">'message'</span>, msg => {'{'}</p>
                      <p>&nbsp;&nbsp;<span className="text-purple-400">if</span> (msg.content === <span className="text-green-300">'!ping'</span>) {'{'}</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;msg.<span className="text-blue-400">reply</span>(<span className="text-green-300">'Pong!'</span>);</p>
                      <p>&nbsp;&nbsp;{'}'}</p>
                      <p>{'}'});</p>
                      <p></p>
                      <p>client.<span className="text-blue-400">login</span>(<span className="text-green-300">'BOT_TOKEN'</span>);</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-purple-600/30 backdrop-blur-sm rounded-full p-4 border border-purple-400/50">
                    <Bot className="h-8 w-8 text-purple-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Discord Bot Hosting Plans</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Choose a plan that suits your Discord bot needs, from hobbyist to enterprise-grade solutions.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {discordPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredPlan(index)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`relative p-6 rounded-2xl backdrop-blur-sm ${
                    plan.popular ? 'bg-gray-800/70 border-purple-400' : 'bg-gray-800/50 border-gray-700'
                  } border hover:bg-gray-800/70 transition-all duration-300 hover:shadow-xl h-full`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm shadow-lg">
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
                      <span className="text-gray-400">Capacity</span>
                      <span className="text-white font-medium">{plan.bots}</span>
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
                      plan.popular ? 'bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-purple-600/20' : 'border-gray-700 hover:bg-gray-700 hover:border-purple-400'
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
              Discord Bot Hosting Features
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
                  <div className="mb-4 bg-purple-600/20 p-3 rounded-lg inline-block">
                    <feature.icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 px-4 bg-gray-900/50 backdrop-blur-md">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple Bot Integration</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Our platform supports all popular Discord bot frameworks and libraries.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="h-5 w-5 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">discord.js</h3>
                </div>
                <div className="font-mono text-sm bg-gray-900 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-green-400">
{`const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
  intents: [GatewayIntentBits.Guilds, 
           GatewayIntentBits.GuildMessages] 
});

client.on('ready', () => {
  console.log(\`Logged in as \${client.user.tag}\`);
});

client.on('messageCreate', async message => {
  if (message.content === '!hello') {
    message.reply('Hello from MappleHost!');
  }
});

client.login(process.env.TOKEN);`}
                  </pre>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <GitBranch className="h-5 w-5 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">discord.py</h3>
                </div>
                <div className="font-mono text-sm bg-gray-900 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-blue-400">
{`import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='!')

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}')

@bot.command()
async def hello(ctx):
    await ctx.send('Hello from MappleHost!')

bot.run('YOUR_TOKEN_HERE')`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-purple-600/20 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Deploy Your Discord Bot?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get your bot up and running in minutes with our easy deployment system.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 rounded-full px-8 py-6 shadow-lg hover:shadow-purple-600/20 transition-all duration-300">
              Start Hosting Now
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Server className="h-6 w-6 text-purple-400" />
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

export default DiscordBotHosting;
