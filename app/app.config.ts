export default defineAppConfig({
  global: {
    picture: {
      dark: '/portrait.png',
      light: '/portrait.png',
      alt: 'Sahudy Soriano'
    },
    meetingLink: 'https://calendly.com/sahudysharolyn/coaching-financiero-personalizado-transforma-tu-vida',
    email: 'sahudysharolyn@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      //   'icon': 'i-simple-icons-github',
      //   'to': 'https://github.com/carlos-a-dev',
      //   'target': '_blank',
      //   'aria-label': 'Carlos on GitHub'
      // }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/sahudy-soriano-0ba66516a/',
      'target': '_blank',
      'aria-label': 'Sahudy on LnkedIn'
    }]
  }
})
