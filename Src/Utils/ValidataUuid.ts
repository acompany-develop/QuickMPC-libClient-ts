import { validate as uuidValidate, version as uuidVersion } from 'uuid';

export function validateDataId(hash: string): boolean {
    const regexExp = /^[a-f0-9]{64}$/gi; // 64桁の連続する16進数であることをチェック
    return regexExp.test(hash);
}

export function validateJobUuid(uuid: string): boolean {
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
}
