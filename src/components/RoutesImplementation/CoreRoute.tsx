import PrefixSum from '../CodeImplementation/array/PrefixSum'
import SlidingWindow from '../CodeImplementation/array/SlidingWindow'
import StringBuilding from '../CodeImplementation/array/StringBuilding'
import TwoPointersOneInput from '../CodeImplementation/array/TwoPointersOneInput'
import TwoPointersTwoInputs from '../CodeImplementation/array/TwoPointersTwoInputs'
import Bfs from '../CodeImplementation/binary_tree/Bfs'
import DfsIterative from '../CodeImplementation/binary_tree/DfsIterative'
import DfsRecursive from '../CodeImplementation/binary_tree/DfsRecursive'
import Array from '../CodeImplementation/data_structures/Array'
import BinaryTree from '../CodeImplementation/data_structures/BinaryTree'
import DoublyLinkedList from '../CodeImplementation/data_structures/DoublyLinkedList'
import HashMap from '../CodeImplementation/data_structures/HashMap'
import LinkedList from '../CodeImplementation/data_structures/LinkedList'
import Queue from '../CodeImplementation/data_structures/Queue'
import Stack from '../CodeImplementation/data_structures/Stack'
import FastAndSlowPointer from '@/components/CodeImplementation/linked_list/FastandSlowPointer'
import ReverseLinkedList from '@/components/CodeImplementation/linked_list/ReverseLinkedList'
import CreateCopy from '@/components/CodeImplementation/matrix/CreateCopy'
import Diagonals from '@/components/CodeImplementation/matrix/Diagonals'
import RotateTranspose from '@/components/CodeImplementation/matrix/RotateTranspose'
import MonotonicDecreasing from '@/components/CodeImplementation/stack/MonotonicDecreasing'
import MonotonicIncreasing from '@/components/CodeImplementation/stack/MonotonicIncreasing'

function CoreRoute() {
  return (
    <>
      <section>
        <Array />
        <BinaryTree />
        <DoublyLinkedList />
        <HashMap />
        <LinkedList />
        <Stack />
        <Queue />

        {/* <hr style={{ color: 'white', height: '1px' }} /> */}

        <PrefixSum />
        <StringBuilding />
        <TwoPointersOneInput />
        <TwoPointersTwoInputs />
        <SlidingWindow />

        {/* <hr style={{ color: 'white', height: '1px' }} /> */}

        <Bfs />
        <DfsIterative />
        <DfsRecursive />

        {/* <hr style={{ color: 'white', height: '1px' }} /> */}

        <ReverseLinkedList />
        <FastAndSlowPointer />

        {/* <hr style={{ color: 'white', height: '1px' }} /> */}

        <CreateCopy />
        <Diagonals />
        <RotateTranspose />

        {/* <hr style={{ color: 'white', height: '1px' }} /> */}

        <MonotonicDecreasing />
        <MonotonicIncreasing />
      </section>
    </>
  )
}
export default CoreRoute
