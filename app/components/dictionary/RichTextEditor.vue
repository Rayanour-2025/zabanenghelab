<template>
  <div class="border border-gray-300 rounded-lg shadow-lg bg-white">
    <div v-if="editor" class="flex flex-wrap gap-1 p-2 border-b border-gray-200">
      
      <div class="flex gap-1">
        <button
          @click="editor.chain().focus().toggleBold().run()"
          :class="{ 'bg-gray-200': editor.isActive('bold') }"
          title="Bold"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorBold class="w-5 h-5" /> </button>
        
        <button
          @click="editor.chain().focus().toggleItalic().run()"
          :class="{ 'bg-gray-200': editor.isActive('italic') }"
          title="Italic"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorItalic class="w-5 h-5" /> </button>
        
        <button
          @click="editor.chain().focus().toggleStrike().run()"
          :class="{ 'bg-gray-200': editor.isActive('strike') }"
          title="Strikethrough"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorStrikethrough class="w-5 h-5" /> </button>

        <button
          @click="editor.chain().focus().toggleUnderline().run()"
          :class="{ 'bg-gray-200': editor.isActive('underline') }"
          title="Underline"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorUnderline class="w-5 h-5" /> </button>
        
        <button
          @click="editor.chain().focus().toggleCode().run()"
          :class="{ 'bg-gray-200': editor.isActive('code') }"
          title="Inline Code"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorCode class="w-5 h-5" /> </button>
      </div>
      
      <span class="border-l border-gray-300 mx-1"></span>

      <div class="flex gap-1">
        <button
          @click="editor.chain().focus().setParagraph().run()"
          :class="{ 'bg-gray-200': editor.isActive('paragraph') }"
          title="Paragraph"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorPilcrow class="w-5 h-5" /> </button>
        
        <button
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'bg-gray-200': editor.isActive('heading', { level: 1 }) }"
          title="Heading 1"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorHeading1 class="w-5 h-5" /> </button>
        <button
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'bg-gray-200': editor.isActive('heading', { level: 2 }) }"
          title="Heading 2"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorHeading2 class="w-5 h-5" /> </button>
        <button
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'bg-gray-200': editor.isActive('heading', { level: 3 }) }"
          title="Heading 3"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorHeading3 class="w-5 h-5" /> </button>
      </div>
      
      <span class="border-l border-gray-300 mx-1"></span>

      <div class="flex gap-1">
        <button
          @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'bg-gray-200': editor.isActive('bulletList') }"
          title="Bullet List"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorList class="w-5 h-5" /> </button>
        
        <button
          @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'bg-gray-200': editor.isActive('orderedList') }"
          title="Ordered List"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorListOrdered class="w-5 h-5" /> </button>
        
        <button
          @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'bg-gray-200': editor.isActive('blockquote') }"
          title="Blockquote"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorQuote class="w-5 h-5" /> </button>
        
        <button
          @click="editor.chain().focus().setHorizontalRule().run()"
          title="Horizontal Rule"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorMinus class="w-5 h-5" /> </button>
      </div>

      <span class="border-l border-gray-300 mx-1"></span>

      <div class="flex gap-1">
        <button
          @click="editor.chain().focus().setTextAlign('left').run()"
          :class="{ 'bg-gray-200': editor.isActive({ textAlign: 'left' }) }"
          title="Align Left"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorTextAlignStart class="w-5 h-5" /> </button>
        <button
          @click="editor.chain().focus().setTextAlign('center').run()"
          :class="{ 'bg-gray-200': editor.isActive({ textAlign: 'center' }) }"
          title="Align Center"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorTextAlignCenter class="w-5 h-5" /> </button>
        <button
          @click="editor.chain().focus().setTextAlign('right').run()"
          :class="{ 'bg-gray-200': editor.isActive({ textAlign: 'right' }) }"
          title="Align Right"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorTextAlignEnd class="w-5 h-5" /> </button>
        <button
          @click="editor.chain().focus().setTextAlign('justify').run()"
          :class="{ 'bg-gray-200': editor.isActive({ textAlign: 'justify' }) }"
          title="Justify"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorTextAlignJustify class="w-5 h-5" /> </button>
      </div>

      <span class="border-l border-gray-300 mx-1"></span>

      <div class="flex gap-1">
        <input 
          type="color" 
          @input="editor.chain().focus().setColor($event.target.value).run()"
          :value="editor.getAttributes('textStyle').color || '#000000'"
          title="Text Color"
          class="w-8 h-8 cursor-pointer p-0 m-0 border-none bg-transparent"
        >
        <button
          @click="editor.chain().focus().toggleHighlight({ color: '#ffcc00' }).run()"
          :class="{ 'bg-gray-200': editor.isActive('highlight') }"
          title="Highlight"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorHighlighter class="w-5 h-5" style="color: #ffcc00;" />
        </button>

        <button
          @click="setLink"
          :class="{ 'bg-gray-200': editor.isActive('link') }"
          title="Add Link"
          class="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <RichTextEditorLink class="w-5 h-5" />
        </button>
      </div>
      
      <span class="border-l border-gray-300 mx-1"></span>

      <div class="flex gap-1">
        <button
          @click="editor.chain().focus().undo().run()"
          :disabled="!editor.can().undo()"
          title="Undo"
          class="p-1 rounded hover:bg-gray-100 transition-colors disabled:opacity-50"
        >
          <RichTextEditorUndo class="w-5 h-5" /> </button>
        
        <button
          @click="editor.chain().focus().redo().run()"
          :disabled="!editor.can().redo()"
          title="Redo"
          class="p-1 rounded hover:bg-gray-100 transition-colors disabled:opacity-50"
        >
          <RichTextEditorRedo class="w-5 h-5" /> </button>
      </div>

    </div>

    <editor-content :editor="editor" class="prose max-w-none p-4 min-h-[250px] focus:outline-none" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

