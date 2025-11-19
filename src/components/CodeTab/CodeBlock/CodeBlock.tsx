import { useEffect, useState } from 'react'
import Prism from 'prismjs'

import './prism-vsc-dark-plus.css'

import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-python'
import { CopyCheckIcon, CopyIcon } from 'lucide-react'

type CodeBlockProps = {
  code: string
  lang: string
}

export default function CodeBlock({ code, lang }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  useEffect(() => {
    // This triggers the highlighting whenever the component mounts or updates
    if (typeof window !== 'undefined') {
      Prism.highlightAll()
    }
  }, [code, lang])

  return (
    <div
      className="code-block-wrapper"
      style={{ borderRadius: '8px', overflow: 'hidden', position: 'relative' }}
    >
      <button
        onClick={copyToClipboard}
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          padding: '4px 8px',
          fontSize: '12px',
          background: 'transparent',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {copied ? <CopyCheckIcon /> : <CopyIcon />}
      </button>
      <pre className="line-numbers" style={{ margin: 0, padding: '1.5rem' }}>
        <code className={`language-${lang}`}>{code ? code.trim() : ''}</code>
      </pre>
    </div>
  )
}
