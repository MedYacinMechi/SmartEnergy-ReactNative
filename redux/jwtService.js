import * as SecureStore from 'expo-secure-store';

export const jwtServices = {
    saveToken,
    getToken,
    deleteToken,
};
async function saveToken(value) {
    await SecureStore.setItemAsync('Token', value);
}
async function getToken() {
    let result = await SecureStore.getItemAsync('Token');
    if (result) {
        return result;
    } else {
        return null
    }
}
async function deleteToken() {
    await SecureStore.deleteItemAsync('Token');
}