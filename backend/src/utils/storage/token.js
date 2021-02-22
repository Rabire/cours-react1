import * as storage from "./storage";

const inrtToken = "INRT_TOKEN";

export async function saveToken(token) {
    await storage.save(inrtToken, token);
    console.log(`token ${token} saved`);
}

export async function loadToken() {
    return await storage.load(inrtToken);
}

export async function clearToken() {
    await storage.remove(inrtToken);
}
