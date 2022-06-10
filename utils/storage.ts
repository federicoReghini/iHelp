import AsyncStorage from '@react-native-async-storage/async-storage';

async function setStorage (key: string, value: Array<Object>):Promise<void | string>{
    try {
        const jsonValue: string = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error: any) {
        return error?.message;
    }
}

async function getStorage(key: string){

    try {
        const value: string | null= await AsyncStorage.getItem(key);
        if (value) {
           return JSON.parse(value);
        }
    } catch (error: any) {
        return error.message;
    }
}

async function removeStorage(key: string):Promise<void | string> {

    try {
        await AsyncStorage.removeItem(key);
    } catch (error: any) {
        return error.message;
    }
}

async function clearStorage():Promise<void | string> {

    try {
        await AsyncStorage.clear();
    } catch (error: any) {
        return error.message;
    }
}

export {
    setStorage,
    getStorage,
    removeStorage,
    clearStorage
}