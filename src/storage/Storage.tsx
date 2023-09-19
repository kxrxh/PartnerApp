import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';


export async function storageGet(key: string): Promise<string> {
    try {
        const result = await SecureStoragePlugin.get({ key });
        return result.value;
    } catch (e) {
        return "";
    }
}

export async function storageSet(key: string, value: string): Promise<boolean> {
    return (await SecureStoragePlugin.set({ key, value })).value;
}

export async function storageClear(): Promise<boolean> {
    try {
        const result = await SecureStoragePlugin.clear();
        return result.value;
    } catch (e) {
        return false;
    }
}