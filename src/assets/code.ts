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
export function generateHash(str: string): string {
    let hash = 5381; // Starting point
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 33) ^ str.charCodeAt(i); // Update hash
    }
    hash = hash >>> 0; // Convert to unsigned
    let hash_str = hash.toString() + (2 * hash).toString() + (3 * hash).toString(); // Convert to str
    return hash_str
}
