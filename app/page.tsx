import { Book, Code, FileText, HomeIcon, Mail, MapPin, Star, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-black z-10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-xl font-bold mb-4 sm:mb-0">Welcome</h1>
          <nav>
            <ul className="flex space-x-2 sm:space-x-4">
              <li><Button variant="ghost" size="sm" asChild><a href="#overview" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800">Overview</a></Button></li>
              <li><Button variant="ghost" size="sm" asChild><a href="#repositories" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800">Repos</a></Button></li>
              <li><Button variant="ghost" size="sm" asChild><a href="#projects" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800">Projects</a></Button></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 lg:pr-8 mb-8 lg:mb-0">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <Avatar className="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-4">
                <AvatarImage src="/IMG_20241101_105155.jpg" alt="Gavin Ed" />
                <AvatarFallback>Gavin</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold text-center mb-2 text-white">Gavin Ed</h2>
              <p className="text-gray-400 text-center mb-4">Full Stack Developer</p>
              <div className="flex items-center justify-center text-gray-400 mb-2">
                <MapPin size={16} className="mr-2" />
                <span>Battambang, Cambodia</span>
              </div>
              <div className="flex items-center justify-center text-gray-400 mb-4">
                <Mail size={16} className="mr-2" />
                <a href="mailto:john@example.com" className="text-blue-400 hover:underline">gavined@yandex.com</a>
              </div>
              <div className="border-t border-gray-800 pt-4 mb-4">
                <h3 className="font-bold mb-2 text-center text-white">Organizations</h3>
                <div className="flex justify-center space-x-2">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Organization 1" />
                    <AvatarFallback>O1</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Organization 2" />
                    <AvatarFallback>O2</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Main content */}
        <main className="w-full lg:w-3/4">
          <section id="overview" className="mb-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Book className="mr-2" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  JavaScript, React, Node.js, and cloud technologies.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg text-white">
                        <Code className="mr-2" />
                        Top Skills
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-gray-300">
                        <li>JavaScript (ES6+)</li>
                        <li>React & Next.js</li>
                        <li>Node.js & Express</li>
                        <li>MongoDB & PostgreSQL</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg text-white">
                        <Users className="mr-2" />
                        Collaboration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-gray-300">
                        <li>Git & GitHub</li>
                        <li>Agile methodologies</li>
                        <li>Code reviews</li>
                        <li>Pair programming</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="repositories" className="mb-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <FileText className="mr-2" />
                  Popular Repositories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'awesome-project', description: 'A full-stack e-commerce platform built with Next.js and Node.js', stars: 45 },
                    { name: 'task-master', description: 'Efficient task management application with real-time updates', stars: 32 },
                    { name: 'weather-dashboard', description: 'Interactive weather dashboard using multiple APIs', stars: 28 },
                    { name: 'portfolio-website', description: 'Personal portfolio website built with Next.js and Tailwind CSS', stars: 15 }
                  ].map((repo) => (
                    <Card key={repo.name} className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-400 hover:underline">{repo.name}</CardTitle>
                        <CardDescription className="text-gray-400">{repo.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-gray-400">
                          <Star className="mr-1" size={16} />
                          <span>{repo.stars}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="projects" className="mb-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <HomeIcon className="mr-2" />
                  Featured Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'E-commerce Platform', description: 'A scalable online store with advanced features' },
                    { name: 'Task Management App', description: 'Boost productivity with this intuitive task manager' }
                  ].map((project) => (
                    <Card key={project.name} className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-lg text-white">{project.name}</CardTitle>
                        <CardDescription className="text-gray-400">{project.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-8 py-6 text-center text-gray-400">
        <p>&copy; 2023 Gavin. All rights reserved.</p>
      </footer>
    </div>
  )
}