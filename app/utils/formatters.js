/**
 * تبدیل آرایه‌ای از رشته‌ها به یک رشته فرمت شده (با جداکننده کاما و فاصله).
 * @param {string[]} arr - آرایه‌ای از رشته‌ها.
 * @returns {string} - رشته‌ی فرمت شده.
 */
export const arrayToFormattedString = (arr) => {
  if (!arr || arr.length === 0) return '';
  return arr.join(', '); // کلمات با کاما و فاصله جدا می‌شوند
};

/**
 * تبدیل یک رشته با جداکننده‌های کاما یا خط جدید به آرایه‌ای از رشته‌های پاکسازی شده.
 * @param {string} text - رشته ورودی.
 * @returns {string[]} - آرایه‌ای از رشته‌های پاکسازی شده.
 */
export const parseToArray = (text) => {
  if (!text) return [];
  // استفاده از یک RegEx که بر اساس کاما یا خط جدید جدا می‌کند
  return text
    .split(/[\n,]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
};