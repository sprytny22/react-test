import { Grid, Flex, GridItem } from '@chakra-ui/react'
import React from 'react'

function Newest() {
  return (
      <Flex
        align="center"
        w="100%"
      >
        <Grid
          h="600px"
          w="100%"
          p={6}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          autoRows="row dense"
        >
          <GridItem rowSpan={2} colSpan={1} bg="tomato" w="100%">dupa</GridItem>
          <GridItem colSpan={2} bg="papayawhip">dupa</GridItem>
          <GridItem colSpan={2} bg="papayawhip">dupa</GridItem>
          <GridItem colSpan={4} bg="tomato">dupa</GridItem>
        </Grid>
      </Flex>
  )
}

export default Newest
