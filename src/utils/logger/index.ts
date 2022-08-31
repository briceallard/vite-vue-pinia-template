import { createLogger, StringifyAndParseObjectsHook } from "vue-logger-plugin";

const isProduction = import.meta.env.VITE_NODE_ENV === "production";

export const logger = createLogger({
  enabled: true,
  level: isProduction ? "error" : "debug",
  callerInfo: true,
  beforeHooks: [],
  afterHooks: [],
});
