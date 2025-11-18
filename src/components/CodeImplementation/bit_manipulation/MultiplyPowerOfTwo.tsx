import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import multiplypoweroftwoPy from '@/components/code/python/bit_manipulation/multiply_power_of_two.py?raw'
import multiplypoweroftwoJava from '@/components/code/java/bit_manipulation/multiply_power_of_two.java?raw'
import multiplypoweroftwoJs from '@/components/code/javascript/bit_manipulation/multiply_power_of_two.js?raw'
import multiplypoweroftwoCpp from '@/components/code/cpp/bit_manipulation/multiply_power_of_two.cpp?raw'

function MultiplyPowerOfTwo() {
  return (
    <div>
      <CodeTab
        ID={'multiply-power-of-two'}
        pythonCode={multiplypoweroftwoPy}
        javaCode={multiplypoweroftwoJava}
        javascriptCode={multiplypoweroftwoJs}
        cppCode={multiplypoweroftwoCpp}
        algorithmName={'Multiply Power of Two'}
      />
    </div>
  )
}
export default MultiplyPowerOfTwo
