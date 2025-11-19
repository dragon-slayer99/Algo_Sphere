import { useEffect } from 'react'
import Prism from 'prismjs'

// 1. Import Prism CSS (Theme)
// import 'prismjs/themes/prism-tomorrow.css'
import './prism-vsc-dark-plus.css'

import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-python'

type CodeBlockProps = {
  code: string
  lang: string
}

export default function CodeBlock({ code, lang }: CodeBlockProps) {
  useEffect(() => {
    // This triggers the highlighting whenever the component mounts or updates
    if (typeof window !== 'undefined') {
      Prism.highlightAll()
    }
  }, [code, lang])

  return (
    <div
      className="code-block-wrapper"
      style={{ borderRadius: '8px', overflow: 'hidden' }}
    >
      <pre className="line-numbers" style={{ margin: 0, padding: '1.5rem' }}>
        <code className={`language-${lang}`}>{code ? code.trim() : ''}</code>
      </pre>
    </div>
  )
}
