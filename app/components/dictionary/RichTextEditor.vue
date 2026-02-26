<template>
  <div class="rte-shell">
    <!-- Word-like toolbar -->
    <div v-if="editor" class="rte-ribbon" dir="ltr">
      <!-- FONT GROUP -->
      <section class="rte-group" aria-label="Font">
        <div class="rte-group-body">
          <!-- row 1 -->
          <div class="rte-row rte-row-1">
            <select
              class="rte-select rte-font"
              :value="currentFontFamily"
              @change="onFontChange"
              title="Font"
            >
              <option value="Cambria">Cambria</option>
              <option value="Calibri">Calibri</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Arial">Arial</option>
              <option value="Tahoma">Tahoma</option>
              <option value="Georgia">Georgia</option>
              <option value="Vazirmatn, sans-serif">Vazirmatn</option>
              <option value="IRANSans, sans-serif">IRANSans</option>
              <option value="">(Default)</option>
            </select>

            <select
              class="rte-select rte-size"
              :value="currentFontSize"
              @change="onFontSizeChange"
              title="Font Size"
            >
              <option v-for="s in fontSizes" :key="s" :value="s">{{ s }}</option>
            </select>

            <button class="rte-btn" @click="adjustFontSize(1)" title="Increase Font Size">
              <IconAUp />
            </button>
            <button class="rte-btn" @click="adjustFontSize(-1)" title="Decrease Font Size">
              <IconADown />
            </button>

            <span class="rte-sep"></span>

            <!-- Aa dropdown -->
            <div class="rte-dd">
              <button class="rte-btn rte-btn-dd" type="button" title="Change Case">
                <IconAa /><span class="rte-caret">▼</span>
              </button>
              <select class="rte-dd-select" :value="caseMode" @change="applyCase" aria-label="Change Case">
                <option value="none">Aa</option>
                <option value="lower">lowercase</option>
                <option value="upper">UPPERCASE</option>
                <option value="title">Capitalize Each Word</option>
                <option value="sentence">Sentence case</option>
              </select>
            </div>
          </div>

          <!-- row 2 -->
          <div class="rte-row rte-row-2">
            <button class="rte-btn" :class="btnOn('bold')" @click="cmd('toggleBold')" title="Bold">
              <IconBold />
            </button>
            <button class="rte-btn" :class="btnOn('italic')" @click="cmd('toggleItalic')" title="Italic">
              <IconItalic />
            </button>
            <button class="rte-btn" :class="btnOn('underline')" @click="cmd('toggleUnderline')" title="Underline">
              <IconUnderline />
            </button>
            <button class="rte-btn" :class="btnOn('strike')" @click="cmd('toggleStrike')" title="Strikethrough">
              <IconStrike />
            </button>

            <button class="rte-btn" :class="btnOn('subscript')" @click="cmd('toggleSubscript')" title="Subscript">
              <IconSubscript />
            </button>
            <button class="rte-btn" :class="btnOn('superscript')" @click="cmd('toggleSuperscript')" title="Superscript">
              <IconSuperscript />
            </button>

            <span class="rte-sep"></span>

            <!-- highlight -->
            <div class="rte-color">
              <button class="rte-btn rte-btn-wide" title="Text Highlight Color">
                <IconHighlight />
                <span class="rte-color-bar" :style="{ background: currentHighlight }"></span>
              </button>
              <input class="rte-color-input" type="color" :value="currentHighlight" @input="setHighlight" />
            </div>

            <!-- font color -->
            <div class="rte-color">
              <button class="rte-btn rte-btn-wide" title="Font Color">
                <IconFontColor />
                <span class="rte-color-bar" :style="{ background: currentColor }"></span>
              </button>
              <input class="rte-color-input" type="color" :value="currentColor" @input="setColor" />
            </div>
          </div>
        </div>
        <div class="rte-group-title">Font</div>
      </section>

      <!-- PARAGRAPH GROUP -->
      <section class="rte-group" aria-label="Paragraph">
        <div class="rte-group-body">
          <!-- row 1 -->
          <div class="rte-row rte-row-1">
            <div class="rte-dd">
              <button class="rte-btn rte-btn-dd" type="button" title="Bullets">
                <IconBullets /><span class="rte-caret">▼</span>
              </button>
              <select class="rte-dd-select" @change="onBulletsPreset">
                <option value="toggle">Bullets</option>
                <option value="toggle">Default</option>
              </select>
            </div>

            <div class="rte-dd">
              <button class="rte-btn rte-btn-dd" type="button" title="Numbering">
                <IconNumbering /><span class="rte-caret">▼</span>
              </button>
              <select class="rte-dd-select" @change="onNumberingPreset">
                <option value="toggle">Numbering</option>
                <option value="toggle">1,2,3</option>
              </select>
            </div>

            <div class="rte-dd">
              <button class="rte-btn rte-btn-dd" type="button" title="Multilevel List">
                <IconMultilevel /><span class="rte-caret">▼</span>
              </button>
              <select class="rte-dd-select" @change="onMultilevelPreset">
                <option value="toggle">Multilevel</option>
                <option value="toggle">Default</option>
              </select>
            </div>

            <span class="rte-sep"></span>

            <button class="rte-btn" @click="outdent" title="Decrease Indent">
              <IconOutdent />
            </button>
            <button class="rte-btn" @click="indent" title="Increase Indent">
              <IconIndent />
            </button>

            <button class="rte-btn" @click="sortSelectedLines" title="Sort">
              <IconSort />
            </button>
          </div>

          <!-- row 2 -->
          <div class="rte-row rte-row-2">
            <button class="rte-btn" :class="btnAlign('left')" @click="setAlign('left')" title="Align Left">
              <IconAlignLeft />
            </button>
            <button class="rte-btn" :class="btnAlign('center')" @click="setAlign('center')" title="Center">
              <IconAlignCenter />
            </button>
            <button class="rte-btn" :class="btnAlign('right')" @click="setAlign('right')" title="Align Right">
              <IconAlignRight />
            </button>
            <button class="rte-btn" :class="btnAlign('justify')" @click="setAlign('justify')" title="Justify">
              <IconAlignJustify />
            </button>

            <div class="rte-dd">
              <button class="rte-btn rte-btn-dd" type="button" title="Line Spacing">
                <IconLineSpacing /><span class="rte-caret">▼</span>
              </button>
              <select class="rte-dd-select" :value="currentLineHeight" @change="setLineHeight" aria-label="Line spacing">
                <option v-for="lh in lineHeights" :key="lh" :value="lh">{{ lh }}</option>
              </select>
            </div>

            <div class="rte-dd">
              <button class="rte-btn rte-btn-dd" type="button" title="Shading">
                <IconShading /><span class="rte-caret">▼</span>
              </button>
              <select class="rte-dd-select" @change="applyParagraphShading">
                <option value="">No Shading</option>
                <option value="#fff2ac">Light Yellow</option>
                <option value="#e3f2fd">Light Blue</option>
                <option value="#e8f5e9">Light Green</option>
              </select>
            </div>

            <div class="rte-dd">
              <button class="rte-btn rte-btn-dd" type="button" title="Borders">
                <IconBorders /><span class="rte-caret">▼</span>
              </button>
              <select class="rte-dd-select" @change="applyParagraphBorder">
                <option value="">No Border</option>
                <option value="1px solid #6b6b6b">Box</option>
                <option value="1px solid #c0c0c0">Light Box</option>
              </select>
            </div>

            <button
              class="rte-btn"
              :class="{ 'rte-btn-on': showFormattingMarks }"
              @click="showFormattingMarks = !showFormattingMarks"
              title="Show/Hide ¶"
            >
              <IconPilcrow />
            </button>
          </div>
        </div>
        <div class="rte-group-title">Paragraph</div>
      </section>
    </div>

    <!-- Editor -->
    <div class="rte-editor-wrap" :class="{ 'rte-show-marks': showFormattingMarks }">
      <editor-content :editor="editor" class="rte-editor" :dir="contentDir" />
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, watch, ref } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Color from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import FontFamily from '@tiptap/extension-font-family'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import { TextStyle } from '@tiptap/extension-text-style'
import { Extension } from '@tiptap/core'

