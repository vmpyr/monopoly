import crypto from 'crypto';

// Generate a random code of a given length
export function generateCode(length: number = 6): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      result += letters[randomIndex];
    }
  
    return result;
}

// Turn the code into a random hash
export function generateHash(code: string): string {
    return crypto.createHash('sha256').update(code).digest('hex');
}
