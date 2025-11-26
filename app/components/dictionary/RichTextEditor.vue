<template>
  <div class="border border-gray-200 rounded-xl shadow-lg bg-white overflow-hidden max-w-full">
    
    <div v-if="editor" class="flex flex-wrap items-center gap-1 p-2 border-b border-gray-100 bg-gray-50  max-w-full">
      
      <div class="relative inline-block text-left">
        <select
          @change="editor.chain().focus().setFontFamily($event.target.value).run()"
          :value="editor.getAttributes('textStyle').fontFamily || ''"
          title="انتخاب فونت"
          class="p-1.5 rounded-lg border border-gray-300 bg-white text-sm focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
        >
          <option value="">فونت پیش‌فرض</option>
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Georgia">Georgia</option>
          <option value="Impact">Impact</option>
          <option value="vazir, sans-serif">Vazir (فونت فارسی)</option>
        </select>
      </div>

      <span class="toolbar-divider"></span>
      
      <div class="flex items-center gap-0.5">
        <button
          @click="editor.chain().focus().toggleBold().run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive('bold') }"
          title="پررنگ (Bold)"
          class="toolbar-button"
        >
          <RichTextEditorBold class="w-5 h-5" />
        </button>
        
        <button
          @click="editor.chain().focus().toggleItalic().run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive('italic') }"
          title="کج (Italic)"
          class="toolbar-button"
        >
          <RichTextEditorItalic class="w-5 h-5" />
        </button>
        
        <button
          @click="editor.chain().focus().toggleStrike().run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive('strike') }"
          title="خط خورده (Strikethrough)"
          class="toolbar-button"
        >
          <RichTextEditorStrikethrough class="w-5 h-5" />
        </button>

        <button
          @click="editor.chain().focus().toggleUnderline().run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive('underline') }"
          title="زیر خط (Underline)"
          class="toolbar-button"
        >
          <RichTextEditorUnderline class="w-5 h-5" />
        </button>
        
        <button
          @click="editor.chain().focus().toggleCode().run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive('code') }"
          title="کد درون خطی (Inline Code)"
          class="toolbar-button"
        >
          <RichTextEditorCode class="w-5 h-5" />
        </button>
      </div>
      
      <span class="toolbar-divider"></span>

      <div class="flex items-center gap-0.5">
        <button
          @click="editor.chain().focus().setParagraph().run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive('paragraph') }"
          title="پاراگراف"
          class="toolbar-button"
        >
          <RichTextEditorPilcrow class="w-5 h-5" />
        </button>
        
        <button
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive('heading', { level: 1 }) }"
          title="تیتر ۱ (Heading 1)"
          class="toolbar-button text-lg font-bold"
        >
          H1
        </button>
        <button
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive('heading', { level: 2 }) }"
          title="تیتر ۲ (Heading 2)"
          class="toolbar-button text-base font-bold"
        >
          H2
        </button>
        <button
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive('heading', { level: 3 }) }"
          title="تیتر ۳ (Heading 3)"
          class="toolbar-button text-sm font-bold"
        >
          H3
        </button>
      </div>
      
      <span class="toolbar-divider"></span>

      <div class="flex items-center gap-0.5">
        <button
          @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive('bulletList') }"
          title="لیست نقطه‌ای (Bullet List)"
          class="toolbar-button"
        >
          <RichTextEditorList class="w-5 h-5" />
        </button>
        
        <button
          @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive('orderedList') }"
          title="لیست شماره‌دار (Ordered List)"
          class="toolbar-button"
        >
          <RichTextEditorListOrdered class="w-5 h-5" />
        </button>
        
        <button
          @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive('blockquote') }"
          title="نقل قول (Blockquote)"
          class="toolbar-button"
        >
          <RichTextEditorQuote class="w-5 h-5" />
        </button>
        
        <button
          @click="editor.chain().focus().setHorizontalRule().run()"
          title="خط افقی (Horizontal Rule)"
          class="toolbar-button"
        >
          <RichTextEditorMinus class="w-5 h-5" />
        </button>
      </div>

      <span class="toolbar-divider"></span>

      <div class="flex items-center gap-0.5">
        <button
          @click="editor.chain().focus().setTextAlign('left').run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive({ textAlign: 'left' }) }"
          title="تراز چپ (Align Left)"
          class="toolbar-button"
        >
          <RichTextEditorTextAlignStart class="w-5 h-5" />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('center').run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive({ textAlign: 'center' }) }"
          title="تراز وسط (Align Center)"
          class="toolbar-button"
        >
          <RichTextEditorTextAlignCenter class="w-5 h-5" />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('right').run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive({ textAlign: 'right' }) }"
          title="تراز راست (Align Right)"
          class="toolbar-button"
        >
          <RichTextEditorTextAlignEnd class="w-5 h-5" />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('justify').run()"
          :class="{ 'bg-blue-100 text-blue-700': editor.isActive({ textAlign: 'justify' }) }"
          title="تراز کامل (Justify)"
          class="toolbar-button"
        >
          <RichTextEditorTextAlignJustify class="w-5 h-5" />
        </button>
      </div>

      <span class="toolbar-divider"></span>

      <div class="flex items-center gap-0.5">
        <div class="relative inline-block">
          <label title="رنگ متن" class="toolbar-button cursor-pointer w-auto p-1.5 relative z-10">
            <RichTextEditorPalette class="w-5 h-5" :style="{ color: editor.getAttributes('textStyle').color || '#606060' }" /> 
          </label>
          
          <input 
            type="color" 
            @input="editor.chain().focus().setColor($event.target.value).run()"
            :value="editor.getAttributes('textStyle').color || '#000000'"
            class="color-input-overlay"
          >
        </div>

        <button @click="editor.chain().focus().unsetAllMarks().run()" title="حذف رنگ متن" class="toolbar-button" >
          <span class="text-sm font-semibold">C-</span>
        </button>
        
        <button @click="editor.chain().focus().toggleHighlight({ color: '#ffcc00' }).run()" :class="{ 'bg-blue-100 text-blue-700': editor.isActive('highlight') }" title="هایلایت" class="toolbar-button" >
          <RichTextEditorHighlighter class="w-5 h-5" style="color: #ffcc00;" />
        </button>

        <button @click="setLink" :class="{ 'bg-blue-100 text-blue-700': editor.isActive('link') }" title="افزودن/حذف لینک" class="toolbar-button" >
          <RichTextEditorLink class="w-5 h-5" />
        </button>
      </div>
      
      <span class="toolbar-divider"></span>

      <div class="flex items-center gap-0.5">
        <button
          @click="editor.chain().focus().undo().run()"
          :disabled="!editor.can().undo()"
          title="برگشت (Undo)"
          class="toolbar-button disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RichTextEditorUndo class="w-5 h-5" />
        </button>
        
        <button
          @click="editor.chain().focus().redo().run()"
          :disabled="!editor.can().redo()"
          title="تکرار (Redo)"
          class="toolbar-button disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RichTextEditorRedo class="w-5 h-5" />
        </button>
      </div>
    </div>

    <editor-content :editor="editor" class="prose max-w-none p-4 min-h-[300px] focus:outline-none transition-shadow" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { watch, onBeforeUnmount } from 'vue';

