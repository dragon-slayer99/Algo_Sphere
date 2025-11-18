import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import kadanePy from '@/components/code/python/dynamic_programming/kadane.py?raw'
import kadaneJava from '@/components/code/java/dynamic_programming/kadane.java?raw'
import kadaneJs from '@/components/code/javascript/dynamic_programming/kadane.js?raw'
import kadaneCpp from '@/components/code/cpp/dynamic_programming/kadane.cpp?raw'

function Kadane() {
  return (
    <div>
      <CodeTab
        ID={'kadane'}
        pythonCode={kadanePy}
        javaCode={kadaneJava}
        javascriptCode={kadaneJs}
        cppCode={kadaneCpp}
        algorithmName={"Kadane's Algorithm"}
      />
    </div>
  )
}
export default Kadane
