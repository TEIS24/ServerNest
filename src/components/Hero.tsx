import React from 'react';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          {/* Floating 3D Server Stack */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-6 opacity-20 animate-pulse"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl transform -rotate-3 opacity-30 animate-pulse delay-300"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl animate-float">
              <div className="space-y-4">
                <div className="h-3 bg-white/80 rounded animate-pulse"></div>
                <div className="h-3 bg-white/60 rounded animate-pulse delay-100"></div>
                <div className="h-3 bg-white/40 rounded animate-pulse delay-200"></div>
              </div>
              <div className="absolute top-4 right-4 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Premium Web
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
            Hosting Solutions
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience lightning-fast hosting with enterprise-grade security, 
          99.9% uptime guarantee, and 24/7 expert support in India.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: Zap, text: 'LiteSpeed Servers' },
            { icon: Shield, text: 'Free SSL & Security' },
            { icon: Globe, text: 'India Data Centers' }
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 px-4 py-2 bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg rounded-full border border-white/30 dark:border-gray-700/30">
              <feature.icon className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://servernest.in/shared-hosting"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Get Started Now</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <button 
            onClick={() => document.getElementById('hosting-plans')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg hover:bg-white/20 dark:hover:bg-gray-700/40 transition-all duration-300 transform hover:scale-105"
          >
            View Plans
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '99.9%', label: 'Uptime' },
            { number: '24/7', label: 'Support' },
            { number: '10K+', label: 'Clients' },
            { number: '5+', label: 'Years' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;