const props = defineProps({
  modelValue: { type: String, default: '' },
  dir: { type: String, default: 'auto' },
})
const emit = defineEmits(['update:modelValue', 'change'])

/* ---------- Extensions: FontSize / LineHeight / Indent / ParaStyle ---------- */
const FontSize = Extension.create({
  name: 'fontSize',
  addGlobalAttributes() {
    return [
      {
        types: ['textStyle'],
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (el) => el.style.fontSize?.replace('px', '') || null,
            renderHTML: (attrs) => (attrs.fontSize ? { style: `font-size: ${attrs.fontSize}px` } : {}),
          },
        },
      },
    ]
  },
  addCommands() {
    return {
      setFontSize:
        (size) =>
        ({ chain }) =>
          chain().setMark('textStyle', { fontSize: String(size) }).run(),
      unsetFontSize:
        () =>
        ({ chain }) =>
          chain().setMark('textStyle', { fontSize: null }).removeEmptyTextStyle().run(),
    }
  },
})

const LineHeight = Extension.create({
  name: 'lineHeight',
  addGlobalAttributes() {
    return [
      {
        types: ['paragraph', 'heading'],
        attributes: {
          lineHeight: {
            default: null,
            parseHTML: (el) => el.style.lineHeight || null,
            renderHTML: (attrs) => (attrs.lineHeight ? { style: `line-height: ${attrs.lineHeight}` } : {}),
          },
        },
      },
    ]
  },
  addCommands() {
    return {
      setLineHeight:
        (value) =>
        ({ chain }) =>
          chain().updateAttributes('paragraph', { lineHeight: value }).updateAttributes('heading', { lineHeight: value }).run(),
    }
  },
})

