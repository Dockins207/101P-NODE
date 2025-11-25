import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemaTypes';

export default defineConfig({
  projectId: 'sqb4dkpp',
  dataset: 'production',
  title: '101 Properties',
  apiVersion: '2024-09-18',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
