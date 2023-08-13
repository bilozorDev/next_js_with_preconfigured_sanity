import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "../schemas";
import { myStructure } from "./deskStructure";

export default defineConfig({
  title: "Your website name", // Project name
  apiVersion: "2023-08-12", // Todays date in YYYY-MM-DD format
  projectId: "9rqia0s3", // Your unique project ID from sanity.io
  dataset: "production", // Your dataset name from sanity.io (default 'production')
  basePath: "/admin-panel", // The path you want to access Sanity Studio from
  plugins: [
    deskTool({
      structure: myStructure, // custom structure for Sanity Studio
    }),
    visionTool(),
  ], // Optional: Enables the visual editor (deskTool) and the preview window (visionTool)

  schema: {
    types: schemaTypes, // Import the schemaTypes array from sanity-schemas/index.js
  },
});
