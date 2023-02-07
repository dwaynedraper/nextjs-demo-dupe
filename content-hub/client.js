import {
  ClientCredentialsScheme,
  ContentHubOneClientFactory,
  ContentHubOneClientOptions,
} from "@sitecore/contenthub-one-sdk";

// Environment variables
const client_id = process.env.CH_ONE_CLIENT_ID;
const client_secret = process.env.CH_ONE_CLIENT_SECRET;

// Specify OAuth credentials
const credentials = new ClientCredentialsScheme(client_id, client_secret);

// Create the Content Hub ONE client instance
const client = ContentHubOneClientFactory.create(
  credentials,
  new ContentHubOneClientOptions({
    apiEnvironment: {
      apiBasePath: "base_path",
      identityAuthority: "authority",
      identityAudience: "audience",
      mediaUploadBasePath: "media_path",
    },
  })
);
