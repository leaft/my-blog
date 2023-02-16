export default defineAppConfig({
  docus: {
    title: 'Leafyy Blog',
    description: '个人博客',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'leaft/my-blog',
    },
    aside: {
      level: 1,
      exclude: []
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: []
    },
    // footer: {
    //   iconLinks: [
    //     {
    //       href: 'https://nuxt.com',
    //       icon: 'IconNuxtLabs'
    //     }
    //   ]
    // }
  }
})
