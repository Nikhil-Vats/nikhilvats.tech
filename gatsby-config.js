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
    posts: [
      {
        heading: 'Algokart',
        link: 'https://algokart.in/',
        location: 'Remote',
        description: [
          'Developed the admin panel using Node.js, React.js',
          'Discovered and fixed several bugs in the UI and backend',
          'Improved the UX by introducing new features',
        ], 
        role: 'Developer',
        date: 'October, 2019'
      },
      {
        heading: 'Hacktoberfest 2019',
        link: 'https://docs.google.com/document/d/1SIqV8w0Qcsu-ZwCbGh7ifzcZwppKJ2rrojvVnOE1rDM/edit',
        location: 'Remote',
        description: [
          'Successfully submitted 5 PRs',
          'Contributed to Techtonica which trains women and non binary adults for free',
          'Fixed a bug in BioJS CLI tool I found during Sprint',
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
          'Worked on further building BioJS CLI tool.',
          'Upgraded Mecu Line (Protein Melting curve visualisations.'
        ],        
        role: 'Attendee',
        date: 'September 2nd-4th, 2019'
      },
      {
        heading: 'GSoC 2019 @ OBF',
        link: 'https://summerofcode.withgoogle.com/archive/2019/projects/4928963908993024/',
        location: 'Remote',
        description: [
          'Wrote a command line tool using NodeJS, InquirerJS and yeoman.',
          'Wrote a web component - BioJS Homology Tool.',
          'Upgraded Complex Viewer and Protein Viewer to web components.'
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
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
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
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
