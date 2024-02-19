import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  try {
    const result = await sdk.main.getHello();
    console.log(result);
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
})();
