import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import getrightmostbitPy from '@/components/code/python/bit_manipulation/get_rightmost_bit.py?raw'
import getrightmostbitJava from '@/components/code/java/bit_manipulation/get_rightmost_bit.java?raw'
import getrightmostbitJs from '@/components/code/javascript/bit_manipulation/get_rightmost_bit.js?raw'
import getrightmostbitCpp from '@/components/code/cpp/bit_manipulation/get_rightmost_bit.cpp?raw'

function GetRightmostBit() {
  return (
    <div>
      <CodeTab
        ID={'get-rightmost-bit'}
        pythonCode={getrightmostbitPy}
        javaCode={getrightmostbitJava}
        javascriptCode={getrightmostbitJs}
        cppCode={getrightmostbitCpp}
        algorithmName={'Get Rightmost Bit'}
      />
    </div>
  )
}
export default GetRightmostBit
