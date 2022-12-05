import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.isj.devmobile.FruitRichelle',
  appName: 'FruitRichelle',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp:{
      enabled: true
    }
  }
};

export default config;
