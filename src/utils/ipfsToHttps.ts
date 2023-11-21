export const IpfsToHttps = (url: string) => {
  if (url.startsWith("ipfs://")) {
    return "https://ipfs.io/" + url.replace(":/", "");
  }
  return url;
};
