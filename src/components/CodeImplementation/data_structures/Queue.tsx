import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import queuePy from '@/components/code/python/data_structures/queue.py?raw'
import queueJava from '@/components/code/java/data_structures/queue.java?raw'
import queueJs from '@/components/code/javascript/data_structures/queue.js?raw'
import queueCpp from '@/components/code/cpp/data_structures/queue.cpp?raw'

function Queue() {
  return (
    <div>
      <CodeTab
        ID={'queue'}
        pythonCode={queuePy}
        javaCode={queueJava}
        javascriptCode={queueJs}
        cppCode={queueCpp}
        algorithmName={'Queue'}
      />
    </div>
  )
}
export default Queue
