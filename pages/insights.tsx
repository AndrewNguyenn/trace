import Header from '../components/header'
import { Flex } from '@chakra-ui/layout'

const Insights = () => {
  return (
    <Flex direction='column' w='90%' h='100vh' p='1.5rem' m='1rem' overflowY='scroll' >
      <Header size='sm' text='Insights' />
    </Flex>
  )
}

export default Insights
