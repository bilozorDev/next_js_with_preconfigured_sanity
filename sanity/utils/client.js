import { createClient } from "next-sanity";

const client = createClient({

   
    apiVersion: '2023-08-12', // Today's date in YYYY-MM-DD format
  projectId: '9rqia0s3', // Your project ID from sanity.io
  dataset: "production", // Your dataset name from sanity.io (default 'production')
})

export default client;