import React from 'react';
import { Mail, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 mt-12 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 overflow-x-hidden w-full">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Location Map Section */}
          <div className="space-y-4 flex-1 w-full min-w-0">
            <h3 className="text-lg font-semibold">Our Location</h3>
            <div className="w-full h-[200px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0920597862396!2d88.3595621761694!3d22.575659932856475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02779493039a55%3A0xeda7fee5c3e194b!2zUHJlc2lkZW5jeSBVbml2ZXJzaXR5IEJha2VyIEJ1aWxkaW5nIEdhdGUg4Kaq4KeN4Kaw4KeH4Ka44Ka_4Kah4KeH4Kao4KeN4Ka44Ka_IOCmrOCmv-CmtuCnjeCmrOCmrOCmv-CmpuCnjeCmr-CmvuCmsuCmr-CmvCDgpqzgp4fgppXgpr7gprAg4Kat4Kas4KaoIOCml-Cnh-Cmnw!5e0!3m2!1sen!2sin!4v1763323553965!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PUPS Location"
                className="max-w-full"
              />
            </div>
          </div>

          {/* Quick Links and Connect With Us grouped together */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 flex-1 w-full min-w-0">
            {/* Quick Links Section */}
            <div className="space-y-4 flex-1 min-w-0">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/about" 
                  className="text-muted hover:text-current transition-colors truncate"
                >
                  About Us
                </Link>
                <Link 
                  href="/events" 
                  className="text-muted hover:text-current transition-colors truncate"
                >
                  Events
                </Link>
                <Link 
                  href="/colloquium" 
                  className="text-muted hover:text-current transition-colors truncate"
                >
                  Colloquium
                </Link>
                <Link 
                  href="/team" 
                  className="text-muted hover:text-current transition-colors truncate"
                >
                  Team
                </Link>
              </div>
            </div>

            {/* Connect With Us Section */}
            <div className="space-y-4 flex-1 min-w-0">
              <h3 className="text-lg font-semibold">Connect With Us</h3>
              <div className="flex flex-col space-y-4">
                <a 
                  href="mailto:contact@pups.edu" 
                  className="flex items-center gap-2 sm:gap-3 text-muted hover:text-current transition-colors group min-w-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-muted truncate text-sm sm:text-base">contact@pups.edu</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/pups" 
                  className="flex items-center gap-2 sm:gap-3 text-muted hover:text-current transition-colors group min-w-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors flex-shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-muted truncate">LinkedIn</span>
                </a>
                <a 
                  href="https://www.facebook.com/pups" 
                  className="flex items-center gap-2 sm:gap-3 text-muted hover:text-current transition-colors group min-w-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors flex-shrink-0">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <span className="text-muted truncate">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700 w-full">
          <div className="text-center text-sm text-muted px-2">
            © {currentYear} Official Website for PUPS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
