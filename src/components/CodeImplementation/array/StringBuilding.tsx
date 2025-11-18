import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import stringbuildingPy from '@/components/code/python/array/string_building.py?raw'
import stringbuildingJava from '@/components/code/java/array/string_building.java?raw'
import stringbuildingJs from '@/components/code/javascript/array/string_building.js?raw'
import stringbuildingCpp from '@/components/code/cpp/array/string_building.cpp?raw'

function StringBuilding() {
  return (
    <div>
      <CodeTab
        ID={'string-building'}
        pythonCode={stringbuildingPy}
        javaCode={stringbuildingJava}
        javascriptCode={stringbuildingJs}
        cppCode={stringbuildingCpp}
        algorithmName={'String Building'}
      />
    </div>
  )
}
export default StringBuilding
