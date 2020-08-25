import { Flex } from '@chakra-ui/core'
import React from 'react'

import ExploreCard from '../molecules/ExploreCard'
interface community {
  name: string
  header: string
  desc?: string
  tags: string[]
}

interface trendingProps {
  trending: community[]
}

const TrendingGrid = (props: trendingProps) => {
  return (
    <>
      {[...Array(Math.ceil(props.trending.length / 2))].map((c, index) =>
        index % 2 === 0 ? (
          <Flex
            justify="space-between"
            key={index}
            h="12.5rem"
            marginBottom="1rem"
          >
            <ExploreCard
              image={props.trending[2 * index].header}
              tags={props.trending[2 * index].tags}
              size="lg"
              title={props.trending[2 * index].name}
              desc={props.trending[2 * index].desc}
            />
            <ExploreCard
              image={props.trending[2 * index + 1].header}
              tags={props.trending[2 * index + 1].tags}
              size="sm"
              title={props.trending[2 * index + 1].name}
              desc={props.trending[2 * index + 1].desc}
            />
          </Flex>
        ) : (
          <Flex
            justify="space-between"
            key={index}
            h="12.5rem"
            marginBottom="1rem"
          >
            <ExploreCard
              image={props.trending[2 * index].header}
              tags={props.trending[2 * index].tags}
              size="sm"
              title={props.trending[2 * index].name}
              desc={props.trending[2 * index].desc}
            />
            <ExploreCard
              image={props.trending[2 * index + 1].header}
              tags={props.trending[2 * index + 1].tags}
              size="lg"
              title={props.trending[2 * index + 1].name}
              desc={props.trending[2 * index + 1].desc}
            />
          </Flex>
        )
      )}
    </>
  )
}

export default TrendingGrid
