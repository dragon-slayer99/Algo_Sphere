import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import dividepoweroftwoPy from '@/components/code/python/bit_manipulation/divide_power_of_two.py?raw'
import dividepoweroftwoJava from '@/components/code/java/bit_manipulation/divide_power_of_two.java?raw'
import dividepoweroftwoJs from '@/components/code/javascript/bit_manipulation/divide_power_of_two.js?raw'
import dividepoweroftwoCpp from '@/components/code/cpp/bit_manipulation/divide_power_of_two.cpp?raw'

function DividePowerOfTwo() {
  return (
    <div>
      <CodeTab
        ID={'divide-power-of-two'}
        pythonCode={dividepoweroftwoPy}
        javaCode={dividepoweroftwoJava}
        javascriptCode={dividepoweroftwoJs}
        cppCode={dividepoweroftwoCpp}
        algorithmName={'Divide Power of Two'}
      />
    </div>
  )
}
export default DividePowerOfTwo
