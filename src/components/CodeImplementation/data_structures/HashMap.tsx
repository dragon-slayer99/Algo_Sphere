import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import hashmapPy from '@/components/code/python/data_structures/hash_map.py?raw'
import hashmapJava from '@/components/code/java/data_structures/hash_map.java?raw'
import hashmapJs from '@/components/code/javascript/data_structures/hash_map.js?raw'
import hashmapCpp from '@/components/code/cpp/data_structures/hash_map.cpp?raw'

function HashMap() {
  return (
    <div>
      <CodeTab
        ID={'hash-map'}
        pythonCode={hashmapPy}
        javaCode={hashmapJava}
        javascriptCode={hashmapJs}
        cppCode={hashmapCpp}
        algorithmName={'Hash Map'}
      />
    </div>
  )
}
export default HashMap
