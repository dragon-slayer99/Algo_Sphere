import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import rotatetransposePy from '@/components/code/python/matrix/rotate_transpose.py?raw'
import rotatetransposeJava from '@/components/code/java/matrix/rotate_transpose.java?raw'
import rotatetransposeJs from '@/components/code/javascript/matrix/rotate_transpose.js?raw'
import rotatetransposeCpp from '@/components/code/cpp/matrix/rotate_transpose.cpp?raw'

function RotateTranspose() {
  return (
    <div>
      <CodeTab
        ID={'rotate-transpose'}
        pythonCode={rotatetransposePy}
        javaCode={rotatetransposeJava}
        javascriptCode={rotatetransposeJs}
        cppCode={rotatetransposeCpp}
        algorithmName={'Rotate Matrix by 90 Degrees'}
      />
    </div>
  )
}
export default RotateTranspose
