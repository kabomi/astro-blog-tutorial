interface ImportMetaEnv {
  readonly ADMIN_USERNAME: string;
  readonly ADMIN_PASSWORD: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}