const Indent = Extension.create({
  name: 'indent',
  addGlobalAttributes() {
    return [
      {
        types: ['paragraph', 'heading', 'listItem'],
        attributes: {
          indent: {
            default: 0,
            parseHTML: (el) => Number(el.getAttribute('data-indent') || 0),
            renderHTML: (attrs) => {
              const n = Number(attrs.indent || 0)
              return n ? { 'data-indent': String(n), style: `margin-left: ${n * 24}px` } : {}
            },
          },
        },
      },
    ]
  },
  addCommands() {
    const clamp = (n) => Math.max(0, Math.min(8, n))
    const bump = (delta) => ({ editor }) => {
      const types = ['paragraph', 'heading', 'listItem']
      let updated = false
      for (const t of types) {
        if (editor.isActive(t)) {
          const attrs = editor.getAttributes(t)
          const next = clamp(Number(attrs.indent || 0) + delta)
          editor.commands.updateAttributes(t, { indent: next })
          updated = true
        }
      }
      if (!updated) {
        if (delta > 0) editor.commands.sinkListItem('listItem')
        else editor.commands.liftListItem('listItem')
      }
      return true
    }
    return { indent: () => bump(1), outdent: () => bump(-1) }
  },
})

/** Paragraph shading/border (برای نزدیک شدن به Word) */
const ParaStyle = Extension.create({
  name: 'paraStyle',
  addGlobalAttributes() {
    return [
      {
        types: ['paragraph'],
        attributes: {
          background: {
            default: null,
            parseHTML: (el) => el.style.backgroundColor || null,
            renderHTML: (attrs) => (attrs.background ? { style: `background-color: ${attrs.background}` } : {}),
          },
          border: {
            default: null,
            parseHTML: (el) => el.style.border || null,
            renderHTML: (attrs) => (attrs.border ? { style: `border: ${attrs.border}; padding: 2px 4px; border-radius: 3px;` } : {}),
          },
        },
      },
    ]
  },
  addCommands() {
    return {
      setParaBackground:
        (color) =>
        ({ chain }) =>
          chain().updateAttributes('paragraph', { background: color || null }).run(),
      setParaBorder:
        (border) =>
        ({ chain }) =>
          chain().updateAttributes('paragraph', { border: border || null }).run(),
    }
  },
})

/* ---------- UI state ---------- */
const fontSizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72]
const lineHeights = ['1', '1.15', '1.5', '2', '2.5', '3']
const showFormattingMarks = ref(false)
const caseMode = ref('none')

