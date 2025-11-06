// composables/useCaptcha.js

import { ref } from 'vue'

const captchaCharacters = '0123456789' // فقط اعداد 0-9

// تولید متن تصادفی کپچا
const getRandomText = (length = 6) => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += captchaCharacters.charAt(Math.floor(Math.random() * captchaCharacters.length))
  }
  return result
}

// تولید رنگ تصادفی برای کپچا
const getRandColor = () => {
  const captchaColors = ['#7FB77E', '#4ade80', '#22c55e', '#16a34a']
  return captchaColors[Math.floor(Math.random() * captchaColors.length)]
}

// کامپوسیبل اصلی مدیریت کپچا
export function useCaptcha() {
  const captchaText = ref('')

  // تولید و نمایش کپچا روی canvas
  // توجه: در JS نیازی به Ref<HTMLCanvasElement | null> نیست
  const generateCaptcha = (canvasRef) => {
    const canvas = canvasRef.value
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height

    // ۱. پاک کردن صفحه
    ctx.fillStyle = '#f3f4f6'
    ctx.fillRect(0, 0, width, height)

    // ۲. تولید متن جدید
    const text = getRandomText(6)
    captchaText.value = text // ذخیره متن برای اعتبارسنجی

    // ۳. تنظیمات متن
    ctx.font = 'bold 30px "Inter", sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    // ۴. رسم حروف با چرخش و رنگ‌های مختلف
    for (let i = 0; i < text.length; i++) {
      ctx.fillStyle = getRandColor()
      ctx.save()
      const x = (i + 1) * (width / (text.length + 1)) + Math.random() * 5 - 2.5
      const y = height / 2 + Math.random() * 10 - 5
      ctx.translate(x, y)
      ctx.rotate(Math.random() * 0.5 - 0.25)
      ctx.fillText(text[i], 0, 0)
      ctx.restore()
    }

    // ۵. رسم خطوط نویز
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = getRandColor() + '40'
      ctx.beginPath()
      ctx.moveTo(Math.random() * width, Math.random() * height)
      ctx.lineTo(Math.random() * width, Math.random() * height)
      ctx.lineWidth = 1 + Math.random() * 1.5
      ctx.stroke()
    }
  }

  return {
    captchaText,
    generateCaptcha,
  }
}