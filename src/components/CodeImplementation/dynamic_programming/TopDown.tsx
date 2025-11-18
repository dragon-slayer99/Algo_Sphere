import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import topdownPy from '@/components/code/python/dynamic_programming/top_down.py?raw'
import topdownJava from '@/components/code/java/dynamic_programming/top_down.java?raw'
import topdownJs from '@/components/code/javascript/dynamic_programming/top_down.js?raw'
import topdownCpp from '@/components/code/cpp/dynamic_programming/top_down.cpp?raw'

function TopDown() {
  return (
    <div>
      <CodeTab
        ID={'top-down'}
        pythonCode={topdownPy}
        javaCode={topdownJava}
        javascriptCode={topdownJs}
        cppCode={topdownCpp}
        algorithmName={'Top Down Dynamic Programming'}
      />
    </div>
  )
}
export default TopDown
