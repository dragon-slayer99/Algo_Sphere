import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import clearkthbitPy from '@/components/code/python/bit_manipulation/clear_kth_bit.py?raw'
import clearkthbitJava from '@/components/code/java/bit_manipulation/clear_kth_bit.java?raw'
import clearkthbitJs from '@/components/code/javascript/bit_manipulation/clear_kth_bit.js?raw'
import clearkthbitCpp from '@/components/code/cpp/bit_manipulation/clear_kth_bit.cpp?raw'

function ClearKthBit() {
  return (
    <div>
      <CodeTab
        ID={'clear-kth-bit'}
        pythonCode={clearkthbitPy}
        javaCode={clearkthbitJava}
        javascriptCode={clearkthbitJs}
        cppCode={clearkthbitCpp}
        algorithmName={'Clear Kth Bit'}
      />
    </div>
  )
}
export default ClearKthBit
