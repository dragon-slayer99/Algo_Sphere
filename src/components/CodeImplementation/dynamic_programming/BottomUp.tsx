import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import bottomupPy from '@/components/code/python/dynamic_programming/bottom_up.py?raw'
import bottomupJava from '@/components/code/java/dynamic_programming/bottom_up.java?raw'
import bottomupJs from '@/components/code/javascript/dynamic_programming/bottom_up.js?raw'
import bottomupCpp from '@/components/code/cpp/dynamic_programming/bottom_up.cpp?raw'

function BottomUp() {
  return (
    <div>
      <CodeTab
        ID={'bottom-up'}
        pythonCode={bottomupPy}
        javaCode={bottomupJava}
        javascriptCode={bottomupJs}
        cppCode={bottomupCpp}
        algorithmName={'Bottom Up Dynamic Programming'}
      />
    </div>
  )
}
export default BottomUp