/* ---------- Editor ---------- */
const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit.configure({ codeBlock: false }),
    Underline,
    TextStyle,
    FontFamily.configure({ types: ['textStyle'] }),
    FontSize,
    Color,
    Highlight.configure({ multicolor: true }),
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    Subscript,
    Superscript,
    LineHeight,
    Indent,
    ParaStyle,
  ],
  onUpdate: ({ editor }) => {
    const html = editor.getHTML()
    emit('update:modelValue', html)
    emit('change', html)
  },
})

watch(
  () => props.modelValue,
  (value) => {
    if (editor.value && editor.value.getHTML() !== value) editor.value.commands.setContent(value, false)
  },
)

onBeforeUnmount(() => editor.value?.destroy())

/* ---------- computed ---------- */
const contentDir = computed(() => (props.dir === 'auto' ? 'auto' : props.dir))
const currentFontFamily = computed(() => editor.value?.getAttributes('textStyle')?.fontFamily || 'Cambria')
const currentFontSize = computed(() => {
  const s = editor.value?.getAttributes('textStyle')?.fontSize
  if (!s) return 16
  const n = Number(String(s).replace('px', ''))
  return Number.isFinite(n) ? n : 16
})
const currentColor = computed(() => editor.value?.getAttributes('textStyle')?.color || '#000000')
const currentHighlight = computed(() => editor.value?.getAttributes('highlight')?.color || '#fff2ac')
const currentLineHeight = computed(() => editor.value?.getAttributes('paragraph')?.lineHeight || '1.15')

/* ---------- helpers ---------- */
function cmd(name) {
  const e = editor.value
  if (!e) return
  e.chain().focus()[name]().run()
}
function btnOn(markOrNode) {
  return editor.value?.isActive(markOrNode) ? 'rte-btn-on' : ''
}
function btnAlign(v) {
  return editor.value?.isActive({ textAlign: v }) ? 'rte-btn-on' : ''
}

/* ---------- actions ---------- */
function setAlign(v) {
  editor.value?.chain().focus().setTextAlign(v).run()
}
function onFontChange(e) {
  const v = e.target.value
  editor.value?.chain().focus().setFontFamily(v || null).run()
}
function onFontSizeChange(e) {
  const v = Number(e.target.value)
  if (!Number.isFinite(v)) return
  editor.value?.chain().focus().setFontSize(v).run()
}
function adjustFontSize(delta) {
  const cur = currentFontSize.value
  const idx = fontSizes.indexOf(cur)
  let next = cur + delta
  if (idx >= 0) {
    const j = Math.max(0, Math.min(fontSizes.length - 1, idx + (delta > 0 ? 1 : -1)))
    next = fontSizes[j]
  }
  next = Math.max(1, Math.min(200, next))
  editor.value?.chain().focus().setFontSize(next).run()
}
function setColor(e) {
  editor.value?.chain().focus().setColor(e.target.value).run()
}
function setHighlight(e) {
  editor.value?.chain().focus().toggleHighlight({ color: e.target.value }).run()
}
function setLineHeight(e) {
  editor.value?.chain().focus().setLineHeight(String(e.target.value)).run()
}
function indent() {
  editor.value?.chain().focus().indent().run()
}
function outdent() {
  editor.value?.chain().focus().outdent().run()
}

/* bullets/numbering/multilevel dropdowns (ظاهر مثل Word، عملکرد اصلی toggle) */
function onBulletsPreset() {
  editor.value?.chain().focus().toggleBulletList().run()
}
function onNumberingPreset() {
  editor.value?.chain().focus().toggleOrderedList().run()
}
function onMultilevelPreset() {
  // Word-like ظاهر: در TipTap ساده‌ترین رفتارِ نزدیک: ordered list + اجازه indent/outdent
  editor.value?.chain().focus().toggleOrderedList().run()
}

/* Sort selected lines (برای دکمه A↓Z) */
function sortSelectedLines() {
  const e = editor.value
  if (!e) return
  const { from, to } = e.state.selection
  if (from === to) return
  const txt = e.state.doc.textBetween(from, to, '\n')
  const lines = txt.split('\n')
  const sorted = [...lines].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).join('\n')
  e.commands.command(({ tr }) => {
    tr.insertText(sorted, from, to)
    return true
  })
}

