import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import swapvariablesPy from '@/components/code/python/bit_manipulation/swap_variables.py?raw'
import swapvariablesJava from '@/components/code/java/bit_manipulation/swap_variables.java?raw'
import swapvariablesJs from '@/components/code/javascript/bit_manipulation/swap_variables.js?raw'
import swapvariablesCpp from '@/components/code/cpp/bit_manipulation/swap_variables.cpp?raw'

function SwapVariables() {
  return (
    <div>
      <CodeTab
        ID={'swap-variables'}
        pythonCode={swapvariablesPy}
        javaCode={swapvariablesJava}
        javascriptCode={swapvariablesJs}
        cppCode={swapvariablesCpp}
        algorithmName={'Swap Variables'}
      />
    </div>
  )
}
export default SwapVariables
