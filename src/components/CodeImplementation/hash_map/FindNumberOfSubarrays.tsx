import CodeTab from '@/components/CodeTab/CodeTab/CodeTab'

import findnumberofsubarraysPy from '@/components/code/python/hash_map/find_number_of_subarrays.py?raw'
import findnumberofsubarraysJava from '@/components/code/java/hash_map/find_number_of_subarrays.java?raw'
import findnumberofsubarraysJs from '@/components/code/javascript/hash_map/find_number_of_subarrays.js?raw'
import findnumberofsubarraysCpp from '@/components/code/cpp/hash_map/find_number_of_subarrays.cpp?raw'

function FindNumberOfSubarrays() {
  return (
    <div>
      <CodeTab
        ID={'find-number-of-subarrays'}
        pythonCode={findnumberofsubarraysPy}
        javaCode={findnumberofsubarraysJava}
        javascriptCode={findnumberofsubarraysJs}
        cppCode={findnumberofsubarraysCpp}
        algorithmName={'Find Number of Subarrays'}
      />
    </div>
  )
}
export default FindNumberOfSubarrays