/* Paragraph shading / border */
function applyParagraphShading(e) {
  editor.value?.chain().focus().setParaBackground(String(e.target.value || '')).run()
}
function applyParagraphBorder(e) {
  editor.value?.chain().focus().setParaBorder(String(e.target.value || '')).run()
}

/* Change case */
function applyCase(e) {
  const mode = String(e.target.value)
  caseMode.value = mode
  if (mode === 'none' || !editor.value) return

  const { from, to } = editor.value.state.selection
  if (from === to) return

  const selected = editor.value.state.doc.textBetween(from, to, '\n')
  const transformed = transformCase(selected, mode)

  editor.value.commands.command(({ tr }) => {
    tr.insertText(transformed, from, to)
    return true
  })
}
function transformCase(text, mode) {
  if (!text) return text
  if (mode === 'lower') return text.toLowerCase()
  if (mode === 'upper') return text.toUpperCase()
  if (mode === 'title') return text.toLowerCase().replace(/\b([\p{L}])/gu, (m) => m.toUpperCase())
  if (mode === 'sentence') {
    const lower = text.toLowerCase()
    return lower.replace(/(^\s*[\p{L}]|[.!?]\s+[\p{L}])/gu, (m) => m.toUpperCase())
  }
  return text
}

defineExpose({ getHtmlContent: () => (editor.value ? editor.value.getHTML() : '') })

/* ---------------- Icons (inline SVG, Word-like) ---------------- */
const IconBold = { template: `<svg viewBox="0 0 24 24"><path d="M7 5h7a4 4 0 010 8H7V5zm0 10h8a4 4 0 010 8H7v-8z"/></svg>` }
const IconItalic = { template: `<svg viewBox="0 0 24 24"><path d="M10 5h10v2h-4l-4 10h4v2H6v-2h4l4-10h-4V5z"/></svg>` }
const IconUnderline = { template: `<svg viewBox="0 0 24 24"><path d="M7 5v6a5 5 0 0010 0V5h-2v6a3 3 0 01-6 0V5H7z"/><path d="M5 19h14v2H5z"/></svg>` }
const IconStrike = { template: `<svg viewBox="0 0 24 24"><path d="M4 11h16v2H4z"/><path d="M8 6a4 4 0 018 0h-2a2 2 0 00-4 0c0 1 1 1.5 3 2h-3c-2-.6-4-1.6-4-4z"/><path d="M16 18a4 4 0 01-8 0h2a2 2 0 004 0c0-1-1-1.5-3-2h3c2 .6 4 1.6 4 4z"/></svg>` }

const IconSubscript = { template: `<svg viewBox="0 0 24 24"><path d="M5 6h3l3 5 3-5h3l-4.5 7 4.5 7h-3l-3-5-3 5H5l4.5-7L5 6z"/><path d="M17 19h4v2h-6v-1l2-2c.7-.7.9-1 .9-1.3 0-.4-.3-.7-.8-.7-.6 0-1 .3-1.4.8l-1-.9c.6-.8 1.4-1.3 2.6-1.3 1.6 0 2.6.9 2.6 2.2 0 .8-.4 1.4-1.6 2.5l-.9.9z"/></svg>` }
const IconSuperscript = { template: `<svg viewBox="0 0 24 24"><path d="M5 6h3l3 5 3-5h3l-4.5 7 4.5 7h-3l-3-5-3 5H5l4.5-7L5 6z"/><path d="M16 6h4v2h-6V7l2-2c.7-.7.9-1 .9-1.3 0-.4-.3-.7-.8-.7-.6 0-1 .3-1.4.8l-1-.9c.6-.8 1.4-1.3 2.6-1.3 1.6 0 2.6.9 2.6 2.2 0 .8-.4 1.4-1.6 2.5l-.9.9z"/></svg>` }

const IconHighlight = { template: `<svg viewBox="0 0 24 24"><path d="M6 14l8-8 4 4-8 8H6v-4z"/><path d="M4 20h16v2H4z"/></svg>` }
const IconFontColor = { template: `<svg viewBox="0 0 24 24"><path d="M8 20h2l1-3h6l1 3h2l-6-16h-2L8 20zm4-5l2-6 2 6h-4z"/><path d="M4 22h16v-2H4z"/></svg>` }

