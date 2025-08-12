export class StringUtils {
    capitalize(str: string): string {
      if (!str) return '';
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  
    reverse(str: string): string {
      return str.split('').reverse().join('');
    }
  
    isPalindrome(str: string): boolean {
      const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
      return cleaned === this.reverse(cleaned);
    }
  
    countVowels(str: string): number {
      const vowels = str.match(/[aeiouAEIOU]/g);
      return vowels ? vowels.length : 0;
    }
  
    truncate(str: string, maxLength: number, suffix: string = '...'): string {
      if (str.length <= maxLength) return str;
      return str.substring(0, maxLength - suffix.length) + suffix;
    }
  
    toSlug(str: string): string {
      return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }
  }