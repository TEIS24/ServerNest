import { useEffect } from 'react';

const TawkToChat: React.FC = () => {
  useEffect(() => {
    // Tawk.to script injection
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/6788f045825083258e065141/1ihnel4bf';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Add script to document head
    document.head.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      // Remove the script
      const existingScript = document.querySelector('script[src*="tawk.to"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Remove Tawk.to widget if it exists
      const tawkWidget = document.getElementById('tawk-widget');
      if (tawkWidget) {
        tawkWidget.remove();
      }
      
      // Clean up global Tawk_API
      if (window.Tawk_API) {
        delete window.Tawk_API;
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default TawkToChat;