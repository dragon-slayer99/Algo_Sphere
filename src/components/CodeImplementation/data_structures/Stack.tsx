import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import stackPy from '@/components/code/python/data_structures/stack.py?raw'
import stackJava from '@/components/code/java/data_structures/stack.java?raw'
import stackJs from '@/components/code/javascript/data_structures/stack.js?raw'
import stackCpp from '@/components/code/cpp/data_structures/stack.cpp?raw'

function Stack() {
  return (
    <div>
      <CodeTab
        ID={'stack'}
        pythonCode={stackPy}
        javaCode={stackJava}
        javascriptCode={stackJs}
        cppCode={stackCpp}
        algorithmName={'Stack'}
      />
    </div>
  )
}
export default Stack
