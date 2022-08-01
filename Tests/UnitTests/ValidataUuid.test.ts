import crypto from 'crypto';
import { validateDataId, validateJobUuid } from '../../Src/Utils/ValidataUuid';

test('validateDataId must return proper SHA256 validation result', () => {
    const invalidHash = "505fa041afba1d8cdb7b71fe1f3e57c3456db90a33a732625cb0fda5d5f&amp;"
    const validHash = crypto.createHash('sha256').update(JSON.stringify("hoge"), 'utf8').digest('hex');
    expect(validateDataId(invalidHash)).toStrictEqual(false);
    expect(validateDataId(validHash)).toStrictEqual(true);
});

test('validateJobUuid must return proper uuidV4 validation result', () => {
    const invalidUuid = 'd9428888-122b-11e1-b85c-61cd3cbb321>';
    const v1Uuid = 'd9428888-122b-11e1-b85c-61cd3cbb3210';
    const v4Uuid = '109156be-c4fb-41ea-b1b4-efe1671c5836';
    expect(validateJobUuid(invalidUuid)).toStrictEqual(false);
    expect(validateJobUuid(v1Uuid)).toStrictEqual(false);
    expect(validateJobUuid(v4Uuid)).toStrictEqual(true);
});