const IconBullets = { template: `<svg viewBox="0 0 24 24"><path d="M4 6h2v2H4zM8 6h12v2H8zM4 11h2v2H4zM8 11h12v2H8zM4 16h2v2H4zM8 16h12v2H8z"/></svg>` }
const IconNumbering = { template: `<svg viewBox="0 0 24 24"><path d="M8 6h12v2H8zM8 11h12v2H8zM8 16h12v2H8z"/><path d="M4 6h2v6H2v-2h2V8H2V6h2zm-2 14v-1l2-2c.5-.5.7-.7.7-1 0-.3-.2-.6-.7-.6-.4 0-.8.2-1.1.6l-.9-.8c.5-.7 1.2-1.1 2.1-1.1 1.2 0 2 .7 2 1.7 0 .7-.4 1.2-1.2 2l-.8.8H6v1H2z"/></svg>` }
const IconMultilevel = { template: `<svg viewBox="0 0 24 24"><path d="M4 6h2v2H4zM8 6h12v2H8zM6 11h2v2H6zM10 11h10v2H10zM8 16h2v2H8zM12 16h8v2h-8z"/></svg>` }

const IconIndent = { template: `<svg viewBox="0 0 24 24"><path d="M4 6h16v2H4zM4 10h10v2H4zM4 14h16v2H4zM4 18h10v2H4z"/><path d="M15 10l5 4-5 4v-8z"/></svg>` }
const IconOutdent = { template: `<svg viewBox="0 0 24 24"><path d="M4 6h16v2H4zM10 10h10v2H10zM4 14h16v2H4zM10 18h10v2H10z"/><path d="M9 10v8l-5-4 5-4z"/></svg>` }

const IconAlignLeft = { template: `<svg viewBox="0 0 24 24"><path d="M4 6h16v2H4zM4 10h10v2H4zM4 14h16v2H4zM4 18h10v2H4z"/></svg>` }
const IconAlignCenter = { template: `<svg viewBox="0 0 24 24"><path d="M4 6h16v2H4zM7 10h10v2H7zM4 14h16v2H4zM7 18h10v2H7z"/></svg>` }
const IconAlignRight = { template: `<svg viewBox="0 0 24 24"><path d="M4 6h16v2H4zM10 10h10v2H10zM4 14h16v2H4zM10 18h10v2H10z"/></svg>` }
const IconAlignJustify = { template: `<svg viewBox="0 0 24 24"><path d="M4 6h16v2H4zM4 10h16v2H4zM4 14h16v2H4zM4 18h16v2H4z"/></svg>` }

const IconLineSpacing = { template: `<svg viewBox="0 0 24 24"><path d="M7 7h14v2H7zM7 11h14v2H7zM7 15h14v2H7z"/><path d="M4 6L2 8h1v8H2l2 2 2-2H5V8h1L4 6z"/></svg>` }
const IconShading = { template: `<svg viewBox="0 0 24 24"><path d="M4 7l8-4 8 4v10l-8 4-8-4V7zm8-2.2L6 7v8.8l6 3 6-3V7l-6-2.2z"/><path d="M7 10h10v2H7zM7 14h10v2H7z"/></svg>` }
const IconBorders = { template: `<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6z"/><path d="M4 11h16v2H4zM11 4h2v16h-2z"/></svg>` }
const IconSort = { template: `<svg viewBox="0 0 24 24"><path d="M7 4h2v14h3l-4 4-4-4h3V4z"/><path d="M13 6h8v2h-8zM13 10h6v2h-6zM13 14h4v2h-4z"/></svg>` }

const IconPilcrow = { template: `<svg viewBox="0 0 24 24"><path d="M10 4h10v2h-4v16h-2V6h-2v8a6 6 0 01-6-6V4h4zm-2 2v2a4 4 0 004 4V6H8z"/></svg>` }

