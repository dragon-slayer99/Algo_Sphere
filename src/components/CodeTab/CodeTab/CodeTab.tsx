import { useState } from 'react'

import CodeBlock from '../CodeBlock/CodeBlock'
import styles from './CodeTab.module.css'


import { cppIcon, javaIcon, javascriptIcon, pythonIcon } from '@/Icons'

function CodeTab({
  ID,
  pythonCode,
  javaCode,
  javascriptCode,
  cppCode,
  algorithmName,
}) {
  const [activeTab, setActiveTab] = useState('python')

  const handleTab = (tabID) => {
    setActiveTab(tabID)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'python':
        return <CodeBlock code={pythonCode} lang={'py'} />
        break
      case 'java':
        return <CodeBlock code={javaCode} lang={'java'} />
        break
      case 'javascript':
        return <CodeBlock code={javascriptCode} lang={'js'} />
        break
      case 'cpp':
        return <CodeBlock code={cppCode} lang={'cpp'} />
        break
      default:
        return null
    }
  }

  return (
    <div className={styles.tabwrapper} id={ID}>
      <h1 className={`${styles.title}`}>{algorithmName}</h1>
      <div className={styles.tabcontainer}>
        <div
          className={styles.tabs}
          style={
            {
              '--active-tab':
                activeTab === 'python'
                  ? 0
                  : activeTab === 'java'
                    ? 1
                    : activeTab === 'javascript'
                      ? 2
                      : 3,
            } as React.CSSProperties
          }
        >
          <input
            type="radio"
            id={`python-${ID}`}
            name={`tab-${ID}`}
            checked={activeTab === 'python'}
            onChange={() => handleTab('python')}
          />
          <label htmlFor={`python-${ID}`}>{pythonIcon}</label>

          <input
            type="radio"
            id={`java-${ID}`}
            name={`tab-${ID}`}
            checked={activeTab === 'java'}
            onChange={() => handleTab('java')}
          />
          <label htmlFor={`java-${ID}`}>{javaIcon}</label>

          <input
            type="radio"
            id={`javascript-${ID}`}
            name={`tab-${ID}`}
            checked={activeTab === 'javascript'}
            onChange={() => handleTab('javascript')}
          />
          <label htmlFor={`javascript-${ID}`}>{javascriptIcon}</label>

          <input
            type="radio"
            id={`cpp-${ID}`}
            name={`tab-${ID}`}
            checked={activeTab === 'cpp'}
            onChange={() => handleTab('cpp')}
          />
          <label htmlFor={`cpp-${ID}`}>{cppIcon}</label>
        </div>

        <div className={styles.tabcontent}>{renderTabContent()}</div>
      </div>
    </div>
  )
}
export default CodeTab
