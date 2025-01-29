// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'rscss+',
    description: 'Styling CSS without losing sanity for modern web development.',
    socials: {
      github: 'flybooy/rscss-plus',
    },
    github: {
      dir: 'dist',
      branch: 'main',
      repo: 'rscss-plus',
      owner: 'flybooy',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
