import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import setkthbitPy from '@/components/code/python/bit_manipulation/set_kth_bit.py?raw'
import setkthbitJava from '@/components/code/java/bit_manipulation/set_kth_bit.java?raw'
import setkthbitJs from '@/components/code/javascript/bit_manipulation/set_kth_bit.js?raw'
import setkthbitCpp from '@/components/code/cpp/bit_manipulation/set_kth_bit.cpp?raw'

function SetKthBit() {
  return (
    <div>
      <CodeTab
        ID={'set-kth-bit'}
        pythonCode={setkthbitPy}
        javaCode={setkthbitJava}
        javascriptCode={setkthbitJs}
        cppCode={setkthbitCpp}
        algorithmName={'Set Kth Bit'}
      />
    </div>
  )
}
export default SetKthBit
