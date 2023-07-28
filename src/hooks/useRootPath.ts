import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const useRootPath = () => {
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";

    return basePath;
};