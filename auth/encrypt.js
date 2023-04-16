// import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';
const crypto = require('crypto')

const initialVector = Buffer.alloc(16, 252);

/// Encrypt
class encryption {

    static async encrypt(datatoencrypt,encryptionkey){

        const cipher = crypto.createCipheriv('aes256', encryptionkey, initialVector);
        const encryptedMessage = cipher.update(datatoencrypt, 'utf8', 'hex') + cipher.final('hex');
        return encryptedMessage
    }

    static async decrypt(datatodecrypt,encryptionkey){
        const decipher = crypto.createDecipheriv('aes256', encryptionkey, initialVector);
        const decryptedMessage = decipher.update(datatodecrypt, 'hex', 'utf-8') + decipher.final('utf8');
        return JSON.parse(decryptedMessage);
    }

    static async generateRandomBytes(length) {
        return crypto.randomBytes(length)
    }
}

// export default encryption
module.exports = encryption