import { CollectionConfig } from 'payload';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    delete: () => false,
    update: () => false
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Customer', value: 'customer' }
      ],
      defaultValue: 'customer',
      required: true
    }
  ]
};

export default Users;
