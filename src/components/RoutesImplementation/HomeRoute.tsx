import HeroSection from '@/components/HeroSection/HeroSection'
import Chart from '@/components/Notations/Chart/Chart'
import DataStructureOperationsTable from '@/components/Notations/DataStructureOperationsTable'
import SortingAlgorithmsTable from '@/components/Notations/SortingAlgorithmsTable'
import CardLayout from '@/components/CardLayout/CardLayout/CardLayout'

function HomeRoute() {
  return (
    <>
      <HeroSection />
      <Chart />
      <DataStructureOperationsTable />
      <SortingAlgorithmsTable />
      <CardLayout />
    </>
  )
}
export default HomeRoute
