import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import slidingwindowPy from '@/components/code/python/hash_map/sliding_window.py?raw'
import slidingwindowJava from '@/components/code/java/hash_map/sliding_window.java?raw'
import slidingwindowJs from '@/components/code/javascript/hash_map/sliding_window.js?raw'
import slidingwindowCpp from '@/components/code/cpp/hash_map/sliding_window.cpp?raw'

function SlidingWindowUsingHashmap() {
  return (
    <div>
      <CodeTab
        ID={'sliding-window-using-hashmap'}
        pythonCode={slidingwindowPy}
        javaCode={slidingwindowJava}
        javascriptCode={slidingwindowJs}
        cppCode={slidingwindowCpp}
        algorithmName={'Sliding Window(Hashmap)'}
      />
    </div>
  )
}
export default SlidingWindowUsingHashmap
