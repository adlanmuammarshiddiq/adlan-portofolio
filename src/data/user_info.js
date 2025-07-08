const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Adlan Muammar Shiddiq",
        description: "I am an AI/ML Engineer with expertise in data processing, Machine Learning model development, and the application of Artificial Intelligence solutions to solve real challenges in various sectors. I am also experienced in designing and building innovative and adaptive Computer Vision-based systems to support digital transformation and business process automation.",
        role: "AI/ML | Computer Vision Engineer ",
        photo: "../photo.png",
        email: "adlanmuammar9@gmail.com",
    },

    // ============ SOCIAL LINKS ============
    socials: {
		github: "https://github.com/adlanmuammarshiddiq",
		linkedin: "https://www.linkedin.com/in/adlan-muammar-s-115301247/",
        medium: "https://medium.com/@adlanmuammar9",
    },

    // ============ PROJECTS ============
    projects: [
        {
			title: "Telco Customer Churn",
			description: "Identified customer behavior patterns and implemented machine learning models using boosting techniques, resulting in $26,241 (18%) cost savings through proactive retention strategies.",
            technologies: "Numpy, Pandas, Scikit-learn, Matplotlib, Scipy, Power BI",
			github: "https://github.com/adlanmuammarshiddiq/Telco_Customer_Churn",
		},

        {
			title: "Transjakarta Traffic Analysist",
			description: "Analyze TransJakarta passenger data by corridor, gender, and age.Identify stops with the highest traffic from card usage data.Provide insights for more effective advertising strategies.",
			technologies: "Pandas, Numpy, Seaborn, Matplotlib",
			github: "https://github.com/adlanmuammarshiddiq/Capstone2_Transjakarta",
		},

        {
			title: "Driver Fatigue Monitoring System",
			description: "Build a driver monitoring system to detect drowsiness, sleep, and cell phone use. Detect smoking, seat belts, and distractions while driving. Provide real-time alerts to improve safety.",
			technologies: "OpenCV, Pytorch, YOLO, MediaPipe, Numpy",
			github: "https://www.linkedin.com/posts/adlan-muammar-s-115301247_468-facial-markers-for-drowsy-and-sleeping-activity-7328370674694008832-_LQ9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0XW2EBDj1kIuZ0Z2pqTeG1Enk4FYNPP8Y",
		},

		{
			title: "MineFleet AI",
			description: "Detect objects and 3D distance estimation using YOLO and MiDaS. Calculate the distance between vehicles to detect potential hazards. The result is a video with distance and warning visuals.",
			technologies: "OpenCV, Pytorch, YOLO, MIDAS, Numpy, DeptSort",
			github: "#",
		},

        {
			title: "Sentiment Analysis using BERT",
			description: "This project uses BERT to classify the sentiment of reviews into positive, negative, or neutral, with high accuracy through context understanding using a pre-trained model of Hugging Face.",
			technologies: "Transformer, WordCloud, Pytorch, BERT, Selenium",
			github: "https://www.kaggle.com/code/adlanmuammarshiddiq/sentiment-analysis",
		},

    ],

    // ============ EDUCATION ============
    education: [
        {
            school: "Cakrawala University",
            degree: "Bachelor of Data Science",
            duration: "2024 - Currently",
            image: "univ_logo.jpg"
        },
        {
            school: "Purwadhika Digital Technology School",
            degree: "Data Science and Machine Learning",
            duration: "2023",
            image: "purwadhika_logo.jpg"
        },
        {
            school: "SMK Negeri 1 Cimahi",
            degree: "Software Engineer",
            duration: "2019 - 2022",
            image: "smkn_1_cimahi.png"
        },
    ],

    // ============ EXPERIENCE ============
    experience: [
        {
            position: "Product Development Specialist",
            company: "PT Mitra Akses Globalindo",
            duration: "Feb 2024 - Currently",
            image: "magnet_logo.jpg",
            descriptions: [
                "Developed a real-time Driver Monitoring System using YOLO and OpenCV to detect drowsiness, distraction, and gaze.",
                "Built custom AI models with PyTorch/TensorFlow for CCTV integration in object detection,tracking,counting, etc.",
                "Lead IoT-based Fleet Management projects from system design to deployment, including device integration."
            ]
        }
    ],

    // ============ CONTACT ============
    contact: {
        title: "Let's Get in Touch!!",
        description: "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at adlanmuammar9@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
    },

}

export default info