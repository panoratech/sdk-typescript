import { PanoraSDK } from '@panora/sdk-typescript';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.main.getHello();
  console.log(result);
})();
