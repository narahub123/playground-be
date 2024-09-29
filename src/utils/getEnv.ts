export const getEnv = (variable: string, defaultValue?: string | number) => {
  const value = process.env[variable];
  if (value) {
    return process.env[variable];
  }

  console.error(`환경 변수 ${variable}이 설정되지 않았습니다.`);

  return defaultValue;
};
