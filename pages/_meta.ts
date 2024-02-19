export default {
  index: {
    title: 'Home',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'raw'
    }
  },
  'first-subdocs': {
    title: 'First Subdocs',
    type: 'page',
    //display: 'hidden'
  },
  'second-subdocs': {
    title: 'Second Subdocs',
    type: 'page',
    //display: 'hidden'
  },
  courses: {
    title: 'Docs',
    type: 'menu',
    items: {
      'first-subdocs': {
        title: 'First Subdocs',
        href: '/first-subdocs'
      },
      'second-subdocs': {
        title: 'Second Subdocs',
        href: '/second-subdocs'
      }
    }
  }
}
