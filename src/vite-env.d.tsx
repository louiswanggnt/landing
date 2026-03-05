// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 這裡宣告你自己定義的環境變數型別
  readonly VITE_API_ENDPOINT: string;
  readonly VITE_GOOGLE_FORM_URL: string;
  // 更多變數...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}