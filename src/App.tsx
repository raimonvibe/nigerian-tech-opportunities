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
  X,
  Info
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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("education")

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue)
    setIsMobileMenuOpen(false)
  }

  const educationalPrograms = [
    {
      name: "Andela Nigeria",
      description: "One of the most prestigious tech training programs in Africa",
      category: "Premium Bootcamp",
      link: "https://andela.com/",
      icon: <Award className="w-6 h-6" />,
      infoContent: "Visit Andela to apply for their intensive software development program. You can browse available courses, check eligibility requirements, submit your application, and access free preparatory materials. They offer full-time bootcamps with job placement assistance."
    },
    {
      name: "Decagon Institute",
      description: "Intensive software development bootcamp with job placement",
      category: "Coding Bootcamp",
      link: "https://decagon.institute/",
      icon: <Code className="w-6 h-6" />,
      infoContent: "Explore Decagon's coding bootcamp programs where you can apply for full-stack development training. Check their curriculum, read success stories, apply for scholarships, and learn about their job guarantee program for graduates."
    },
    {
      name: "HNG Internship",
      description: "Remote internship program for developers with real projects",
      category: "Internship",
      link: "https://hng.tech/",
      icon: <Users className="w-6 h-6" />,
      infoContent: "Join HNG's remote internship program by registering for their next cohort. You can participate in real projects, collaborate with other developers, build your portfolio, and potentially get hired by partner companies."
    },
    {
      name: "AltSchool",
      description: "Modern tech education platform with flexible learning",
      category: "Online Platform",
      link: "https://altschoolafrica.com/",
      icon: <BookOpen className="w-6 h-6" />,
      infoContent: "Explore AltSchool's flexible learning programs where you can enroll in various tech courses, access live classes and recorded sessions, join study groups, and get mentorship from industry professionals."
    },
    {
      name: "Digital Skills Nigeria (DSN)",
      description: "Microsoft-led initiative supporting ages 16-35 with tech training",
      category: "Government Program",
      link: "https://www.digitalskillsnigeria.org/",
      icon: <GraduationCap className="w-6 h-6" />,
      infoContent: "Access free Microsoft-certified training programs. You can register for courses in cloud computing, data analysis, and digital marketing, take certification exams, and access job placement opportunities through government partnerships."
    },
    {
      name: "Tech4Dev",
      description: "Digital skills and entrepreneurship training across Africa",
      category: "NGO Program",
      link: "https://tech4dev.com/",
      icon: <Target className="w-6 h-6" />,
      infoContent: "Apply for Tech4Dev's programs focused on women and youth empowerment. You can join coding bootcamps, entrepreneurship training, access mentorship programs, and apply for grants to start your tech business."
    }
  ]

  const fundingOpportunities = [
    {
      name: "Tony Elumelu Foundation",
      description: "Entrepreneurship funding and mentorship for African startups",
      amount: "$5,000 - $25,000",
      link: "https://www.tonyelumelufoundation.org/",
      icon: <DollarSign className="w-6 h-6" />,
      infoContent: "Apply for the Tony Elumelu Entrepreneurship Programme where you can submit your business plan, access the online application portal, participate in the 12-week training program, and receive $5,000 seed funding plus mentorship."
    },
    {
      name: "ALX Africa Scholarships",
      description: "Access to world-class tech and professional training programs",
      amount: "Full Scholarships",
      link: "https://www.alxafrica.com/",
      icon: <Award className="w-6 h-6" />,
      infoContent: "Browse ALX's scholarship opportunities for software engineering, data science, and leadership programs. You can apply for full scholarships, access their learning platform, join peer learning groups, and get career support."
    },
    {
      name: "RAIN 2025 Scholarship",
      description: "Full scholarships for robotics and AI expertise development",
      amount: "Full Funding",
      link: "https://www.globalsouthopportunities.com/",
      icon: <Rocket className="w-6 h-6" />,
      infoContent: "Find and apply for RAIN 2025 scholarships focused on robotics and AI. You can search for available programs, check eligibility criteria, submit applications, and access preparatory resources for advanced tech education."
    },
    {
      name: "Greenhouse Capital",
      description: "Startup funding for early-stage tech companies",
      amount: "$5,000 - $25,000",
      link: "https://greenhouse.capital/",
      icon: <Building className="w-6 h-6" />,
      infoContent: "Pitch your startup to Greenhouse Capital by submitting your business plan, accessing their application process, preparing for investor meetings, and potentially securing seed funding for your tech startup."
    }
  ]

  const incubators = [
    {
      name: "Co-Creation Hub (CcHUB)",
      description: "Nigeria's leading tech innovation center and startup incubator",
      location: "Lagos, Abuja",
      link: "https://cchubnigeria.com/",
      icon: <Building className="w-6 h-6" />,
      infoContent: "Join CcHUB's innovation ecosystem where you can apply for incubation programs, access co-working spaces, attend tech events and workshops, network with other entrepreneurs, and get mentorship from industry experts."
    },
    {
      name: "Google Launchpad Accelerator",
      description: "Google's startup acceleration program for African entrepreneurs",
      location: "Lagos",
      link: "https://developers.google.com/community/launchpad",
      icon: <Rocket className="w-6 h-6" />,
      infoContent: "Apply for Google's accelerator program where you can access Google's resources, get mentorship from Google engineers, participate in intensive training sessions, and potentially receive funding and global exposure."
    },
    {
      name: "ARM Labs Lagos",
      description: "International accelerator program with global network",
      location: "Lagos",
      link: "https://www.arm.com.ng/armlabs/",
      icon: <Globe className="w-6 h-6" />,
      infoContent: "Join ARM Labs' accelerator program to access international markets, get mentorship from global experts, participate in demo days, connect with international investors, and scale your startup globally."
    },
    {
      name: "Wennovation Hub",
      description: "Innovation hub focusing on technology and entrepreneurship",
      location: "Abuja",
      link: "https://ng.linkedin.com/company/wennovationhub",
      icon: <Users className="w-6 h-6" />,
      infoContent: "Connect with Wennovation Hub to access their innovation programs, join entrepreneurship training, participate in hackathons and competitions, access co-working facilities, and network with the Abuja tech community."
    }
  ]

  const governmentInitiatives = [
    {
      name: "20 Million Youth Digital Skills Program",
      description: "Ambitious government plan to train 20 million youths by 2030",
      agency: "Federal Government",
      link: "https://nitda.gov.ng/",
      icon: <Target className="w-6 h-6" />,
      infoContent: "Register for government-sponsored digital skills training through NITDA. You can enroll in free courses, access certification programs, find job placement opportunities, and participate in the national digital transformation initiative."
    },
    {
      name: "NITDA Partnerships",
      description: "Various collaborations with international tech companies",
      agency: "NITDA",
      link: "https://nitda.gov.ng/",
      icon: <Building className="w-6 h-6" />,
      infoContent: "Explore NITDA's partnerships with global tech companies where you can access training programs, apply for internships with international firms, get certified in emerging technologies, and benefit from public-private collaborations."
    },
    {
      name: "Youth Employability Booster",
      description: "2023-2027 initiative by Young Africa International, funded by Mastercard Foundation",
      agency: "Young Africa International",
      link: "https://youngafrica.org/youth-employability-booster/",
      icon: <Users className="w-6 h-6" />,
      infoContent: "Apply for the Youth Employability Booster program where you can access skills training, get job placement support, receive entrepreneurship mentoring, and benefit from Mastercard Foundation's investment in African youth development."
    }
  ]

  const InfoModal = ({ title, content, isDarkMode }: { title: string; content: string; isDarkMode: boolean }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
          <Info className={`w-4 h-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
        </Button>
      </DialogTrigger>
      <DialogContent className={`max-w-md ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <DialogHeader>
          <DialogTitle className={isDarkMode ? 'text-white' : 'text-gray-900'}>
            About {title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
          {content}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )

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
                  <DropdownMenuItem onClick={() => handleTabChange("education")}>Coding Bootcamps</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleTabChange("education")}>Online Platforms</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleTabChange("education")}>Government Programs</DropdownMenuItem>
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
                  <DropdownMenuItem onClick={() => handleTabChange("funding")}>Scholarships</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleTabChange("funding")}>Startup Funding</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleTabChange("funding")}>Grants</DropdownMenuItem>
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
                  <DropdownMenuItem onClick={() => handleTabChange("incubators")}>Incubators</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleTabChange("incubators")}>Accelerators</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleTabChange("incubators")}>Co-working Spaces</DropdownMenuItem>
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
                <Button variant="ghost" className="justify-start" onClick={() => handleTabChange("education")}>
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Education
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => handleTabChange("funding")}>
                  <DollarSign className="w-4 h-4 mr-2" />
                  Funding
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => handleTabChange("incubators")}>
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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
                    <div className="flex gap-2">
                      <Button asChild variant="outline" className="flex-1">
                        <a href={program.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          Learn More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                      <InfoModal title={program.name} content={program.infoContent} isDarkMode={isDarkMode} />
                    </div>
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
                    <div className="flex gap-2">
                      <Button asChild className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                        <a href={funding.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          Apply Now
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                      <InfoModal title={funding.name} content={funding.infoContent} isDarkMode={isDarkMode} />
                    </div>
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
                    <div className="flex gap-2">
                      <Button asChild variant="outline" className="flex-1">
                        <a href={incubator.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          Visit Program
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                      <InfoModal title={incubator.name} content={incubator.infoContent} isDarkMode={isDarkMode} />
                    </div>
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
                    <div className="flex gap-2">
                      <Button asChild variant="outline" className="flex-1">
                        <a href={initiative.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          Learn More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                      <InfoModal title={initiative.name} content={initiative.infoContent} isDarkMode={isDarkMode} />
                    </div>
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
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <a href="https://wellfound.com/jobs" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Explore Remote Opportunities
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://chat.whatsapp.com/HESiDNIIjwrKWMnvGnzp3y?mode=r_c" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Join Tech Communities
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
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
