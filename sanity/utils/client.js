import { createClient } from "next-sanity";

const client = createClient({

   
    apiVersion: '2023-08-12', // Todays date in YYYY-MM-DD format
    projectId: '9rqia0s3',  // Your unique project ID ( must be same as sanity.config.js)
    dataset: 'production', // Your dataset name from sanity.io (default 'production')
})

export default client;