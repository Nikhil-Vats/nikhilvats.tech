/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Nikhil Vats',
    author: 'Nikhil Vats',
    github: 'https://github.com/Nikhil-Vats',
    linkedin: 'https://linkedin.com/in/Nikhil-Vats',
    twitter: 'https://twitter.com/NikhilVatss',
    resumeLink: 'https://drive.google.com/file/d/1jMCPySTT98HS-yQkfzt4HUtf-jPlM9K9/view?usp=sharing',
    work: [
      {
        heading: 'Intermine',
        link: 'https://github.com/intermine',
        location: 'Contributor and Mentor',
        description: [
          'Contributing to InterMine Data Browser Tool used for exploring semi-homogeneous biological datasets',
          'Mentoring GSoC and Outreachy 2020 applicants',
          'Contributing to other projects like Bluegenes (used for Genomic data discovery).'
        ], 
        role: 'Developer',
        date: 'January - Present'
      },
      {
        heading: 'GSoC 2019 @ OBF',
        link: 'https://summerofcode.withgoogle.com/archive/2019/projects/4928963908993024/',
        location: 'Remote',
        description: [
          'Built a command line tool (over 200 downloads) using NodeJS, InquirerJS and yeoman.',
          'Developed a web component - BioJS Homology Tool having over 300 downloads on npm.',
          'Upgraded Complex Viewer which shows web based visualisations of molecular interaction data to a web component.',
          'Upgraded WebGL based Protein Viewer to a web component'
        ], 
        role: 'Student',
        date: 'May - Aug, 2019'
      },
      {
        heading: 'Algokart',
        link: 'https://algokart.in/',
        location: 'Remote',
        description: [
          'Developed the admin panel using Node.js, React.js',
          'Improved the UX by introducing new features like showing complete pricing details, discount comparisons on different subscriptions and trading algorithms.'
        ], 
        role: 'Developer',
        date: 'October, 2019'
      },
      {
        heading: 'Hacktoberfest 2019',
        link: 'https://docs.google.com/document/d/1SIqV8w0Qcsu-ZwCbGh7ifzcZwppKJ2rrojvVnOE1rDM/edit',
        location: 'Remote',
        description: [
          'Successfully submitted 5 PRs.',
          'Contributed to Techtonica to help train women and non binary adults for free, so that they can get jobs in tech.',
          'Added a new feature which converts any HTML special characters in input to their entity equivalent in PlexisJS - a string manipulation library.',
        ], 
        role: 'Participant',
        date: 'October, 2019'
      },
      {
        heading: 'eLife Innovation Sprint 2019',
        link: 'https://sprint.elifesciences.org/',
        location: 'Cambridge, UK',
        description: [
          'Selected amongst 134 applicants to attend the sprint with full scholarship.',
          'Contributed to my GSoC project - BioJS CLI tool.',
          'Upgraded Mecu Line tool which helps to visualize protein melting curves.'
        ],        
        role: 'Attendee',
        date: 'September 2nd-4th, 2019'
      },
      {
        heading: 'Screenninja',
        link: 'https://screenninja.in/',
        location: 'Remote',
        description: [
          'Migrated the backend from Google Firebase to MongoDB, Node.js',
          'Migrated the server from Google Firebase to Digital Ocean',
          'Developed the admin dashboard using Node.js, React.js, Redux',
          'Improved the UX by introducing new features',
        ], 
        role: 'Developer',
        date: 'February - April, 2019'
      },
      {
        heading: 'Coding Club',
        link: 'https://github.com/CodingClubBITSP',
        location: 'BITS Pilani',
        description: [
          'Developed the web portal for the annual sports fest of BITS Pilani used for registration of over 2000 students from over 15 colleges across India.',
          'Organized and conducted several online events, hackathons, workshops, and competitions on Web, App and Game development, Competitive Coding, Graphic design, Machine learning etc. which saw participation from more than 1000 students from 10+ colleges.',
          'Voted as the head of the club for this academic year, responsible to lead the whole team of over 70 students from first, second and third year in developing games, apps, websites and improve the coding culture in the campus.'
        ], 
        role: 'Head',
        date: 'April 2019 - Present'
      }
    ],
    projects: [
      {
        heading: 'Portfolio Website',
        link: 'https://github.com/NIKHIL-VATS/PORTFOLIO-WEBSITE',
        location: 'Remote',
        description: [
          'Designed and developed a portfolio template with markdown blogs using Gatsby and React.',
          'Started writing blogs on the important things that I learned to help beginners learn more efficiently which was one of my goals for a long time.',
          'Documented the steps to setup and host the website and blog completely free of cost to help developers all over the world.'
        ], 
        role: 'Designer & Developer',
        date: 'January 2020'
      },
      {
        heading: 'Wiser',
        link: 'http://discovery.bits-pilani.ac.in:8000/',
        location: 'BITS Pilani',
        description: [
          'Developed the website for a research project under a professor.',
          'Worked on a research project which aims to address the well being of youth by asking them questions over a period of time.',
          'Built with HTML, CSS, VanillaJS and Django.'
        ], 
        role: 'Frontend developer',
        date: 'February 2019'
      },
      {
        heading: 'React Burger App',
        link: 'https://github.com/Nikhil-Vats/React-Burger-App',
        location: 'Remote',
        description: [
          'Developed a restaurant website in which users could sign up and order burgers.',
          'Built with React, Redux and Google Firebase.'
        ], 
        role: 'Developer',
        date: 'December 2018'
      },
      {
        heading: 'Pixxel',
        link: 'https://nikhil-vats.github.io/Pixxel-Main-Website/index.html',
        location: 'Remote',
        description: [
          'Developed the home page for the website of a startup of my college.',
          'Built with HTML, CSS and VanillaJS.'
        ], 
        role: 'Developer',
        date: 'November 2018'
      },
      {
        heading: 'Node Chat App',
        link: 'https://vast-coast-28984.herokuapp.com/',
        location: 'Remote',
        description: [
          'Developed a chat website in which users in the same chat room can chat and share their location.',
          'Built with Node.js, Express.js and socket.io.'
        ], 
        role: 'Developer',
        date: 'July 2018'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/posts`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false
            },
          },
          `gatsby-remark-images-zoom`,
        ]
      }
    }
  ]
}
