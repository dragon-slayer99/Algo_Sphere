import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import countsetbitsPy from '@/components/code/python/bit_manipulation/count_set_bits.py?raw'
import countsetbitsJava from '@/components/code/java/bit_manipulation/count_set_bits.java?raw'
import countsetbitsJs from '@/components/code/javascript/bit_manipulation/count_set_bits.js?raw'
import countsetbitsCpp from '@/components/code/cpp/bit_manipulation/count_set_bits.cpp?raw'

function CountSetBits() {
  return (
    <div>
      <CodeTab
        ID={'count-set-bits'}
        pythonCode={countsetbitsPy}
        javaCode={countsetbitsJava}
        javascriptCode={countsetbitsJs}
        cppCode={countsetbitsCpp}
        algorithmName={'Count Set Bits'}
      />
    </div>
  )
}
export default CountSetBits
