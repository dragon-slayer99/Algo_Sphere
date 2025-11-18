import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import togglekthbitPy from '@/components/code/python/bit_manipulation/toggle_kth_bit.py?raw'
import togglekthbitJava from '@/components/code/java/bit_manipulation/toggle_kth_bit.java?raw'
import togglekthbitJs from '@/components/code/javascript/bit_manipulation/toggle_kth_bit.js?raw'
import togglekthbitCpp from '@/components/code/cpp/bit_manipulation/toggle_kth_bit.cpp?raw'

function ToggleKthBit() {
  return (
    <div>
      <CodeTab
        ID={'toggle-kth-bit'}
        pythonCode={togglekthbitPy}
        javaCode={togglekthbitJava}
        javascriptCode={togglekthbitJs}
        cppCode={togglekthbitCpp}
        algorithmName={'Toggle Kth Bit'}
      />
    </div>
  )
}
export default ToggleKthBit
