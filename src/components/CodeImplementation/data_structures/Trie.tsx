import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import triePy from '@/components/code/python/data_structures/trie.py?raw'
import trieJava from '@/components/code/java/data_structures/trie.java?raw'
import trieJs from '@/components/code/javascript/data_structures/trie.js?raw'
import trieCpp from '@/components/code/cpp/data_structures/trie.cpp?raw'

function Trie() {
  return (
    <div>
      <CodeTab
        ID={'trie'}
        pythonCode={triePy}
        javaCode={trieJava}
        javascriptCode={trieJs}
        cppCode={trieCpp}
        algorithmName={'Trie'}
      />
    </div>
  )
}
export default Trie