// --- Extension های جدید ---
import Underline from '@tiptap/extension-underline';
import Color from '@tiptap/extension-color';
import {TextStyle} from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';


const props = defineProps({
  modelValue: {
    type: String, // محتوای ورودی (HTML یا Markdown)
    default: '',
  },
});

const emit = defineEmits(['update:modelValue', 'change']);


const setLink = () => {
  const previousUrl = editor.value.getAttributes('link').href;
  const url = window.prompt('URL وارد کنید:', previousUrl);

  // اگر کاربر Cancel کرد
  if (url === null) {
    return;
  }

  // اگر کاربر رشته خالی وارد کرد، لینک را Unset کن
  if (url === '') {
    editor.value.chain().focus().extendMarkRange('link').unsetLink().run();
    return;
  }

  // لینک را ست کن
  editor.value.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
};

// تنظیمات Tiptap
const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Underline, // افزوده شد
    TextStyle, // مورد نیاز برای Color
    Color, // افزوده شد
    Highlight.configure({ // افزوده شد
        multicolor: true,
        HTMLAttributes: {
            class: 'bg-yellow-200', // کلاس پیش‌فرض
        },
    }),
    Link.configure({ // افزوده شد
      openOnClick: false, // برای ویرایش آسان‌تر
    }),
    TextAlign.configure({ // افزوده شد
      types: ['heading', 'paragraph'], // تراز بندی برای تیتر و پاراگراف
    }),
  ],
  // رویداد Update: هر بار که محتوا تغییر کند
  onUpdate: ({ editor }) => {
    const html = editor.getHTML();
    // به‌روزرسانی محتوا در کامپوننت والد
    emit('update:modelValue', html); 
    // رویداد change برای ذخیره نهایی
    emit('change', html); 
  },
});

// برای همگام‌سازی با تغییرات از بیرون (مانند زمانی که مدال باز می‌شود)
watch(
  () => props.modelValue,
  (value) => {
    if (editor.value && editor.value.getHTML() !== value) {
      editor.value.commands.setContent(value, false);
    }
  }
);

// حذف ویرایشگر قبل از نابودی کامپوننت (مهم)
onBeforeUnmount(() => {
  editor.value.destroy();
});

// برای سادگی، می‌توانید یک تابع برای دریافت خروجی اضافه کنید
const getHtmlContent = () => {
    return editor.value ? editor.value.getHTML() : '';
};

// برای استفاده در کامپوننت والد
defineExpose({ getHtmlContent });
</script>

<style>
/* استایل‌های پایه برای ProseMirror (اختیاری: باید با Tailwind ترکیب شوند) */
.prose :where(ul) {
    list-style-type: disc;
    margin-left: 1.5em;
}
.prose :where(ol) {
    list-style-type: decimal;
    margin-left: 1.5em;
}
.prose :where(h1) { font-size: 1.875rem; font-weight: bold; }
.prose :where(h2) { font-size: 1.5rem; font-weight: bold; }

/* استایل‌های مربوط به Tiptap Color/Highlight */
.prose mark {
    background-color: var(--color); /* برای هایلایت‌های رنگی */
    color: inherit;
    padding: 0 0.1em;
    border-radius: 0.1em;
}

/* استایل دهی برای لینک ها (اختیاری) */
.prose a {
  color: #3b82f6; /* آبی روشن */
  text-decoration: underline;
  cursor: pointer;
}

/* رفع مشکل استایل ورودی رنگ در بعضی مرورگرها */
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 4px;
}
</style>