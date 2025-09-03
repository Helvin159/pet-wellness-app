import { CollectionConfig } from 'payload';

const Category: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name'
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true
    },
    {
      name: 'description',
      type: 'textarea'
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media'
    }
  ]
};

export default Category;
