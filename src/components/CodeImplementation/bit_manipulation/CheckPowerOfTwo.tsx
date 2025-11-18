import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import checkpoweroftwoPy from '@/components/code/python/bit_manipulation/check_power_of_two.py?raw'
import checkpoweroftwoJava from '@/components/code/java/bit_manipulation/check_power_of_two.java?raw'
import checkpoweroftwoJs from '@/components/code/javascript/bit_manipulation/check_power_of_two.js?raw'
import checkpoweroftwoCpp from '@/components/code/cpp/bit_manipulation/check_power_of_two.cpp?raw'

function ChechPowerOfTwo() {
  return (
    <div>
      <CodeTab
        ID={'check-power-of-two'}
        pythonCode={checkpoweroftwoPy}
        javaCode={checkpoweroftwoJava}
        javascriptCode={checkpoweroftwoJs}
        cppCode={checkpoweroftwoCpp}
        algorithmName={'Check power of two'}
      />
    </div>
  )
}
export default ChechPowerOfTwo
