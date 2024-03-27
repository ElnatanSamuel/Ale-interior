import { createClient } from "@sanity/client";

// export default SanityClient({
//   projectId: "5prpasn0",
//   dataset: "production",
// });

const client = createClient({
  projectId: "5prpasn0",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
});

export default client;
