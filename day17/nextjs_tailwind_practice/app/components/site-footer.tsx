import Link from "next/link"
import { Zap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo and Description */}
        <div>
          <Link href="#" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
            <Zap className="w-6 h-6 fill-white" />
            Superio
          </Link>
          <p className="text-sm mb-4">
            Superio is a leading platform for job seekers and employers, connecting talent with opportunities.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: For Job Seekers */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">For Job Seekers</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Resume Builder
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Career Advice
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Job Alerts
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: For Employers */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">For Employers</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                Post a Job
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Find Candidates
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Employer Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Pricing Plans
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Superio. All rights reserved.
      </div>
    </footer>
  )
}
