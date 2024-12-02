import { Book, Code, FileText, HomeIcon, Mail, MapPin, Star, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-xl font-bold mb-4 sm:mb-0">Welcome</h1>
          <nav>
            <ul className="flex space-x-2 sm:space-x-4">
              <li><Button variant="ghost" size="sm" asChild><a href="#overview">Overview</a></Button></li>
              <li><Button variant="ghost" size="sm" asChild><a href="#repositories">Repos</a></Button></li>
              <li><Button variant="ghost" size="sm" asChild><a href="#projects">Projects</a></Button></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 lg:pr-8 mb-8 lg:mb-0">
          <Card>
            <CardContent className="pt-6">
              <Avatar className="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-4">
                <AvatarImage src="/placeholder.svg?height=192&width=192" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold text-center mb-2">Gavin</h2>
              <p className="text-muted-foreground text-center mb-4">Full Stack Developer</p>
              <div className="flex items-center justify-center text-muted-foreground mb-2">
                <MapPin size={16} className="mr-2" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center justify-center text-muted-foreground mb-4">
                <Mail size={16} className="mr-2" />
                <a href="mailto:john@example.com" className="text-primary hover:underline">john@example.com</a>
              </div>
              <div className="border-t pt-4 mb-4">
                <h3 className="font-bold mb-2 text-center">Organizations</h3>
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Passionate full-stack developer with 5+ years of experience in building scalable web applications.
                  Proficient in JavaScript, React, Node.js, and cloud technologies.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Code className="mr-2" />
                        Top Skills
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside">
                        <li>JavaScript (ES6+)</li>
                        <li>React & Next.js</li>
                        <li>Node.js & Express</li>
                        <li>MongoDB & PostgreSQL</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Users className="mr-2" />
                        Collaboration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside">
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
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
                    <Card key={repo.name}>
                      <CardHeader>
                        <CardTitle className="text-lg text-primary hover:underline">{repo.name}</CardTitle>
                        <CardDescription>{repo.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-muted-foreground">
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
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
                    <Card key={project.name}>
                      <CardHeader>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
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
      <footer className="border-t mt-8 py-6 text-center text-muted-foreground">
        <p>&copy; 2023 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}