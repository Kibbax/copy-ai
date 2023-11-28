# CopyCraft Pro - Cutting-Edge Copywriting Platform with Artificial Intelligence

| [English](README.md) | [Español](README.es.md) | 

![CopyCraft Pro Logo](./public/images/PNG-para-el-Readme.png)


1. [Developers](#developers)
2. [Highlighted Technologies and Tools](#highlighted-technologies-and-tools)
3. [Project Objective](#project-objective)
4. [UX/UI Design Documentation](#uxui-design-documentation)
   - [Design Concept](#design-concept)
5. [Key Features](#key-features)
   - [Content Briefing](#content-briefing)
   - [Automatic Copy Generation](#automatic-copy-generation)
   - [Variety of Formats](#variety-of-formats)
   - [Customization](#customization)
   - [A/B Testing](#ab-testing)
   - [Analytics and Performance Tracking](#analytics-and-performance-tracking)
   - [PDF File Download](#pdf-file-download)
6. [Architecture and Infrastructure Documentation](#architecture-and-infrastructure-documentation)
   - [Application Architecture](#application-architecture)
   - [Technology Justification](#technology-justification)
   - [Security](#security)
   - [Conclusion](#conclusion)
7. [Running the Project Locally](#running-the-project-locally)

## Developers
- Ezequiel Cabello - [GitHub](https://github.com/Kibbax) | [LinkedIn](https://www.linkedin.com/in/ezequielcabello/)
- Macarena Álvarez Castillo - [GitHub](https://github.com/MacaAC) | [LinkedIn](https://www.linkedin.com/in/maria-macarena-álvarez-castillo-56445a176/)
- Rodrigo Peralta Montero - [GitHub](https://github.com/Rodrigopm98) | [LinkedIn](https://www.linkedin.com/in/rodrigoperaltam/)

## Highlighted Technologies and Tools
- **Frontend:** Next.js, React 18, Tailwind CSS
- **Backend:** Node.js, Express, Prisma, PostgreSQL
- **Authentication:** NextAuth
- **UX/UI Design:** Figma
- **Security:** JWT, HTTPS, anti-DDoS measures

## Project Objective
CopyCraft Pro aims to simplify and expedite the content creation process for marketing teams, utilizing advanced technologies such as artificial intelligence.

## UX/UI Design Documentation

### Design Concept
CopyCraft Pro focuses on providing marketing professionals with an engaging and effective user experience. With an intuitive design and optimized features, the platform aims to inspire creativity and efficiency in crafting captivating content.

## Key Features

### Content Briefing
Provides a detailed description of the marketing project, objectives, target audience, brand voice, and keywords.

### Automatic Copy Generation
Utilizes advanced algorithms based on artificial intelligence to automatically generate copies for marketing materials, including headlines, product descriptions, and advertisements.

### Variety of Formats
Generates content tailored to different formats and platforms, such as social media, email newsletters, blogs, and advertising campaigns.

### Customization
Allows users to edit and adjust generated copies to align with the brand's unique voice and style.

### A/B Testing
Facilitates A/B testing with different copy variations to determine which resonates best with the audience and achieves higher conversion rates.

### Analytics and Performance Tracking
Measures content performance directly within the application, tracking engagement, click rates, and conversion metrics to optimize marketing campaigns.

### PDF File Download
Enables users to download the generated copy in PDF format, providing a convenient way to store and share the content produced by the application.

## Architecture and Infrastructure Documentation

### Application Architecture
- **Frontend:** React.js, Next.js, Tailwind CSS for an engaging user experience.
- **Backend:** Node.js with Express, Prisma, and PostgreSQL as a scalable NoSQL database.

### Technology Justification
The choice of Next.js for the frontend is due to its optimized performance and server-side rendering capabilities, enhancing the user experience. React 18 provides the necessary flexibility to build interactive and dynamic interfaces.

In the backend, Node.js and Express offer a solid foundation for building an efficient and scalable application. The decision to use Prisma and PostgreSQL as a database stems from the need for a robust and scalable solution, enabling efficient data management.

NextAuth provides secure and easy-to-implement user authentication, while Figma is used for UX/UI design, facilitating the creation of intuitive and visually appealing interfaces.

### Security
We will implement the following security measures:
- User authentication with JWT tokens in Auth0.
- Input data validation to prevent SQL injection attacks.
- Protection against denial-of-service (DDoS) attacks through request rate limiting.
- Communication security through HTTPS.

To ensure data integrity, we will implement a data recovery plan, including:
- Logical deletion system for both users and their queries, allowing users to recover their data until the expiration date, after which it will be permanently deleted.

### Conclusion
The three-tier architecture of the application ensures a scalable and secure design. The separation of responsibilities between the frontend, backend, and database allows for efficient development and straightforward maintenance. Additionally, the ability to query a third-party API and record request histories enriches the application's functionality.

## Running the Project Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/copycraft-pro.git
   ```

2. **Install Dependencies:**
   ```bash
   cd copycraft-pro
   npm install
   ```

3. **Set Environment Variables:**
   - Copy the `.env.example` file and rename it to `.env`.
   - Fill in the necessary environment variables.

4. **Start the Application:**
   ```bash
   npm run dev
   ```

5. **Access the Application:**
   - Open your browser and visit [http://localhost:3000](http://localhost:3000).

---

Thank you for choosing CopyCraft Pro! We hope you enjoy an exceptional and productive user experience. If you have any questions or suggestions, feel free to contact our development team. Happy writing!
