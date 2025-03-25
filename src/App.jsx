import React from "react";
import Card from "./components/Card";

// Import images
import HtmlLogo from "./assets/Html.jpg";
import CssLogo from "./assets/Css.jpg";
import JavaScriptLogo from "./assets/JavaScript.jpg";
import TailwindLogo from "./assets/Tailwind CSS.png";
import GitLogo from "./assets/Git.png";
import ReactLogo from "./assets/React.jpg";
import NodeLogo from "./assets/Node.png";
import ExpressLogo from "./assets/Express.png";
import PythonLogo from "./assets/Python.jpg";
import SqlLogo from "./assets/SQL.jpg";
import MySQLLogo from "./assets/MySQL.png";
import PostgresqlLogo from "./assets/PostgreSQL.png";
import PowerBiLogo from "./assets/Power BI.jpg";
import MSExcel from "./assets/MS EXCEL.png";
import DatabaseLogo from "./assets/Database.jpg"


const App = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
    <Card 
        name="HTML" 
        image={HtmlLogo} 
        description="HyperText Markup Language (HTML) is a markup language used to create web pages. It was created in 1990 by Sir Tim Berners-Lee, a British computer scientist who is credited with inventing the World Wide Web. Webpages can include writing, links, pictures, and even sound and video." 
    />
    <Card 
        name="CSS" 
        image={CssLogo} 
        description="Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript." 
    />

    <Card 
        name="JavaScript" 
        image={JavaScriptLogo} 
        description="JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard, known for its dynamic typing, prototype-based object-orientation, and first-class functions, used primarily for web development but also in other contexts." 
    />

    <Card 
        name="Tailwind CSS" 
        image={TailwindLogo} 
        description="Tailwind CSS is an open-source CSS framework. Unlike other frameworks, like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of 'utility' CSS classes that can be used to style each element by mixing and matching." 
    />

    <Card 
        name="Git" 
        image={GitLogo} 
        description="Git is a distributed version control system that tracks versions of files. It is often used to control source code by programmers who are developing software collaboratively. Git. A command-line session showing repository creation, addition of a file, and remote synchronization." 
    />

    <Card 
        name="ReactJS" 
        image={ReactLogo} 
        description="ReactJS is a free and open-source front-end JavaScript library for building user interfaces, maintained by Meta (formerly Facebook) and a community of developers, aimed at making UI component creation seamless." 
    />

<Card 
        name="NodeJS" 
        image={NodeLogo} 
        description="Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside the browser. It is built on Chrome's V8 JavaScript engine and is mainly used for building fast, scalable, and efficient backend applications" 
    />
    <Card 
        name="ExpressJS" 
        image={ExpressLogo} 
        description="Express.js is a minimal, fast, and flexible web framework for Node.js used to build web applications and APIs. It simplifies server-side development by providing powerful features like routing, middleware support, and request handling." 
    />

    <Card 
        name="Python" 
        image={PythonLogo} 
        description="Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. It is widely used in web development, data science, automation, artificial intelligence (AI), and more" 
    />

    <Card 
        name="SQL" 
        image={SqlLogo} 
        description="SQL (Structured Query Language) is a standard language used to interact with relational databases. It allows you to store, retrieve, manipulate, and manage data efficiently." 
    />

    <Card 
        name="MySQL" 
        image={MySQLLogo} 
        description="MySQL is an open-source relational database management system (RDBMS) that uses SQL (Structured Query Language) to store, retrieve, and manage data. It is widely used in web applications, enterprise software, and data-driven applications." 
    />
    <Card 
        name="PostgreSQL" 
        image={PostgresqlLogo} 
        description="PostgreSQL (or Postgres) is a powerful, open-source relational database management system (RDBMS) known for its reliability, flexibility, and advanced features. It supports SQL and NoSQL data types, making it one of the most versatile databases available." 
    />
    <Card 
        name="MS Excel" 
        image={MSExcel} 
        description="Microsoft Excel is a spreadsheet software developed by Microsoft, used for data entry, analysis, visualization, and automation. It organizes data into rows and columns and provides formulas, functions, pivot tables, and charts to analyze data efficiently." 
    /><Card 
        name="Power BI" 
        image={PowerBiLogo} 
        description="Power BI is a business intelligence (BI) tool developed by Microsoft for data visualization, reporting, and analytics. It allows users to connect, transform, and visualize data using interactive dashboards and reports." 
    />
    <Card 
        name="Database" 
        image={DatabaseLogo} 
        description="A database is an organized collection of data that allows users to store, retrieve, manage, and manipulate information efficiently. It ensures data integrity, security, and accessibility for applications and users." 
    />
    
    </div>
    
);
};

export default App;