const IconAa = { template: `<svg viewBox="0 0 24 24"><path d="M4 18l4-12h2l4 12h-2l-1-3H7l-1 3H4zm3.6-5H10L8.8 9.2 7.6 13z"/><path d="M14 18V6h4a3 3 0 010 6h-2v6h-2zm2-8h2a1 1 0 000-2h-2v2z"/></svg>` }
const IconAUp = { template: `<svg viewBox="0 0 24 24"><path d="M4 20l5-14h2l5 14h-2l-1-3H7l-1 3H4zm3.6-5h4.8L10 8.8 7.6 15z"/><path d="M18 9l3-3 3 3h-2v5h-2V9h-2z"/></svg>` }
const IconADown = { template: `<svg viewBox="0 0 24 24"><path d="M4 20l5-14h2l5 14h-2l-1-3H7l-1 3H4zm3.6-5h4.8L10 8.8 7.6 15z"/><path d="M18 15h2V10h2l-3-3-3 3h2v5z"/></svg>` }
</script>

<style scoped>
/* ---- Shell ---- */
.rte-shell {
  border: 1px solid #cfcfcf;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
}

/* ---- Ribbon: single line like Word ---- */
.rte-ribbon {
  display: flex;
  gap: 10px;
  padding: 4px 6px;
  background: linear-gradient(#fbfbfb, #eeeeee);
  border-bottom: 1px solid #d0d0d0;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}
.rte-ribbon::-webkit-scrollbar { height: 8px; }
.rte-ribbon::-webkit-scrollbar-thumb { background: #cfcfcf; border-radius: 8px; }

/* ---- Group ---- */
.rte-group {
  display: grid;
  grid-template-rows: 1fr auto;
  padding-right: 10px;
  border-right: 1px solid #d6d6d6;
  min-height: 68px;
}
.rte-group:last-child { border-right: none; padding-right: 0; }

.rte-group-body {
  display: grid;
  grid-template-rows: auto auto;
  align-content: center;
  gap: 4px;
  padding: 2px 2px 0 2px;
}

.rte-group-title {
  font-size: 11px;
  color: #666;
  text-align: center;
  padding: 2px 0 3px;
  user-select: none;
}

/* ---- Rows ---- */
.rte-row {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}
.rte-row-1 { margin-bottom: 1px; }
.rte-row-2 { margin-top: 0px; }

.rte-sep {
  width: 1px;
  height: 22px;
  background: #d7d7d7;
  margin: 0 4px;
}

/* ---- Selects ---- */
.rte-select {
  height: 24px;
  border: 1px solid #c9c9c9;
  border-radius: 2px;
  background: #fff;
  padding: 0 6px;
  font-size: 12px;
  color: #222;
}
.rte-font { width: 170px; }
.rte-size { width: 52px; text-align: center; }

/* ---- Buttons ---- */
.rte-btn {
  height: 24px;
  min-width: 24px;
  border-radius: 2px;
  border: 1px solid transparent;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  cursor: pointer;
  color: #222;
}
.rte-btn:hover {
  background: #fff;
  border-color: #c9c9c9;
}
.rte-btn-on {
  background: #fff3c6;
  border-color: #e1c35a;
}

/* svg sizes like ribbon */
.rte-btn :deep(svg) {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

/* dropdown overlay */
.rte-dd { position: relative; display: inline-flex; align-items: center; }
.rte-btn-dd { gap: 6px; padding: 0 6px; }
.rte-dd-select {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}
.rte-caret { font-size: 11px; opacity: 0.8; margin-left: 2px; }

/* color controls */
.rte-color { position: relative; display: inline-flex; align-items: center; }
.rte-color-input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
.rte-btn-wide { gap: 6px; padding: 0 6px; }
.rte-color-bar {
  width: 16px;
  height: 4px;
  border-radius: 2px;
  border: 1px solid #bbb;
}

/* ---- Editor area ---- */
.rte-editor-wrap { background: #fff; }
.rte-editor {
  padding: 14px;
  min-height: 320px;
  max-height: 520px;
  overflow: auto;
}
:deep(.ProseMirror) { outline: none; font-size: 14px; line-height: 1.5; }
:deep(.ProseMirror p) { margin: 0.6em 0; }
:deep(.ProseMirror ul),
:deep(.ProseMirror ol) { padding-left: 1.4em; }
:deep(.ProseMirror mark) { padding: 0 2px; border-radius: 2px; }

/* show ¶ (مثل Word) */
.rte-show-marks :deep(.ProseMirror p::after) {
  content: " ¶";
  color: #9a9a9a;
  font-size: 12px;
}
</style>