import Underline from '@tiptap/extension-underline';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import FontFamily from '@tiptap/extension-font-family'; 


const props = defineProps({
  modelValue: {
    type: String, 
    default: '',
  },
});

const emit = defineEmits(['update:modelValue', 'change']);


const setLink = () => {
  const previousUrl = editor.value.getAttributes('link').href;
  const url = window.prompt('URL وارد کنید:', previousUrl);

  if (url === null) {
    return;
  }

  if (url === '') {
    editor.value.chain().focus().extendMarkRange('link').unsetLink().run();
    return;
  }

  editor.value.chain().focus().extendMarkRange('link').setLink({ href: url, target: '_blank' }).run();
};

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit.configure({
      blockquote: false,
      codeBlock: false,
    }),
    Underline,
    TextStyle,
    FontFamily.configure({
      types: ['textStyle'],
    }),
    Color,
    Highlight.configure({
        multicolor: true,
        HTMLAttributes: {
            class: 'bg-yellow-200/70 rounded px-0.5', 
        },
    }),
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        target: '_blank',
        rel: 'noopener noreferrer nofollow',
      },
    }),
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
  ],
  onUpdate: ({ editor }) => {
    const html = editor.getHTML();
    emit('update:modelValue', html); 
  },
});

watch(
  () => props.modelValue,
  (value) => {
    if (editor.value && editor.value.getHTML() !== value) {
      editor.value.commands.setContent(value, false);
    }
  }
);

onBeforeUnmount(() => {
  editor.value.destroy();
});



onBeforeUnmount(() => {
  editor.value.destroy();
});

const getHtmlContent = () => {
    return editor.value ? editor.value.getHTML() : '';
};

defineExpose({ getHtmlContent });
</script>

<style>
.toolbar-button {
  @apply p-1.5 rounded-lg text-gray-600 hover:bg-gray-200 transition-all duration-150;
  @apply flex justify-center items-center; 
}

.toolbar-divider {
  @apply border-l border-gray-200 h-6 mx-1;
}

.color-input-override::-webkit-color-swatch-wrapper {
  padding: 0;
}
.color-input-override::-webkit-color-swatch {
  border: none;
  border-radius: 4px;
}


.prose :where(ul) {
    list-style-type: disc;
    margin-left: 1.5em;
    padding-left: 0.5em;
}
.prose :where(ol) {
    list-style-type: decimal;
    margin-left: 1.5em;
    padding-left: 0.5em;
}

.prose :where(h1) { @apply text-3xl font-extrabold my-4 border-b pb-2 border-gray-200; }
.prose :where(h2) { @apply text-2xl font-bold my-3; }
.prose :where(h3) { @apply text-xl font-semibold my-2; }
.prose :where(p) { @apply my-2 leading-relaxed; }

.prose :where(code) {
    @apply bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm;
}
.prose :where(blockquote) {
    @apply border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 text-blue-800 italic;
}

.prose a {
  @apply text-blue-600 hover:text-blue-800 underline transition-colors cursor-pointer;
}

.prose mark {
    background-color: var(--color);
    color: inherit;
    @apply rounded px-0.5;
}

.prose :where(hr) {
    @apply border-gray-300 my-4;
}

.color-input-overlay {
    @apply absolute top-0 right-0 h-full w-full opacity-0 cursor-pointer; 
    z-index: 20; 
    padding: 0;
    margin: 0;
}

.color-input-overlay::-webkit-color-swatch-wrapper {
  padding: 0;
}
.color-input-overlay::-webkit-color-swatch {
  border: none;
  border-radius: 4px;
}
</style>