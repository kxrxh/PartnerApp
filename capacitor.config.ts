import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'sever.partner.app',
  appName: 'ЕКЖ Партнер',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
