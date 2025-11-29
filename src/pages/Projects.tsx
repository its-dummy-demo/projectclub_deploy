import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import dataScienceBg from "@/assets/data-science-bg.jpg";
import iotBg from "@/assets/iot-bg.jpg";
import machineLearningBg from "@/assets/machine-learning-bg.jpg";
import webApplicationBg from "@/assets/web-application-bg.jpg";
import mobileAppBg from "@/assets/mobile-app-bg.jpg";

const Projects = () => {
  const { domain } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine if this is a filtered view or all projects
  const isFiltered = domain && domain !== "all";
  const currentDomain = domain || "all";

  const projectData = {
    "data-science": {
      title: "Data Science Projects",
      beginner: [
        {
          title: "Sales Data Analysis Dashboard",
          description: "Create interactive visualizations for sales data using Python and Plotly",
          technologies: ["Python", "Pandas", "Plotly", "Jupyter"],
          rating: 4,
          difficulty: "Beginner"
        },
        {
          title: "Customer Segmentation Analysis",
          description: "Implement K-means clustering for customer segmentation",
          technologies: ["Python", "Scikit-learn", "Matplotlib"],
          rating: 3,
          difficulty: "Beginner"
        },
        {
          title: "Weather Data Visualization",
          description: "Analyze and visualize weather patterns using historical data",
          technologies: ["Python", "Seaborn", "API Integration"],
          rating: 4,
          difficulty: "Beginner"
        }
      ],
      advanced: [
        {
          title: "Real-time Stock Market Predictor",
          description: "Build ML models for stock price prediction with live data feeds",
          technologies: ["Python", "TensorFlow", "REST APIs", "Docker"],
          rating: 5,
          difficulty: "Advanced"
        },
        {
          title: "NLP Sentiment Analysis Platform",
          description: "Create a platform for analyzing sentiment in social media data",
          technologies: ["Python", "NLTK", "MongoDB", "Flask"],
          rating: 4,
          difficulty: "Advanced"
        }
      ]
    },
    "iot": {
      title: "IoT Projects",
      beginner: [
        {
          title: "Smart Home Temperature Monitor",
          description: "Monitor room temperature using Arduino and send data to mobile app",
          technologies: ["Arduino", "ESP8266", "Android", "Firebase"],
          rating: 4,
          difficulty: "Beginner"
        },
        {
          title: "Automatic Plant Watering System",
          description: "Create an automated system that waters plants based on soil moisture",
          technologies: ["Arduino", "Sensors", "Relay Module"],
          rating: 3,
          difficulty: "Beginner"
        },
        {
          title: "Smart Parking System",
          description: "Develop a system to detect available parking spaces",
          technologies: ["Raspberry Pi", "Ultrasonic Sensors", "Web Dashboard"],
          rating: 4,
          difficulty: "Beginner"
        }
      ],
      advanced: [
        {
          title: "Industrial IoT Monitoring System",
          description: "Complete IoT solution for monitoring industrial equipment with predictive maintenance",
          technologies: ["Raspberry Pi", "LoRaWAN", "Edge Computing", "Cloud Analytics"],
          rating: 5,
          difficulty: "Advanced"
        },
        {
          title: "Smart City Traffic Management",
          description: "AI-powered traffic management system using IoT sensors and cameras",
          technologies: ["Computer Vision", "Edge AI", "5G", "Real-time Analytics"],
          rating: 5,
          difficulty: "Advanced"
        }
      ]
    },
    "machine-learning": {
      title: "Machine Learning Projects",
      beginner: [
        {
          title: "Iris Flower Classification",
          description: "Classify iris flowers using basic ML algorithms",
          technologies: ["Python", "Scikit-learn", "Pandas"],
          rating: 3,
          difficulty: "Beginner"
        },
        {
          title: "House Price Prediction",
          description: "Predict house prices using linear regression",
          technologies: ["Python", "Linear Regression", "Feature Engineering"],
          rating: 4,
          difficulty: "Beginner"
        },
        {
          title: "Email Spam Classifier",
          description: "Build a classifier to detect spam emails",
          technologies: ["Python", "NLP", "Naive Bayes"],
          rating: 4,
          difficulty: "Beginner"
        }
      ],
      advanced: [
        {
          title: "Computer Vision Object Detection",
          description: "Real-time object detection system using deep learning",
          technologies: ["TensorFlow", "YOLO", "OpenCV", "GPU Computing"],
          rating: 5,
          difficulty: "Advanced"
        },
        {
          title: "Autonomous Vehicle Navigation",
          description: "ML model for autonomous vehicle path planning and obstacle avoidance",
          technologies: ["Deep Learning", "Reinforcement Learning", "ROS", "Simulation"],
          rating: 5,
          difficulty: "Advanced"
        }
      ]
    },
    "web-application": {
      title: "Web Application Projects",
      beginner: [
        {
          title: "Personal Portfolio Website",
          description: "Create a responsive portfolio website with modern design",
          technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
          rating: 3,
          difficulty: "Beginner"
        },
        {
          title: "Todo List Application",
          description: "Build a todo list app with CRUD operations",
          technologies: ["React", "Node.js", "MongoDB"],
          rating: 4,
          difficulty: "Beginner"
        },
        {
          title: "Weather App",
          description: "Weather application using external APIs",
          technologies: ["JavaScript", "REST API", "CSS Grid"],
          rating: 3,
          difficulty: "Beginner"
        }
      ],
      advanced: [
        {
          title: "E-commerce Platform",
          description: "Full-stack e-commerce solution with payment integration",
          technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
          rating: 5,
          difficulty: "Advanced"
        },
        {
          title: "Social Media Analytics Dashboard",
          description: "Real-time analytics dashboard for social media data",
          technologies: ["React", "D3.js", "WebSocket", "Microservices"],
          rating: 4,
          difficulty: "Advanced"
        }
      ]
    },
    "mobile-app": {
      title: "Mobile App Projects",
      beginner: [
        {
          title: "Expense Tracker App",
          description: "Track daily expenses with categorization and reports",
          technologies: ["React Native", "SQLite", "Charts"],
          rating: 4,
          difficulty: "Beginner"
        },
        {
          title: "Recipe Finder App",
          description: "Find recipes based on available ingredients",
          technologies: ["Flutter", "REST API", "Local Storage"],
          rating: 3,
          difficulty: "Beginner"
        },
        {
          title: "Fitness Tracker",
          description: "Track workouts and fitness goals",
          technologies: ["React Native", "Health Kit", "SQLite"],
          rating: 4,
          difficulty: "Beginner"
        }
      ],
      advanced: [
        {
          title: "Augmented Reality Shopping App",
          description: "AR-enabled shopping experience with 3D product visualization",
          technologies: ["Unity", "ARCore", "ARKit", "Cloud Storage"],
          rating: 5,
          difficulty: "Advanced"
        },
        {
          title: "Real-time Collaboration App",
          description: "Multi-user collaboration platform with real-time sync",
          technologies: ["React Native", "WebRTC", "Socket.io", "Offline Support"],
          rating: 4,
          difficulty: "Advanced"
        }
      ]
    }
  };

  const getProjectsToShow = () => {
    if (currentDomain === "all") {
      // Show all projects from all domains
      const allProjects = [];
      Object.entries(projectData).forEach(([key, domain]) => {
        allProjects.push({
          domain: domain.title,
          projects: [...domain.beginner, ...domain.advanced]
        });
      });
      return allProjects;
    } else {
      // Show projects from specific domain
      const domainData = projectData[currentDomain];
      if (domainData) {
        return [{
          domain: domainData.title,
          projects: [...domainData.beginner, ...domainData.advanced]
        }];
      }
    }
    return [];
  };

  const projects = getProjectsToShow();

  // Helper function to generate project ID from title
  const generateProjectId = (title: string): string => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // Navigation function to project details
  const navigateToProject = (project: any) => {
    const projectId = generateProjectId(project.title);
    // Find the actual domain key for this project
    let actualDomain = "";
    Object.entries(projectData).forEach(([key, domain]) => {
      const allProjectsInDomain = [...domain.beginner, ...domain.advanced];
      if (allProjectsInDomain.some(p => p.title === project.title)) {
        actualDomain = key;
      }
    });
    navigate(`/projects/${actualDomain}/${projectId}`);
  };

  // Helper function to get background image for domain
  const getDomainBackground = (domain: string) => {
    const backgrounds = {
      "data-science": dataScienceBg,
      "iot": iotBg,
      "machine-learning": machineLearningBg,
      "web-application": webApplicationBg,
      "mobile-app": mobileAppBg
    };
    return backgrounds[domain] || dataScienceBg;
  };

  // Helper function to render star rating
  const renderStarRating = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? "fill-blue-500 text-blue-500" 
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-1">
          {rating}/5
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {isFiltered ? projectData[currentDomain]?.title : "All Projects"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isFiltered 
              ? `Explore ${projectData[currentDomain]?.title.toLowerCase()} from beginner to advanced levels`
              : "Explore all our project domains and find the perfect project for your skill level"
            }
          </p>
        </div>

        {projects.map((domainGroup, domainIndex) => (
          <div key={domainIndex} className="mb-12">
            {!isFiltered && (
              <h2 className="text-2xl font-bold mb-6 text-primary">{domainGroup.domain}</h2>
            )}
            
            {/* Beginner Projects */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Badge variant="secondary" className="mr-3">Beginner Level</Badge>
                Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {domainGroup.projects
                  .filter(project => project.difficulty === "Beginner")
                  .map((project, index) => (
                    <Card key={index} className="border-none shadow-card hover:shadow-lg transition-shadow overflow-hidden">
                      <div 
                        className="h-32 bg-cover bg-center relative"
                        style={{ 
                          backgroundImage: `url(${getDomainBackground(currentDomain)})` 
                        }}
                      >
                        <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium mb-1">Technologies:</p>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm font-medium mb-1">Rating:</p>
                              {renderStarRating(project.rating)}
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              {project.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <Button 
                          className="w-full mt-4" 
                          variant="outline"
                          onClick={() => navigateToProject(project)}
                        >
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))
                }
              </div>
            </div>

            {/* Advanced Projects */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Badge variant="default" className="mr-3">Advanced Level</Badge>
                Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {domainGroup.projects
                  .filter(project => project.difficulty === "Advanced")
                  .map((project, index) => (
                    <Card key={index} className="border-none shadow-card hover:shadow-lg transition-shadow overflow-hidden">
                      <div 
                        className="h-32 bg-cover bg-center relative"
                        style={{ 
                          backgroundImage: `url(${getDomainBackground(currentDomain)})` 
                        }}
                      >
                        <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium mb-1">Technologies:</p>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm font-medium mb-1">Rating:</p>
                              {renderStarRating(project.rating)}
                            </div>
                            <Badge className="bg-red-100 text-red-800">
                              {project.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <Button 
                          className="w-full mt-4" 
                          variant="outline"
                          onClick={() => navigateToProject(project)}
                        >
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))
                }
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;