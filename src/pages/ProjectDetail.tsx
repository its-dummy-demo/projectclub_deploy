import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Target, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { domain, projectId } = useParams();
  const navigate = useNavigate();

  const projectData = {
    "data-science": {
      title: "Data Science Projects",
      beginner: [
        {
          id: "sales-data-analysis-dashboard",
          title: "Sales Data Analysis Dashboard",
          description: "Create interactive visualizations for sales data using Python and Plotly",
          technologies: ["Python", "Pandas", "Plotly", "Jupyter"],
          duration: "2-3 weeks",
          difficulty: "Beginner",
          introduction: "Data visualization is a crucial skill in today's data-driven world. This project will teach you how to transform raw sales data into meaningful insights through interactive dashboards. You'll learn to clean data, perform analysis, and create compelling visualizations that tell a story.",
          advantages: [
            "Learn essential data analysis skills",
            "Master popular Python libraries",
            "Create professional-looking dashboards",
            "Gain experience with real-world data scenarios",
            "Develop storytelling through data visualization"
          ],
          whyItMatters: "Data Science projects are essential in today's digital economy. Companies across all industries rely on data scientists to extract insights from their data, make informed decisions, and drive business growth. This project provides hands-on experience with the complete data analysis workflow.",
          conclusion: "By completing this project, you'll have built a comprehensive sales dashboard that showcases your ability to work with data, create visualizations, and present insights. This is a perfect portfolio piece that demonstrates practical data science skills to potential employers."
        },
        {
          id: "customer-segmentation-analysis",
          title: "Customer Segmentation Analysis",
          description: "Implement K-means clustering for customer segmentation",
          technologies: ["Python", "Scikit-learn", "Matplotlib"],
          duration: "3-4 weeks",
          difficulty: "Beginner",
          introduction: "Understanding your customers is key to business success. This project introduces you to unsupervised machine learning through customer segmentation. You'll learn how to group customers based on their behavior and characteristics using clustering algorithms.",
          advantages: [
            "Introduction to machine learning concepts",
            "Learn clustering algorithms",
            "Understand customer behavior analysis",
            "Practice data preprocessing techniques",
            "Create actionable business insights"
          ],
          whyItMatters: "Customer segmentation is a fundamental technique in marketing and business strategy. By grouping customers with similar characteristics, businesses can tailor their products, services, and marketing campaigns to specific segments, leading to improved customer satisfaction and increased revenue.",
          conclusion: "This project will give you practical experience with machine learning algorithms and their business applications. You'll understand how data science can directly impact business decisions and customer relationships."
        },
        {
          id: "weather-data-visualization",
          title: "Weather Data Visualization",
          description: "Analyze and visualize weather patterns using historical data",
          technologies: ["Python", "Seaborn", "API Integration"],
          duration: "2 weeks",
          difficulty: "Beginner",
          introduction: "Weather data provides an excellent introduction to time series analysis and API integration. This project will teach you how to collect data from external sources, clean it, and create meaningful visualizations to identify patterns and trends.",
          advantages: [
            "Learn API integration skills",
            "Master time series visualization",
            "Understand data collection processes",
            "Practice statistical analysis",
            "Create compelling visual stories"
          ],
          whyItMatters: "Working with external data sources and APIs is a common requirement in data science. This project teaches you how to collect, process, and analyze real-world data while creating visualizations that can communicate findings to both technical and non-technical audiences.",
          conclusion: "You'll complete this project with a solid understanding of data collection, processing, and visualization. The skills learned here are transferable to many other data science projects and real-world applications."
        }
      ],
      advanced: [
        {
          id: "real-time-stock-market-predictor",
          title: "Real-time Stock Market Predictor",
          description: "Build ML models for stock price prediction with live data feeds",
          technologies: ["Python", "TensorFlow", "REST APIs", "Docker"],
          duration: "8-10 weeks",
          difficulty: "Advanced",
          introduction: "Stock market prediction combines multiple advanced concepts including deep learning, real-time data processing, and financial modeling. This project will challenge you to build a complete system that can process live market data and make predictions.",
          advantages: [
            "Master deep learning techniques",
            "Learn real-time data processing",
            "Understand financial markets",
            "Practice deployment with Docker",
            "Build scalable ML systems"
          ],
          whyItMatters: "Financial technology (FinTech) is one of the most lucrative applications of data science and machine learning. This project demonstrates advanced skills in building production-ready ML systems that can handle real-time data and make critical decisions.",
          conclusion: "This advanced project showcases your ability to build complex, real-time ML systems. It's an excellent portfolio piece that demonstrates mastery of multiple advanced technologies and their integration."
        },
        {
          id: "nlp-sentiment-analysis-platform",
          title: "NLP Sentiment Analysis Platform",
          description: "Create a platform for analyzing sentiment in social media data",
          technologies: ["Python", "NLTK", "MongoDB", "Flask"],
          duration: "6-8 weeks",
          difficulty: "Advanced",
          introduction: "Natural Language Processing (NLP) is revolutionizing how we understand and analyze text data. This project builds a complete platform for collecting, processing, and analyzing sentiment in social media posts, providing valuable insights for businesses and researchers.",
          advantages: [
            "Master NLP techniques and libraries",
            "Learn text preprocessing and analysis",
            "Build web applications with Flask",
            "Work with NoSQL databases",
            "Create scalable data processing pipelines"
          ],
          whyItMatters: "With billions of text messages, social media posts, and reviews generated daily, the ability to automatically analyze sentiment and extract insights from text data is incredibly valuable. This skill is in high demand across industries from marketing to finance.",
          conclusion: "Upon completion, you'll have built a sophisticated NLP platform that can process and analyze text data at scale. This project demonstrates advanced skills in multiple areas of data science and software development."
        }
      ]
    },
    "machine-learning": {
      title: "Machine Learning Projects",
      beginner: [
        {
          id: "iris-flower-classification",
          title: "Iris Flower Classification",
          description: "Classify iris flowers using basic ML algorithms",
          technologies: ["Python", "Scikit-learn", "Pandas"],
          duration: "1-2 weeks",
          difficulty: "Beginner",
          introduction: "The Iris dataset is the perfect introduction to machine learning classification. This classic project teaches fundamental ML concepts including data preprocessing, model training, evaluation, and prediction using one of the most well-known datasets in machine learning.",
          advantages: [
            "Learn fundamental ML concepts",
            "Understand classification algorithms",
            "Practice model evaluation techniques",
            "Master essential Python libraries",
            "Build your first ML model"
          ],
          whyItMatters: "Machine Learning is transforming every industry by enabling computers to learn from data and make predictions. Starting with classification problems like this builds the foundation for more complex ML applications in healthcare, finance, technology, and beyond.",
          conclusion: "This foundational project introduces you to the complete machine learning workflow. You'll gain confidence in building ML models and understanding how they work, setting the stage for more advanced projects."
        },
        {
          id: "house-price-prediction",
          title: "House Price Prediction",
          description: "Predict house prices using linear regression",
          technologies: ["Python", "Linear Regression", "Feature Engineering"],
          duration: "2-3 weeks",
          difficulty: "Beginner",
          introduction: "Predicting house prices is a practical application of regression analysis that has real-world value. This project teaches you how to work with numeric data, perform feature engineering, and build predictive models that can estimate property values.",
          advantages: [
            "Learn regression analysis techniques",
            "Understand feature engineering",
            "Work with real estate data",
            "Practice data cleaning and preparation",
            "Build practical prediction models"
          ],
          whyItMatters: "Regression analysis is one of the most widely used techniques in data science and machine learning. From predicting sales to estimating costs, the skills learned in this project apply to countless business scenarios where prediction is valuable.",
          conclusion: "You'll complete this project with a solid understanding of regression techniques and their practical applications. This is excellent preparation for more advanced ML projects and real-world data science challenges."
        },
        {
          id: "email-spam-classifier",
          title: "Email Spam Classifier",
          description: "Build a classifier to detect spam emails",
          technologies: ["Python", "NLP", "Naive Bayes"],
          duration: "3 weeks",
          difficulty: "Beginner",
          introduction: "Spam detection is a classic application of machine learning that combines text processing with classification. This project introduces you to Natural Language Processing (NLP) while building a practical system that can automatically identify unwanted emails.",
          advantages: [
            "Introduction to NLP concepts",
            "Learn text classification techniques",
            "Understand probabilistic models",
            "Practice feature extraction from text",
            "Build a practical security application"
          ],
          whyItMatters: "Text classification is fundamental to many modern applications including content moderation, document organization, and automated customer service. The techniques learned here apply to analyzing any type of text data.",
          conclusion: "This project bridges traditional machine learning with text analysis, giving you valuable skills in both areas. You'll understand how ML can be applied to solve real security and productivity challenges."
        }
      ],
      advanced: [
        {
          id: "computer-vision-object-detection",
          title: "Computer Vision Object Detection",
          description: "Real-time object detection system using deep learning",
          technologies: ["TensorFlow", "YOLO", "OpenCV", "GPU Computing"],
          duration: "8-10 weeks",
          difficulty: "Advanced",
          introduction: "Computer vision is revolutionizing industries from autonomous vehicles to medical imaging. This advanced project teaches you to build real-time object detection systems using state-of-the-art deep learning models and computer vision techniques.",
          advantages: [
            "Master deep learning frameworks",
            "Learn computer vision techniques",
            "Understand neural network architectures",
            "Practice real-time processing",
            "Build cutting-edge AI applications"
          ],
          whyItMatters: "Computer vision is at the forefront of AI innovation, powering applications like autonomous vehicles, medical diagnosis, security systems, and augmented reality. These skills are in extremely high demand and represent the future of technology.",
          conclusion: "This advanced project demonstrates mastery of deep learning and computer vision. It's a portfolio piece that showcases your ability to work with cutting-edge AI technologies and build sophisticated applications."
        },
        {
          id: "autonomous-vehicle-navigation",
          title: "Autonomous Vehicle Navigation",
          description: "ML model for autonomous vehicle path planning and obstacle avoidance",
          technologies: ["Deep Learning", "Reinforcement Learning", "ROS", "Simulation"],
          duration: "12-16 weeks",
          difficulty: "Advanced",
          introduction: "Autonomous vehicle navigation represents one of the most complex applications of machine learning, combining computer vision, sensor fusion, path planning, and real-time decision making. This project simulates the complete autonomous driving pipeline.",
          advantages: [
            "Master reinforcement learning",
            "Learn robotics and automation",
            "Understand complex system integration",
            "Practice advanced simulation techniques",
            "Build next-generation AI systems"
          ],
          whyItMatters: "Autonomous vehicles represent a multi-trillion dollar industry that will transform transportation. The skills learned in this project are directly applicable to robotics, automation, and AI systems across many industries.",
          conclusion: "This capstone project demonstrates mastery of the most advanced machine learning techniques. It showcases your ability to tackle complex, real-world problems using cutting-edge AI technologies."
        }
      ]
    },
    "iot": {
      title: "IoT Projects",
      beginner: [
        {
          id: "smart-home-temperature-monitor",
          title: "Smart Home Temperature Monitor",
          description: "Monitor room temperature using Arduino and send data to mobile app",
          technologies: ["Arduino", "ESP8266", "Android", "Firebase"],
          duration: "3-4 weeks",
          difficulty: "Beginner",
          introduction: "Internet of Things (IoT) connects everyday objects to the internet, enabling smart monitoring and control. This project introduces you to IoT development by building a temperature monitoring system that collects sensor data and displays it on a mobile app.",
          advantages: [
            "Learn IoT fundamentals",
            "Master Arduino programming",
            "Understand wireless communication",
            "Build mobile app integration",
            "Practice cloud data storage"
          ],
          whyItMatters: "IoT is transforming how we interact with our environment, from smart homes to industrial automation. The global IoT market is rapidly growing, creating numerous opportunities for developers who understand how to connect devices and analyze their data.",
          conclusion: "This project provides hands-on experience with the complete IoT stack, from hardware sensors to cloud storage and mobile apps. You'll understand how connected devices work and how to build your own IoT solutions."
        },
        {
          id: "automatic-plant-watering-system",
          title: "Automatic Plant Watering System",
          description: "Create an automated system that waters plants based on soil moisture",
          technologies: ["Arduino", "Sensors", "Relay Module"],
          duration: "2-3 weeks",
          difficulty: "Beginner",
          introduction: "Automation makes our lives easier by handling routine tasks. This project builds an intelligent plant watering system that monitors soil moisture and automatically waters plants when needed, combining sensors, actuators, and control logic.",
          advantages: [
            "Learn automation principles",
            "Understand sensor integration",
            "Master control system design",
            "Practice hardware programming",
            "Build practical home automation"
          ],
          whyItMatters: "Automation is essential in modern agriculture, manufacturing, and smart homes. This project teaches fundamental automation concepts that apply to countless applications where intelligent control systems improve efficiency and reliability.",
          conclusion: "You'll complete this project with practical automation skills and an understanding of how sensors and actuators work together. This knowledge is valuable for any IoT or automation project."
        },
        {
          id: "smart-parking-system",
          title: "Smart Parking System",
          description: "Develop a system to detect available parking spaces",
          technologies: ["Raspberry Pi", "Ultrasonic Sensors", "Web Dashboard"],
          duration: "4 weeks",
          difficulty: "Beginner",
          introduction: "Smart cities rely on intelligent systems to optimize resources and improve quality of life. This project builds a parking space detection system using sensors and creates a web dashboard to display real-time availability information.",
          advantages: [
            "Learn smart city technologies",
            "Master sensor data processing",
            "Build web-based dashboards",
            "Understand real-time systems",
            "Practice IoT data visualization"
          ],
          whyItMatters: "Urban areas face increasing challenges with traffic and parking. Smart parking systems help optimize space usage, reduce pollution, and improve the urban experience. These solutions are being deployed worldwide in smart city initiatives.",
          conclusion: "This project demonstrates how IoT can solve real urban challenges. You'll gain experience building systems that process sensor data and present it through user-friendly interfaces."
        }
      ],
      advanced: [
        {
          id: "industrial-iot-monitoring-system",
          title: "Industrial IoT Monitoring System",
          description: "Complete IoT solution for monitoring industrial equipment with predictive maintenance",
          technologies: ["Raspberry Pi", "LoRaWAN", "Edge Computing", "Cloud Analytics"],
          duration: "10-12 weeks",
          difficulty: "Advanced",
          introduction: "Industrial IoT (IIoT) revolutionizes manufacturing by enabling predictive maintenance, real-time monitoring, and data-driven decision making. This advanced project builds a complete industrial monitoring system with edge computing and cloud analytics.",
          advantages: [
            "Master Industrial IoT concepts",
            "Learn edge computing techniques",
            "Understand predictive maintenance",
            "Build scalable IoT architectures",
            "Practice enterprise-level solutions"
          ],
          whyItMatters: "Industrial IoT is transforming manufacturing with billions of dollars in efficiency improvements and cost savings. Companies worldwide are implementing IIoT solutions to optimize operations, reduce downtime, and improve safety.",
          conclusion: "This advanced project showcases enterprise-level IoT skills and understanding of complex system architectures. It demonstrates your ability to build industrial-grade solutions that deliver real business value."
        },
        {
          id: "smart-city-traffic-management",
          title: "Smart City Traffic Management",
          description: "AI-powered traffic management system using IoT sensors and cameras",
          technologies: ["Computer Vision", "Edge AI", "5G", "Real-time Analytics"],
          duration: "12-16 weeks",
          difficulty: "Advanced",
          introduction: "Smart traffic management combines IoT sensors, computer vision, and AI to optimize traffic flow and reduce congestion. This cutting-edge project builds an intelligent system that can adapt traffic patterns in real-time based on current conditions.",
          advantages: [
            "Master smart city technologies",
            "Learn AI-powered optimization",
            "Understand large-scale IoT deployment",
            "Practice real-time data processing",
            "Build next-generation urban solutions"
          ],
          whyItMatters: "Traffic congestion costs billions in lost productivity and environmental damage. Smart traffic management systems can reduce travel times, lower emissions, and improve quality of life in urban areas. This represents the future of urban infrastructure.",
          conclusion: "This capstone project represents the pinnacle of IoT and smart city technology. It demonstrates mastery of multiple advanced technologies and their integration into complex, real-world systems."
        }
      ]
    },
    "web-application": {
      title: "Web Application Projects",
      beginner: [
        {
          id: "personal-portfolio-website",
          title: "Personal Portfolio Website",
          description: "Create a responsive portfolio website with modern design",
          technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
          duration: "2-3 weeks",
          difficulty: "Beginner",
          introduction: "A personal portfolio website is essential for showcasing your skills and projects to potential employers or clients. This project teaches modern web development fundamentals while creating a professional online presence that represents your personal brand.",
          advantages: [
            "Learn modern web development",
            "Master responsive design principles",
            "Build professional online presence",
            "Practice UI/UX design concepts",
            "Create a valuable career asset"
          ],
          whyItMatters: "In today's digital world, a professional web presence is crucial for career success. A well-designed portfolio website demonstrates your technical skills while providing a platform to showcase your work and achievements to the world.",
          conclusion: "Your completed portfolio website will serve as a powerful tool for career advancement. You'll have gained essential web development skills while creating a professional platform to showcase your abilities."
        },
        {
          id: "todo-list-application",
          title: "Todo List Application",
          description: "Build a todo list app with CRUD operations",
          technologies: ["React", "Node.js", "MongoDB"],
          duration: "3-4 weeks",
          difficulty: "Beginner",
          introduction: "Todo applications are perfect for learning full-stack development because they cover all essential operations: Create, Read, Update, and Delete (CRUD). This project teaches modern web development using React for the frontend and Node.js with MongoDB for the backend.",
          advantages: [
            "Learn full-stack development",
            "Master CRUD operations",
            "Understand database integration",
            "Practice modern JavaScript frameworks",
            "Build interactive user interfaces"
          ],
          whyItMatters: "Full-stack development skills are in high demand as companies seek developers who can work across the entire technology stack. The concepts learned in this project apply to building any data-driven web application.",
          conclusion: "This project provides comprehensive experience with modern web development technologies. You'll understand how frontend and backend systems work together to create functional web applications."
        },
        {
          id: "weather-app",
          title: "Weather App",
          description: "Weather application using external APIs",
          technologies: ["JavaScript", "REST API", "CSS Grid"],
          duration: "2 weeks",
          difficulty: "Beginner",
          introduction: "Modern web applications often integrate with external services through APIs. This weather app project teaches you how to consume REST APIs, handle asynchronous operations, and create responsive layouts using CSS Grid.",
          advantages: [
            "Learn API integration techniques",
            "Master asynchronous JavaScript",
            "Understand REST API concepts",
            "Practice responsive web design",
            "Build real-time data applications"
          ],
          whyItMatters: "API integration is fundamental to modern web development. Most applications need to communicate with external services, whether for data, authentication, payments, or other functionality. These skills are essential for any web developer.",
          conclusion: "You'll complete this project with solid API integration skills and understanding of how web applications consume external data sources. These skills are applicable to countless web development scenarios."
        }
      ],
      advanced: [
        {
          id: "e-commerce-platform",
          title: "E-commerce Platform",
          description: "Full-stack e-commerce solution with payment integration",
          technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
          duration: "10-12 weeks",
          difficulty: "Advanced",
          introduction: "E-commerce platforms are complex applications that require mastery of multiple technologies including user authentication, payment processing, inventory management, and order fulfillment. This project builds a complete online shopping solution from scratch.",
          advantages: [
            "Master complex application architecture",
            "Learn payment processing integration",
            "Understand e-commerce business logic",
            "Practice cloud deployment",
            "Build scalable web applications"
          ],
          whyItMatters: "E-commerce represents trillions of dollars in global sales and continues growing rapidly. The skills needed to build e-commerce platforms are highly valuable and transferable to many other complex web applications.",
          conclusion: "This advanced project demonstrates mastery of full-stack development and complex business logic implementation. It's an excellent portfolio piece that showcases enterprise-level development skills."
        },
        {
          id: "social-media-analytics-dashboard",
          title: "Social Media Analytics Dashboard",
          description: "Real-time analytics dashboard for social media data",
          technologies: ["React", "D3.js", "WebSocket", "Microservices"],
          duration: "8-10 weeks",
          difficulty: "Advanced",
          introduction: "Real-time analytics dashboards power decision-making in modern businesses. This project builds a sophisticated dashboard that processes social media data in real-time, creating interactive visualizations and providing actionable insights.",
          advantages: [
            "Master real-time web technologies",
            "Learn advanced data visualization",
            "Understand microservices architecture",
            "Practice complex state management",
            "Build enterprise-grade dashboards"
          ],
          whyItMatters: "Data visualization and real-time analytics are critical capabilities for modern businesses. The ability to build sophisticated dashboards that present complex data in understandable formats is extremely valuable across industries.",
          conclusion: "This advanced project showcases your ability to build complex, real-time applications with sophisticated user interfaces. It demonstrates mastery of multiple advanced web technologies and their integration."
        }
      ]
    },
    "mobile-app": {
      title: "Mobile App Projects",
      beginner: [
        {
          id: "expense-tracker-app",
          title: "Expense Tracker App",
          description: "Track daily expenses with categorization and reports",
          technologies: ["React Native", "SQLite", "Charts"],
          duration: "3-4 weeks",
          difficulty: "Beginner",
          introduction: "Personal finance management is a common need that makes for an excellent mobile app project. This expense tracker teaches mobile development fundamentals while building a practical app that helps users monitor their spending habits and financial goals.",
          advantages: [
            "Learn mobile app development",
            "Master local data storage",
            "Understand mobile UI/UX principles",
            "Practice data visualization",
            "Build practical personal finance tools"
          ],
          whyItMatters: "Mobile app development is a rapidly growing field with billions of smartphone users worldwide. Personal finance apps represent a significant market opportunity, and the skills learned here apply to many other mobile application domains.",
          conclusion: "This project provides comprehensive mobile development experience while creating a useful personal finance tool. You'll understand how to build apps that store data locally and provide valuable insights to users."
        },
        {
          id: "recipe-finder-app",
          title: "Recipe Finder App",
          description: "Find recipes based on available ingredients",
          technologies: ["Flutter", "REST API", "Local Storage"],
          duration: "3 weeks",
          difficulty: "Beginner",
          introduction: "Recipe finder apps solve a common problem: what to cook with available ingredients. This project teaches cross-platform mobile development using Flutter while integrating with external recipe APIs to provide users with personalized cooking suggestions.",
          advantages: [
            "Learn cross-platform development",
            "Master Flutter framework",
            "Understand API integration in mobile apps",
            "Practice mobile UI design",
            "Build practical lifestyle applications"
          ],
          whyItMatters: "Cross-platform development allows you to build apps for both iOS and Android with a single codebase, significantly reducing development time and costs. This skill is highly valued by companies and freelance clients.",
          conclusion: "You'll complete this project with cross-platform mobile development skills and understanding of how mobile apps integrate with external services. This knowledge applies to countless mobile app scenarios."
        },
        {
          id: "fitness-tracker",
          title: "Fitness Tracker",
          description: "Track workouts and fitness goals",
          technologies: ["React Native", "Health Kit", "SQLite"],
          duration: "4 weeks",
          difficulty: "Beginner",
          introduction: "Fitness and health apps represent one of the most popular mobile app categories. This project builds a comprehensive fitness tracker that monitors workouts, tracks progress, and helps users achieve their health goals using native device capabilities.",
          advantages: [
            "Learn native device integration",
            "Master health data handling",
            "Understand privacy and security",
            "Practice goal tracking systems",
            "Build health and wellness apps"
          ],
          whyItMatters: "The health and fitness app market is worth billions and continues growing as people become more health-conscious. These apps have real positive impact on users' lives while representing significant business opportunities.",
          conclusion: "This project demonstrates your ability to build apps that integrate with device sensors and health data. You'll understand how to create applications that help users improve their health and achieve personal goals."
        }
      ],
      advanced: [
        {
          id: "augmented-reality-shopping-app",
          title: "Augmented Reality Shopping App",
          description: "AR-enabled shopping experience with 3D product visualization",
          technologies: ["Unity", "ARCore", "ARKit", "Cloud Storage"],
          duration: "12-14 weeks",
          difficulty: "Advanced",
          introduction: "Augmented Reality is transforming the shopping experience by allowing customers to visualize products in their real environment before purchasing. This cutting-edge project builds an AR shopping app that overlays 3D product models onto the real world.",
          advantages: [
            "Master augmented reality development",
            "Learn 3D graphics and modeling",
            "Understand computer vision",
            "Practice advanced mobile development",
            "Build next-generation shopping experiences"
          ],
          whyItMatters: "AR is revolutionizing retail by reducing return rates and increasing customer confidence in online purchases. Major retailers are investing billions in AR technology, creating significant opportunities for developers with these skills.",
          conclusion: "This advanced project showcases cutting-edge mobile development skills and understanding of emerging technologies. It demonstrates your ability to build innovative applications that push the boundaries of user experience."
        },
        {
          id: "real-time-collaboration-app",
          title: "Real-time Collaboration App",
          description: "Multi-user collaboration platform with real-time sync",
          technologies: ["React Native", "WebRTC", "Socket.io", "Offline Support"],
          duration: "10-12 weeks",
          difficulty: "Advanced",
          introduction: "Real-time collaboration apps enable teams to work together seamlessly regardless of location. This advanced project builds a comprehensive collaboration platform with real-time synchronization, offline support, and multi-user capabilities.",
          advantages: [
            "Master real-time communication",
            "Learn complex state synchronization",
            "Understand offline-first design",
            "Practice advanced architecture patterns",
            "Build enterprise collaboration tools"
          ],
          whyItMatters: "Remote work and distributed teams are now standard in many industries. Collaboration apps are essential tools that enable productivity and communication. The skills learned here are highly valuable for building any real-time application.",
          conclusion: "This advanced project demonstrates mastery of complex mobile app architecture and real-time technologies. It showcases your ability to build sophisticated applications that handle complex multi-user scenarios."
        }
      ]
    }
  };

  // Helper function to generate project ID from title
  const generateProjectId = (title: string): string => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // Find the current project
  const findProject = () => {
    if (!domain || !projectId) return null;
    
    const domainData = projectData[domain as keyof typeof projectData];
    if (!domainData) return null;
    
    const allProjects = [...domainData.beginner, ...domainData.advanced];
    return allProjects.find(project => generateProjectId(project.title) === projectId);
  };

  const project = findProject();

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">The requested project could not be found.</p>
            <Button onClick={() => navigate('/projects')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const domainTitle = projectData[domain as keyof typeof projectData]?.title || "";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(`/projects/${domain}`)}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {domainTitle}
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Duration: {project.duration}</span>
            </div>
            <Badge 
              variant={project.difficulty === "Beginner" ? "secondary" : "default"}
              className={project.difficulty === "Beginner" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
            >
              {project.difficulty}
            </Badge>
          </div>

          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline">{tech}</Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Project Sections */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{project.introduction}</p>
            </CardContent>
          </Card>

          {/* Advantages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Key Advantages & Learning Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{advantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Why It Matters */}
          <Card>
            <CardHeader>
              <CardTitle>Why {domainTitle} Matter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{project.whyItMatters}</p>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card>
            <CardHeader>
              <CardTitle>Conclusion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{project.conclusion}</p>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Ready to Start Building?</h3>
                <p className="text-muted-foreground mb-6">
                  This project will challenge you to grow your skills while building something meaningful and practical.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button>Start Project</Button>
                  <Button variant="outline" onClick={() => navigate(`/projects/${domain}`)}>
                    View More Projects
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;