import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import diagonalsPy from '@/components/code/python/matrix/diagonals.py?raw'
import diagonalsJava from '@/components/code/java/matrix/diagonals.java?raw'
import diagonalsJs from '@/components/code/javascript/matrix/diagonals.js?raw'
import diagonalsCpp from '@/components/code/cpp/matrix/diagonals.cpp?raw'

function Diagonals() {
  return (
    <div>
      <CodeTab
        ID={'diagonals'}
        pythonCode={diagonalsPy}
        javaCode={diagonalsJava}
        javascriptCode={diagonalsJs}
        cppCode={diagonalsCpp}
        algorithmName={'Matrix Diagonals'}
      />
    </div>
  )
}
export default Diagonals
