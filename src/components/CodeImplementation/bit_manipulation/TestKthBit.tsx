import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import testkthbitPy from '@/components/code/python/bit_manipulation/test_kth_bit.py?raw'
import testkthbitJava from '@/components/code/java/bit_manipulation/test_kth_bit.java?raw'
import testkthbitJs from '@/components/code/javascript/bit_manipulation/test_kth_bit.js?raw'
import testkthbitCpp from '@/components/code/cpp/bit_manipulation/test_kth_bit.cpp?raw'

function TestKthBit() {
  return (
    <div>
      <CodeTab
        ID={'test-kth-bit'}
        pythonCode={testkthbitPy}
        javaCode={testkthbitJava}
        javascriptCode={testkthbitJs}
        cppCode={testkthbitCpp}
        algorithmName={'Test Kth Bit'}
      />
    </div>
  )
}
export default TestKthBit
