import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import kahnPy from '@/components/code/python/graph/kahn.py?raw'
import kahnJava from '@/components/code/java/graph/kahn.java?raw'
import kahnJs from '@/components/code/javascript/graph/kahn.js?raw'
import kahnCpp from '@/components/code/cpp/graph/kahn.cpp?raw'

function Kahn() {
  return (
    <div>
      <CodeTab
        ID={'kahn'}
        pythonCode={kahnPy}
        javaCode={kahnJava}
        javascriptCode={kahnJs}
        cppCode={kahnCpp}
        algorithmName={"Kahn's algorithm"}
      />
    </div>
  )
}
export default Kahn
