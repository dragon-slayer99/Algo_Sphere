import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import primPy from '@/components/code/python/graph/prim.py?raw'
import primJava from '@/components/code/java/graph/prim.java?raw'
import primJs from '@/components/code/javascript/graph/prim.js?raw'
import primCpp from '@/components/code/cpp/graph/prim.cpp?raw'

function Prim() {
  return (
    <div>
      <CodeTab
        ID={'prim'}
        pythonCode={primPy}
        javaCode={primJava}
        javascriptCode={primJs}
        cppCode={primCpp}
        algorithmName={"Prim's algorithm"}
      />
    </div>
  )
}
export default Prim
