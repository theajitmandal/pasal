declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string;
    PORT: number;
    NODE_ENV: 'development' | 'production' | 'test';
    // Add other environment variables here as needed
  }
}