import { useState } from 'react'
import './App.css'
import { 
  Moon, 
  Sun, 
  GraduationCap, 
  DollarSign, 
  Rocket, 
  Building, 
  Globe, 
  Users, 
  Code, 
  BookOpen, 
  Award, 
  Target,
  ExternalLink,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const educationalPrograms = [
    {
      name: "Andela Nigeria",
      description: "One of the most prestigious tech training programs in Africa",
      category: "Premium Bootcamp",
      link: "https://andela.com/",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "Decagon Institute",
      description: "Intensive software development bootcamp with job placement",
      category: "Coding Bootcamp",
      link: "https://decagon.institute/",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "HNG Internship",
      description: "Remote internship program for developers with real projects",
      category: "Internship",
      link: "https://hng.tech/",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "AltSchool",
      description: "Modern tech education platform with flexible learning",
      category: "Online Platform",
      link: "https://altschoolafrica.com/",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      name: "Digital Skills Nigeria (DSN)",
      description: "Microsoft-led initiative supporting ages 16-35 with tech training",
      category: "Government Program",
      link: "https://www.digitalskillsnigeria.org/",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      name: "Tech4Dev",
      description: "Digital skills and entrepreneurship training across Africa",
      category: "NGO Program",
      link: "https://tech4dev.com/",
      icon: <Target className="w-6 h-6" />
    }
  ]

  const fundingOpportunities = [
    {
      name: "Tony Elumelu Foundation",
      description: "Entrepreneurship funding and mentorship for African startups",
      amount: "$5,000 - $25,000",
      link: "https://www.tonyelumelufoundation.org/",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      name: "ALX Africa Scholarships",
      description: "Access to world-class tech and professional training programs",
      amount: "Full Scholarships",
      link: "https://www.alxafrica.com/",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "RAIN 2025 Scholarship",
      description: "Full scholarships for robotics and AI expertise development",
      amount: "Full Funding",
      link: "https://www.globalsouthopportunities.com/",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      name: "Greenhouse Capital",
      description: "Startup funding for early-stage tech companies",
      amount: "$5,000 - $25,000",
      link: "https://greenhouse.capital/",
      icon: <Building className="w-6 h-6" />
    }
  ]

  const incubators = [
    {
      name: "Co-Creation Hub (CcHUB)",
      description: "Nigeria's leading tech innovation center and startup incubator",
      location: "Lagos, Abuja",
      link: "https://cchubnigeria.com/",
      icon: <Building className="w-6 h-6" />
    },
    {
      name: "Google Launchpad Accelerator",
      description: "Google's startup acceleration program for African entrepreneurs",
      location: "Lagos",
      link: "https://developers.google.com/community/launchpad",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      name: "ARM Labs Lagos Techstars",
      description: "International accelerator program with global network",
      location: "Lagos",
      link: "https://www.techstars.com/accelerators/arm-labs-lagos",
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: "Wennovation Hub",
      description: "Innovation hub focusing on technology and entrepreneurship",
      location: "Abuja",
      link: "https://wennovationhub.com/",
      icon: <Users className="w-6 h-6" />
    }
  ]

  const governmentInitiatives = [
    {
      name: "20 Million Youth Digital Skills Program",
      description: "Ambitious government plan to train 20 million youths by 2030",
      agency: "Federal Government",
      link: "https://nitda.gov.ng/",
      icon: <Target className="w-6 h-6" />
    },
    {
      name: "NITDA Partnerships",
      description: "Various collaborations with international tech companies",
      agency: "NITDA",
      link: "https://nitda.gov.ng/",
      icon: <Building className="w-6 h-6" />
    },
    {
      name: "Youth Employability Booster",
      description: "2023-2027 initiative by Young Africa International, funded by Mastercard Foundation",
      agency: "Young Africa International",
      link: "https://youngafrica.org/youth-employability-booster/",
      icon: <Users className="w-6 h-6" />
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-black text-white' 
        : 'bg-amber-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-black/90 border-gray-800 backdrop-blur-sm' 
          : 'bg-amber-50/90 border-amber-200 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Nigerian Tech Opportunities
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Coding Bootcamps</DropdownMenuItem>
                  <DropdownMenuItem>Online Platforms</DropdownMenuItem>
                  <DropdownMenuItem>Government Programs</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4" />
                    <span>Funding</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Scholarships</DropdownMenuItem>
                  <DropdownMenuItem>Startup Funding</DropdownMenuItem>
                  <DropdownMenuItem>Grants</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <Rocket className="w-4 h-4" />
                    <span>Startups</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Incubators</DropdownMenuItem>
                  <DropdownMenuItem>Accelerators</DropdownMenuItem>
                  <DropdownMenuItem>Co-working Spaces</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span className="hidden lg:inline">
                  {isDarkMode ? 'Light' : 'Dark'}
                </span>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="sm"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                variant="ghost"
                size="sm"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
              <nav className="flex flex-col space-y-2 mt-4">
                <Button variant="ghost" className="justify-start">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Education
                </Button>
                <Button variant="ghost" className="justify-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Funding
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Rocket className="w-4 h-4 mr-2" />
                  Startups
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-20 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
          : 'bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Unlock Your Tech Future in Nigeria
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Discover comprehensive opportunities, funding, education, and support systems 
              designed to empower the next generation of Nigerian tech innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="education" className="w-full">
          <TabsList className={`grid w-full grid-cols-4 mb-8 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <TabsTrigger value="education" className="flex items-center space-x-2">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="funding" className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span className="hidden sm:inline">Funding</span>
            </TabsTrigger>
            <TabsTrigger value="incubators" className="flex items-center space-x-2">
              <Building className="w-4 h-4" />
              <span className="hidden sm:inline">Incubators</span>
            </TabsTrigger>
            <TabsTrigger value="government" className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Government</span>
            </TabsTrigger>
          </TabsList>

          {/* Education Tab */}
          <TabsContent value="education">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
                Educational Programs &amp; Coding Bootcamps
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Transform your career with world-class tech education programs designed for Nigerian youth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationalPrograms.map((program, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${
                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                          {program.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{program.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {program.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={`mb-4 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {program.description}
                    </CardDescription>
                    <Button asChild variant="outline" className="w-full">
                      <a href={program.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Funding Tab */}
          <TabsContent value="funding">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <DollarSign className="w-8 h-8 mr-3 text-green-600" />
                Funding &amp; Scholarships
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Access financial support to kickstart your tech career and entrepreneurial journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fundingOpportunities.map((funding, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${
                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white">
                        {funding.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{funding.name}</CardTitle>
                        <Badge variant="secondary" className="mt-1 bg-green-100 text-green-800">
                          {funding.amount}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={`mb-4 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {funding.description}
                    </CardDescription>
                    <Button asChild className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                      <a href={funding.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        Apply Now
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Incubators Tab */}
          <TabsContent value="incubators">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <Building className="w-8 h-8 mr-3 text-purple-600" />
                Startup Incubators &amp; Accelerators
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Join Nigeria&apos;s thriving startup ecosystem with world-class incubation programs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {incubators.map((incubator, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${
                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">
                        {incubator.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{incubator.name}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {incubator.location}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={`mb-4 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {incubator.description}
                    </CardDescription>
                    <Button asChild variant="outline" className="w-full">
                      <a href={incubator.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        Visit Program
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Government Tab */}
          <TabsContent value="government">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <Target className="w-8 h-8 mr-3 text-red-600" />
                Government Initiatives
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Leverage government-backed programs designed to boost Nigeria's digital economy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governmentInitiatives.map((initiative, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${
                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-white">
                        {initiative.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{initiative.name}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {initiative.agency}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={`mb-4 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {initiative.description}
                    </CardDescription>
                    <Button asChild variant="outline" className="w-full">
                      <a href={initiative.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action Section */}
        <section className={`mt-16 py-12 rounded-2xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-gray-800 to-gray-900' 
            : 'bg-gradient-to-r from-blue-50 to-purple-50'
        }`}>
          <div className="text-center px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Nigeria's tech ecosystem is rapidly growing with strong government support, 
              international partnerships, and a vibrant startup community. The time to act is now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Globe className="w-5 h-5 mr-2" />
                Explore Remote Opportunities
              </Button>
              <Button size="lg" variant="outline">
                <Users className="w-5 h-5 mr-2" />
                Join Tech Communities
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`mt-16 py-8 border-t ${
        isDarkMode 
          ? 'bg-gray-900 border-gray-800' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Nigerian Tech Opportunities. Empowering the next generation of African tech innovators.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
