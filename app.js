const { h, render } = preact;

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

const BusinessSection = ({ title, content }) =>
  h('section', { class: 'business-section' }, [
    h('h2', null, title),
    h('div', { class: 'content' }, content)
  ]);

const App = () => {
  const sections = [
    {
      title: "Customers",
      content: "Individuals and businesses leveraging our innovative solutions"
    },
    {
      title: "Legal Structure",
      content: "Incorporated as a Delaware C-Corporation"
    },
    {
      title: "Financial Resources",
      content: "Backed by top-tier VC firms with $15M Series A funding"
    },
    {
      title: "Technology & Infrastructure",
      content: "Cloud-native platform powered by AWS with global edge networks"
    },
    {
      title: "Culture & Values",
      content: "Customer-obsessed, innovative, and transparent workplace"
    }
  ];

  return h('main', null, [
    h('header', { class: 'hero' }, [
      h('h1', null, 'Acme Corporation'),
      h('p', null, 'Building the future of enterprise solutions')
    ]),
    sections.map(section => h(BusinessSection, section)),
    h('footer', { class: 'site-footer' },
      h('p', null, '© 2025 Acme Corp. All rights reserved.')
    )
  ]);
};

window.addEventListener('DOMContentLoaded', mount);
