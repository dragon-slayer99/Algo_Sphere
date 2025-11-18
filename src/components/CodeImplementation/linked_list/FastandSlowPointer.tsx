import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import fastandslowpointerPy from '@/components/code/python/linked_list/fast_and_slow_pointer.py?raw'
import fastandslowpointerJava from '@/components/code/java/linked_list/fast_and_slow_pointer.java?raw'
import fastandslowpointerJs from '@/components/code/javascript/linked_list/fast_and_slow_pointer.js?raw'
import fastandslowpointerCpp from '@/components/code/cpp/linked_list/fast_and_slow_pointer.cpp?raw'

function FastAndSlowPointer() {
  return (
    <div>
      <CodeTab
        ID={'fast-and-slow-pointer'}
        pythonCode={fastandslowpointerPy}
        javaCode={fastandslowpointerJava}
        javascriptCode={fastandslowpointerJs}
        cppCode={fastandslowpointerCpp}
        algorithmName={'Fast and Slow Pointer'}
      />
    </div>
  )
}
export default FastAndSlowPointer
