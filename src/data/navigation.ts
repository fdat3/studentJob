const menus = [
  {
    id: 2,
    name: 'Browse Jobs',
    children: [
      {
        id: 1,
        name: 'Services',
        path: '/service',
      },
      {
        id: 2,
        name: 'Projects',
        path: '/project',
      },
      {
        id: 3,
        name: 'Job View',
        path: '/job',
      },
    ],
  },
  {
    id: 3,
    name: 'Users',
    children: [
      {
        id: 1,
        name: 'Dashboard',
        children: [
          { id: 1, name: 'Dashboard', path: '/dashboard' },
          { id: 2, name: 'Proposal', path: '/proposal' },
          { id: 3, name: 'Saved', path: '/saved' },
          { id: 4, name: 'Message', path: '/message' },
          { id: 5, name: 'Reviews', path: '/reviews' },
          { id: 6, name: 'Invoice', path: '/invoice' },
          { id: 7, name: 'Payouts', path: '/payouts' },
          { id: 8, name: 'Statement', path: '/statements' },
          { id: 9, name: 'Manage Service', path: '/manage-services' },
          { id: 10, name: 'Add Services', path: '/add-services' },
          { id: 11, name: 'Manage Jobs', path: '/manage-jobs' },
          {
            id: 12,
            name: 'Manage Project',
            path: '/manage-projects',
          },
          {
            id: 13,
            name: 'Create Project',
            path: '/create-projects',
          },
          { id: 14, name: 'My Profile', path: '/my-profile' },
        ],
      },
      {
        id: 2,
        name: 'Employee',
        children: [
          { id: 1, name: 'Employee V1', path: '/employee-1' },
          { id: 2, name: 'Employee V2', path: '/employee-2' },
          {
            id: 3,
            name: 'Employee Single',
            path: '/employee-single',
          },
        ],
      },
      {
        id: 3,
        name: 'Freelancer',
        path: '/freelancer',
      },
      {
        id: 4,
        name: 'Become Seller',
        path: '/become-seller',
      },
    ],
  },
  {
    id: 4,
    name: 'Pages',
    children: [
      {
        id: 1,
        name: 'About',
        path: '/about',
      },
      {
        id: 2,
        name: 'Blog',
        children: [
          { id: 1, name: 'List 1', path: '/blog-1' },
          { id: 2, name: 'List 2', path: '/blog-2' },
          { id: 3, name: 'List 3', path: '/blog-3' },
          { id: 4, name: 'Single', path: '/blog-single' },
        ],
      },
      {
        id: 3,
        name: 'Shop',
        children: [
          { id: 1, name: 'List', path: '/shop-list' },
          { id: 2, name: 'Single', path: '/shop-single' },
          { id: 3, name: 'Cart', path: '/shop-cart' },
          { id: 4, name: 'Checkout', path: '/shop-checkout' },
          { id: 5, name: 'Order', path: '/shop-order' },
        ],
      },
      {
        id: 4,
        name: 'Contact',
        path: '/contact',
      },
      {
        id: 5,
        name: '404',
        path: '/not-found',
      },
      {
        id: 6,
        name: 'Faq',
        path: '/faq',
      },
      {
        id: 7,
        name: 'Help',
        path: '/help',
      },
      {
        id: 8,
        name: 'Invoices',
        path: '/invoices',
      },
      {
        id: 9,
        name: 'Login',
        path: '/signin',
      },
      {
        id: 10,
        name: 'Pricing',
        path: '/pricing',
      },
      {
        id: 11,
        name: 'Register',
        path: '/signup',
      },
      {
        id: 12,
        name: 'Terms',
        path: '/terms',
      },
    ],
  },
  {
    id: 5,
    name: 'Contact',
    path: '/contact',
  },
];

export default menus;
