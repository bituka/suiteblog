const { h, render } = preact;
const { useState } = preactHooks;

const mount = () => {
  const mountPoint = document.getElementById('app');
  if (!mountPoint) {
    console.error('Missing #app element');
    return;
  }

  try {
    render(h(App), mountPoint);
  } catch (err) {
    console.error('Failed to render app:', err);
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return h('nav', { class: 'navbar' }, [
    h('div', { class: 'logo' }, [
      h('i', { class: 'fas fa-pen-fancy' }),
      'SuiteBlog'
    ]),
    h('button', { 
      class: 'mobile-menu-btn',
      onClick: toggleMenu
    }, 
      h('i', { class: menuOpen ? 'fas fa-times' : 'fas fa-bars' })
    ),
    h('div', { class: `nav-links ${menuOpen ? 'active' : ''}` }, [
      h('a', { href: '#' }, 'Home'),
      h('a', { href: '#features' }, 'Features'),
      h('a', { href: '#about' }, 'About'),
      h('a', { href: '#contact' }, 'Contact')
    ])
  ]);
};

const Hero = () => {
  return h('section', { 
    class: 'hero',
    style: {
      backgroundImage: 'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80")'
    }
  }, [
    h('div', { class: 'hero-content' }, [
      h('h1', null, 'SuiteBlog'),
      h('p', null, 'Elegant publishing solutions for modern content creators'),
      h('a', { href: '#features', class: 'hero-btn' }, 'Explore Features')
    ])
  ]);
};

const Card = ({ title, content, imageUrl }) => {
  return h('div', { class: 'card' }, [
    h('img', { class: 'card-img', src: imageUrl, alt: title }),
    h('div', { class: 'card-content' }, [
      h('h3', null, title),
      h('p', null, content)
    ])
  ]);
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Premium Content Management",
      content: "Create and manage your content with our intuitive, powerful editor",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Enterprise Solutions",
      content: "Scalable infrastructure for businesses of all sizes",
      imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Advanced Analytics",
      content: "Gain insights into your audience with comprehensive analytics",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return h('section', { id: 'features', class: 'business-section' }, [
    h('h2', { class: 'section-title' }, 'Our Features'),
    h('div', { class: 'card-grid' }, [
      features.map(feature => h(Card, feature))
    ])
  ]);
};

const AboutSection = () => {
  const sections = [
    {
      title: "Our Platform",
      content: "Cloud-native publishing platform with global edge networks for lightning-fast delivery",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Our Team",
      content: "Industry experts passionate about creating the best publishing experience",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Our Values",
      content: "Innovation, quality, and client satisfaction drive everything we do",
      imageUrl: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return h('section', { id: 'about', class: 'business-section' }, [
    h('h2', { class: 'section-title' }, 'About SuiteBlog'),
    h('div', { class: 'card-grid' }, [
      sections.map(section => h(Card, section))
    ])
  ]);
};

const Footer = () => {
  return h('footer', { class: 'site-footer' }, [
    h('div', { class: 'footer-content' }, [
      h('div', { class: 'footer-column' }, [
        h('h3', null, 'SuiteBlog'),
        h('p', null, 'Elegant digital publishing solutions for the modern web.'),
        h('div', { class: 'social-links' }, [
          h('a', { href: '#', 'aria-label': 'Facebook' }, h('i', { class: 'fab fa-facebook' })),
          h('a', { href: '#', 'aria-label': 'Twitter' }, h('i', { class: 'fab fa-twitter' })),
          h('a', { href: '#', 'aria-label': 'Instagram' }, h('i', { class: 'fab fa-instagram' })),
          h('a', { href: '#', 'aria-label': 'LinkedIn' }, h('i', { class: 'fab fa-linkedin' }))
        ])
      ]),
      h('div', { class: 'footer-column' }, [
        h('h3', null, 'Quick Links'),
        h('ul', null, [
          h('li', null, h('a', { href: '#' }, 'Home')),
          h('li', null, h('a', { href: '#features' }, 'Features')),
          h('li', null, h('a', { href: '#about' }, 'About')),
          h('li', null, h('a', { href: '#contact' }, 'Contact'))
        ])
      ]),
      h('div', { class: 'footer-column' }, [
        h('h3', null, 'Resources'),
        h('ul', null, [
          h('li', null, h('a', { href: '#' }, 'Documentation')),
          h('li', null, h('a', { href: '#' }, 'API')),
          h('li', null, h('a', { href: '#' }, 'Support')),
          h('li', null, h('a', { href: '#' }, 'Blog'))
        ])
      ])
    ]),
    h('div', { class: 'copyright' }, [
      h('p', null, '© 2025 SuiteBlog. All rights reserved.')
    ])
  ]);
};

const App = () => {
  return h('div', { class: 'site-wrapper' }, [
    h(Navbar),
    h(Hero),
    h(FeaturesSection),
    h(AboutSection),
    h(Footer)
  ]);
};

window.addEventListener('DOMContentLoaded', mount);