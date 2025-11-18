import { useEffect, useState } from 'react'

// import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

// import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
// import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp';
// import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
// import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
// import styles from './CodeBlock.module.css'

import {Code} from 'bright'

import {CopyCheckIcon, CopyIcon} from 'lucide-react'
import styles from './CodeBlock.module.css'

Code.theme = "github-dark"


function CodeBlock({ code, language }) {
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);

  // for general clipboard feature (might not work in the localhost since this API requires secure connection https)
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 820)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  return (
    <div style={{position: 'relative'}}>
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
          cursor: 'pointer'
        }}
      >
        {copied ? <CopyCheckIcon/> : <CopyIcon/>}
      </button>
      <Code
        lang={language}
        lineNumbers
        style={{
          borderRadius: '8px',
          fontSize: isMobile ? '12px' : '16px',
          margin: 'auto',
          overflowX: isMobile ? 'visible' : 'auto',
          whiteSpace: isMobile ? 'pre-wrap' : 'pre',
          wordBreak: isMobile ? 'break-word' : 'normal',
          padding: isMobile ? '10px' : '15px',
        }}
        className={styles.codecontainer}
      >
        {code.trim()}
      </Code>
    </div>
  )
}
export default CodeBlock
